import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { Category } from "../data/interfaces";

type FilterProviderProps = {
  children: ReactNode;
};

interface FilterContextState {
  filters: Category[];
  setFilters: Dispatch<SetStateAction<Category[]>>;
}

const defaultState = { filters: [], setFilters: () => {} };

const FilterContext = createContext<FilterContextState>(defaultState);

const FilterProvider = ({ children }: FilterProviderProps) => {
  const [filters, setFilters] = useState<Category[]>([]);

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => {
  const filterContext = useContext(FilterContext);
  return filterContext;
};

export { FilterProvider, useFilters };
