import { useQuery } from "@tanstack/react-query";
import {
  getAllCountries,
  getAllcountriesByRegion,
} from "../services/countryService";

const useCountries = (region: string = "") => {
  return useQuery({
    queryKey: region === "" ? ["countries"] : ["countries", region],
    queryFn:
      region === "" ? getAllCountries : () => getAllcountriesByRegion(region),
  });
};

export default useCountries;
