import APiClient from "../services/apiClient";

export interface SipmleCountry {
  flags: { png: string; alt: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
}

export interface DetailedCountry {
  name: {
    common: string;
    nativeName: { [key: string]: { common: string } };
  };
  flags: { png: string; alt: string };
  tld: string[];
  capital: string;
  region: string;
  subregion: string;
  population: number;
  borders: string[];
  languages: {
    [key: string]: { name: string };
  };
  currencies: {
    [key: string]: { name: string };
  };
}
const countriesApiClient = new APiClient<SipmleCountry>();

export const getAllCountries = () => {
  return countriesApiClient.get("all/", {
    params: {
      fields: "flags,name,population,region,capital",
    },
  });
};
export const getAllcountriesByRegion = (region: string) => {
  return countriesApiClient.get(`region/${region}/`);
};

const countryApiClient = new APiClient<DetailedCountry>();

export const getCountry = (name: string) => {
  return countryApiClient.get(`/name/${name}/`);
};
