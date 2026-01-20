import type { PageName } from "../App";
import useCountries from "../hooks/useCountries";
import Card from "./Card";
interface Props {
  filter: string;
  search: string;
  onPageSelect: (name: PageName, countryName: string) => void;
}
const CardList = ({ filter, onPageSelect, search }: Props) => {
  const { data, isLoading, error } = useCountries(filter);

  const searchedList =
    search === ""
      ? data
      : data?.filter((c) => {
          return c.name.common.toLowerCase().includes(search.toLowerCase());
        });
  if (isLoading) return <p className="py-60 text-center">Loading...</p>;
  if (error) return <p>error</p>;

  return (
    <div className="grid gap-15 grid-dynamic-330 py-15">
      {searchedList?.map((c) => (
        <Card country={c} onPageSelect={onPageSelect} key={c.population} />
      ))}
    </div>
  );
};

export default CardList;
