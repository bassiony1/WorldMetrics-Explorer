import { BsArrowLeft } from "react-icons/bs";
import type { PageName } from "../App";
import useCountry from "../hooks/useCountry";
import Loader from "../components/Loader";

interface Props {
  country_name: string;
  onPageSelect: (name: PageName, countryName: string) => void;
}

const DetailPage = ({ country_name, onPageSelect }: Props) => {
  const { data, isLoading, isError } = useCountry(country_name);
  if (isLoading) return <Loader />;
  if (isError) return <p>SomeError accured</p>;
  return (
    <div className="space-y-10">
      <button
        className="shadow-lg px-6 py-2 flex gap-2 justify-center items-center dark:bg-d-Elements rounded-lg dark:text-d-Text"
        onClick={() => onPageSelect("main", "")}
      >
        <span>
          <BsArrowLeft />
        </span>
        <span>Back</span>
      </button>
      <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-2">
          <img
            className="max-w-2xl mx-auto"
            src={data![0].flags.png}
            alt={data![0].flags.alt}
          />
        </div>
        <div className="space-y-5 lg:col-span-3">
          <h2 className="text-4xl font-bold">{data![0].name.common}</h2>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="grid gap-2">
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">
                  Native Name:{" "}
                </span>
                <span className="font-normal dark:text-gray-300">
                  {Object.entries(data![0].name?.nativeName)[0][1].common}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">Population: </span>
                <span className="font-normal dark:text-gray-300">
                  {data![0].population}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">Region: </span>
                <span className="font-normal dark:text-gray-300">
                  {data![0].region}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">Sub Region: </span>
                <span className="font-normal dark:text-gray-300">
                  {data![0].subregion}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">Capital: </span>
                <span className="font-normal dark:text-gray-300">
                  {data![0].capital}
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">
                  Top Level Domain:{" "}
                </span>
                <span className="font-normal dark:text-gray-300">
                  {data![0].tld[0]}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">Currencies: </span>
                <span className="font-normal dark:text-gray-300">
                  {Object.entries(data![0].currencies).map(
                    (cur) => `${cur[1].name} ,`,
                  )}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold dark:text-d-Text">Languages: </span>
                <span className="font-normal dark:text-gray-300">
                  {Object.entries(data![0].languages).map(
                    (lan) => `${lan[1]} , `,
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-15 gap-2">
            <span>Border Countries: </span>
            <div className="flex gap-2 flex-wrap">
              {data![0]?.borders?.map((b, index) => {
                return (
                  <span
                    className="px-6 py-2 dark:bg-d-Elements rounded-lg shadow-lg"
                    key={index}
                  >
                    {b}
                  </span>
                );
              }) ?? (
                <span className="px-6 py-2 dark:bg-d-Elements rounded-lg shadow-lg">
                  None
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
