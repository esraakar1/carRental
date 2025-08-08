import type { FC } from "react";
import ReactSelect from "react-select";
import { useFilters } from "../../contexts/FilterContext";
import { useSearchParams } from "react-router-dom";

const Year: FC = () => {
  const { filters, updateFilter } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Son 20 yılı içeren yıl seçenekleri
  const years = Array.from({ length: 20 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return {
      label: year.toString(),
      value: year.toString(),
    };
  });

  const handleYearChange = (selectedOption: any) => {
    const yearValue = selectedOption?.value || '';
    
    // Update URL search params
    const newSearchParams = new URLSearchParams(searchParams);
    if (yearValue) {
      newSearchParams.set('year', yearValue);
    } else {
      newSearchParams.delete('year');
    }
    
    // Reset page to 1 when filters change
    newSearchParams.set('page', '1');
    
    setSearchParams(newSearchParams);
    
    // Update context filters
    updateFilter('year', yearValue);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="year">Yıl</label>
      <ReactSelect 
        className="w-full text-black" 
        placeholder="Yıl Seçiniz..." 
        name="year" 
        options={years}
        value={years.find(year => year.value === filters.year) || null}
        onChange={handleYearChange}
        isClearable
      />
    </div>
  );
};

export default Year;