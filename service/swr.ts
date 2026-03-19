import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { fetchFromTMDB } from "./api";
export const useTMDBInfinite = (
  endpoint: string | null,
  query: string = "",
) => {
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  const getKey = (pageIndex: number, previousPageData: any) => {
    if (!endpoint) return null;
    if (previousPageData && !previousPageData.length) return null;
    return debouncedQuery !== ""
      ? `${endpoint}?language=en-US&query=${encodeURIComponent(debouncedQuery)}&page=${pageIndex + 1}`
      : `${endpoint}?language=en-US&sort_by=popularity.desc&page=${pageIndex + 1}`;
  };

  const result = useSWRInfinite(getKey, fetchFromTMDB);
  return result;
};
