
import type { FC } from "react";
import ReactSelect from "react-select";
import { makes } from "../../utils/constants";
import { useFilters } from "../../contexts/FilterContext";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Searchbar: FC = () => {
  const { updateFilter } = useFilters();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMake, setSelectedMake] = useState(searchParams.get('make') || '');
  const [modelInput, setModelInput] = useState(searchParams.get('model') || '');

  // makes arrayini maple dönüp stringleri objectlere çevir
  const options = makes.map((make) => ({
    label: make,
    value: make,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL search params
    const newSearchParams = new URLSearchParams();
    if (selectedMake) newSearchParams.set('make', selectedMake);
    if (modelInput) newSearchParams.set('model', modelInput);
    
    // Reset page to 1 when filters change
    newSearchParams.set('page', '1');
    
    setSearchParams(newSearchParams);
    
    // Update context filters
    updateFilter('make', selectedMake);
    updateFilter('model', modelInput);
  };

  const handleMakeChange = (option: any) => {
    setSelectedMake(option?.value || '');
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelInput(e.target.value);
  };

  return (
    <form className="searchbar flex gap-3 items-center justify-center" onSubmit={handleSubmit}>
      <div className="searchbar-item items-end">
        <div className="w-full flex flex-col">
          <label htmlFor="">Marka</label>
          <ReactSelect 
            className="w-full text-black" 
            placeholder="Marka Seçiniz..." 
            name="make" 
            options={options}
            value={options.find(option => option.value === selectedMake)}
            onChange={handleMakeChange}
          />
        </div>
        <button type="submit" className="ml-3 sm:hidden cursor-pointer">
          <img className="size-[40px]" src="/search.svg" alt="search" />
        </button>      
      </div>
      <div className="searchbar-item flex flex-col !items-start">
        <label htmlFor="">Model</label>
        <div className="w-full flex">
          <div className="absolute ml-3 mt-1">
            <img className="size-[25px]" src="/model-icon.png" alt="" />
          </div>

          <input 
            placeholder="Model Yazınız..." 
            type="text" 
            className="searchbar-input rounded text-black bg-white"
            name="model"
            value={modelInput}
            onChange={handleModelChange}
          />

          <button type="submit" className="ml-3 cursor-pointer">
            <img src="/search.svg" alt="search" className="size-[40px]" />
          </button>
        </div>
      </div> 
    </form>
  )
}

export default Searchbar;