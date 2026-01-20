import type { PageName } from "../App";
import type { SipmleCountry } from "../services/countryService";
interface Props {
  country: SipmleCountry;
  onPageSelect: (name: PageName, countryName: string) => void;
}
const Card = ({ country, onPageSelect }: Props) => {
  return (
    <div
      key={country.name.common}
      className="grid shadow-2xl max-w-md mx-auto rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition"
      onClick={() => onPageSelect("detail", country.name.common)}
    >
      <div className="">
        <img
          className="w-full h-63 object-fill"
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </div>
      <div className="px-6 py-6">
        <h3 className="text-lg font-bold ">{country.name.common}</h3>
        <div className="py-6">
          <p>
            <span className="font-bold">Population: </span>
            {country.population}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {country.region}
          </p>
          <p className="font-normal">
            <span className="font-bold">Capital: </span>
            {country?.capital ? country.capital[0] : "NA"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
