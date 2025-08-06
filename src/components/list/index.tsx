import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../utils/service";
import type { Car } from "../../types";
import Warning from "../warning";
import Card from "./card";
import { useFilters } from "../../contexts/FilterContext";
import ReactPaginate from "react-paginate";

const List: FC = () => {
  const { filters } = useFilters();
  const [cars, setCars] = useState<Car[] | null>(null);
  const [total, setTotal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  console.log(total);

  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Sadece dolu filtreleri API'ye gönder
        const activeFilters: any = {};
        if (filters.make) activeFilters.make = filters.make;
        if (filters.year) activeFilters.year = filters.year;
        if (filters.model) activeFilters.model = filters.model;
        
        const data = await fetchCars(activeFilters);
        setCars(data.results);
        setTotal(data.total_count);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCars();
  }, [filters]); // filters değiştiğinde yeniden yükle
    
  if (loading) return <Warning>Yükleniyor...</Warning>;

  if (error) return <Warning>{error}</Warning>;

  if (!cars || cars.length < 1) return <Warning>Veri Bulunamadı</Warning>;

  return (
    <div className="padding-x max-width">
      <div className="mb-4">
        <p className="text-gray-600">
          {total} araç bulundu
          {(filters.make || filters.model || filters.year) && (
            <span className="ml-2 text-sm">
              (Filtrelenmiş sonuçlar)
            </span>
          )}
        </p>
      </div>
      
      <section className="home-cars-wrapper">
        {cars.map((car) => (
          <Card key={car.id} car={car}/>
        ))}
      </section>

      {total && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          initialPage={(parseInt(page) || 1) - 1}
          onPageChange={(e) => {
          }}
          pageCount={Math.ceil(total / 10)}
          pageRangeDisplayed={5}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
        />
      )}
    </div>
  );
};

export default List;