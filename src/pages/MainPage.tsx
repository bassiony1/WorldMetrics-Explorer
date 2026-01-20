import { useState } from "react";
import type { PageName } from "../App";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";

interface Props {
  onPageSelect: (name: PageName, countryName: string) => void;
}
const MainPage = ({ onPageSelect }: Props) => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-1 gap-14 lg:gap-2 lg:grid-cols-7">
        <div className="lg:col-span-5">
          <SearchBar onPageSearch={(search: string) => setSearch(search)} />
        </div>
        <div className="lg:col-span-2">
          <FilterBar
            onPageFilter={(filter: string) => {
              setSearch("");
              setFilter(filter);
            }}
          />
        </div>
      </div>
      <CardList filter={filter} onPageSelect={onPageSelect} search={search} />

      <button onClick={() => onPageSelect("detail", "Belgium")}>
        go to Detail
      </button>
    </div>
  );
};

export default MainPage;
