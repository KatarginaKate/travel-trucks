import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "../services/campers";
import { PAGE_SIZE } from "../lib/constants";
import type { FilterValues } from "../types/camper";

export function useCampers(filters: FilterValues) {
  const query = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam, signal }) =>
      fetchCampers(pageParam, PAGE_SIZE, filters, signal),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      allPages.length < lastPage.totalPages
        ? allPages.length + 1
        : undefined,
  });

  const campers = query.data?.pages.flatMap((page) => page.campers) ?? [];
  const lastPage = query.data?.pages.at(-1);

  return {
    campers,
    page: query.data?.pages.length ?? 1,
    totalPages: lastPage?.totalPages ?? 1,
    loading: query.isLoading || query.isFetchingNextPage,
    error: query.isError ? "Something went wrong. Please try again." : "",
    loadMore: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
  };
}