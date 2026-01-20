import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onPageSearch: (search: string) => void;
}
const SearchBar = ({ onPageSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex gap-8 items-center lg:max-w-lg dark:bg-d-Elements bg-l-Elements rounded-lg shadow-xl px-8 ">
      <button
        className=""
        onClick={() => {
          onPageSearch(inputRef.current ? inputRef.current.value : "");
          inputRef.current!.value = "";
        }}
      >
        <BsSearch />
      </button>
      <input
        ref={inputRef}
        className="py-6 dark:text-d-Text text-l-Input w-full"
        placeholder="Search for a country"
        type="text"
      />
    </div>
  );
};

export default SearchBar;
