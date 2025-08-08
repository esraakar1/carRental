import type { Car } from "../types";

type ReturnType = {
    results: Car[];
    total_count: number;
};

type FilterParams = {
    make?: string;
    model?: string;
    year?: string;
    offset?: number;
    limit?: number;
};

//  Asenkron fonksiyonların return tipinde doğrudan fonksiyonun return ettiği veriyi yazdığımız zaman hata alırız. asenkron fonksiyonların return tipi her zaman Promise type ı kullanılarak ifade edilmeli. sebebi ise fonksiyonun loading veya hata döndürme ihtimali diyebiliriz. 
// Promise interface i asenkron işlemlerin tipini ifade eder ona generic olarak gönderdiğimiz tip ise işlem başarılı olunca dönecek datanın tipidir.

export const fetchCars = async (filters?: FilterParams): Promise<ReturnType> => {
    const baseUrl = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records";
    
    const params = new URLSearchParams();
    
    // Pagination için offset ve limit ekle
    const limit = filters?.limit || 9;
    const offset = filters?.offset || 0;
    
    params.append('limit', limit.toString());
    params.append('offset', offset.toString());
    
    if (filters?.make) {
        params.append('refine', `make:${filters.make}`);
    }
    
    if (filters?.year) {
        params.append('refine', `year:${filters.year}`);
    }
    
    const url = `${baseUrl}?${params.toString()}`;
    
    const res = await fetch(url);
    
    if (!res.ok) {
        throw new Error('Araçlar yüklenirken bir hata oluştu');
    }

    const data = await res.json();
    
    // Model filtrelemesi client-side yapılacak
    let results = data.results;
    if (filters?.model) {
        results = results.filter((car: Car) => 
            car.model.toLowerCase().includes(filters.model!.toLowerCase())
        );
    }
    
    return {
        results,
        total_count: data.total_count || results.length
    };
};