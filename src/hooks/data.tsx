import type { Data } from "@/lib/type";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export const useGetData = (): UseQueryResult<Data> => {
  return useQuery<Data>({
    queryKey: [""],
    queryFn: async () => {
      const response = await fetch("/data.json");
      return response.json();
    },
  });
};
