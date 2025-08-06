import type { FC } from "react";
import Searchbar from "./searchbar";
import Year from "./year";
import { useFilters } from "../../contexts/FilterContext";

const Filter: FC = () => {
  const { filters, clearFilters } = useFilters();
  
  const hasActiveFilters = filters.make || filters.model || filters.year;

  return (
    <div className="mt-12 padding-x padding-y max-width">
        <div className="home-text-container">
            <h1 className="text-4xl font-extrabold">Araba Katoloğu</h1>
            <p>Beğenebileceğin Arabaları Keşfet</p>
        </div>
         
        
        <div className="home-filters">
            <Searchbar />

         
            <div className="home-filter-container">
                <Year />
                
                {hasActiveFilters && (
                  <div className="flex  justify-center mt-4">
                    <button
                      onClick={clearFilters}
                      className="px-3 py-1.5 text-sm bg-orange-400 hover:bg-orange-300 text-white rounded transition-colors mt-3 cursor-pointer"
                    >
                      Filtreleri Temizle
                    </button>
                  </div>
                )}
          </div>
        </div>
    </div> 
  )
}

export default Filter;