import type { Data } from "@/lib/type";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export const useGetData = (lang: "fr" | "en"): UseQueryResult<Data> => {
  return useQuery<Data>({
    queryKey: [lang],
    queryFn: async () => {
      const response = await fetch(`/data_${lang}.json`);
      return response.json();
    },
  });
};
