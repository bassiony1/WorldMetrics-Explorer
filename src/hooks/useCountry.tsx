import { useQuery } from "@tanstack/react-query";
import { getCountry } from "../services/countryService";
import type { DetailedCountry } from "../services/countryService";

const useCountry = (name: string) => {
  return useQuery<DetailedCountry[]>({
    queryKey: ["countries", name],
    queryFn: () => getCountry(name),
  });
};

export default useCountry;
