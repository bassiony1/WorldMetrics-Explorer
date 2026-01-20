import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const FilterBar = ({
  onPageFilter,
}: {
  onPageFilter: (filter: string) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOption] = useState(false);

  return (
    <div className="relative max-w-sm">
      <div
        onClick={() => {
          setShowOption((prev) => !prev);
        }}
        className="dark:bg-d-Elements dark:text-d-Text px-4 py-6 flex justify-between items-center shadow-lg rounded-lg cursor-pointer"
      >
        <span className="px-2">
          {selectedOption ? selectedOption : "Filter by Region"}
        </span>
        <span>{!showOptions ? <BsArrowDown /> : <BsArrowUp />}</span>
      </div>
      {showOptions && (
        <div className="absolute w-full top-22 z-20 dark:bg-d-Elements dark:text-d-Text bg-l-Elements grid gap-2  shadow-lg rounded-lg overflow-hidden">
          <p
            data-value=""
            onClick={(e) => {
              const target = e.target as HTMLParagraphElement;
              setSelectedOption(target.dataset.value as string);
              onPageFilter(target.dataset.value as string);
              setShowOption(false);
            }}
            className="text-left dark:text-d-Text text-l-Text dark:hover:backdrop-brightness-110 hover:backdrop-brightness-95 px-6 py-3 cursor-pointer"
          >
            All
          </p>
          <p
            data-value="Africa"
            onClick={(e) => {
              const target = e.target as HTMLParagraphElement;
              setSelectedOption(target.dataset.value as string);
              onPageFilter(target.dataset.value as string);
              setShowOption(false);
            }}
            className="text-left dark:text-d-Text text-l-Text dark:hover:backdrop-brightness-110 hover:backdrop-brightness-95 px-6 py-3 cursor-pointer"
          >
            Africa
          </p>
          <p
            data-value="America"
            onClick={(e) => {
              const target = e.target as HTMLParagraphElement;
              setSelectedOption(target.dataset.value as string);
              onPageFilter(target.dataset.value as string);
              setShowOption(false);
            }}
            className="text-left dark:text-d-Text text-l-Text dark:hover:backdrop-brightness-110 hover:backdrop-brightness-95 px-6 py-3 cursor-pointer"
          >
            America
          </p>
          <p
            data-value="Asia"
            onClick={(e) => {
              const target = e.target as HTMLParagraphElement;
              setSelectedOption(target.dataset.value as string);
              onPageFilter(target.dataset.value as string);
              setShowOption(false);
            }}
            className="text-left dark:text-d-Text text-l-Text dark:hover:backdrop-brightness-110 hover:backdrop-brightness-95 px-6 py-3 cursor-pointer"
          >
            Asia
          </p>
          <p
            data-value="Europe"
            onClick={(e) => {
              const target = e.target as HTMLParagraphElement;
              setSelectedOption(target.dataset.value as string);
              onPageFilter(target.dataset.value as string);
              setShowOption(false);
            }}
            className="text-left dark:text-d-Text text-l-Text dark:hover:backdrop-brightness-110 hover:backdrop-brightness-95 px-6 py-3 cursor-pointer"
          >
            Europe
          </p>
          <p
            data-value="Oceania"
            onClick={(e) => {
              const target = e.target as HTMLParagraphElement;
              setSelectedOption(target.dataset.value as string);
              onPageFilter(target.dataset.value as string);
              setShowOption(false);
            }}
            className="text-left dark:text-d-Text text-l-Text dark:hover:backdrop-brightness-110 hover:backdrop-brightness-95 px-6 py-3 cursor-pointer"
          >
            Oceania
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
