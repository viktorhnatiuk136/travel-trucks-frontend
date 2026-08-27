"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCampers } from "@/services/campersApi";
import CamperCard from "@/components/CamperCard/CamperCard";
import FilterPanel from "@/components/FilterPanel/FilterPanel";
import { useState } from "react";
import type { CampersFilters } from "@/types/Camper";

export default function CatalogPage() {
  const handleFiltersChange = (filters: CampersFilters) => {
    setAppliedFilters(filters);
    console.log(appliedFilters);
  };

  const [appliedFilters, setAppliedFilters] = useState({});

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["campers", appliedFilters],

      queryFn: ({ pageParam }) => getAllCampers(pageParam, appliedFilters),

      initialPageParam: 1,

      getNextPageParam: (lastPage) => {
        return lastPage.page < lastPage.totalPages
          ? lastPage.page + 1
          : undefined;
      },
    });

  const campers = data?.pages.flatMap((page) => page.campers) ?? [];

  return (
    <>
      <FilterPanel filtersChanges={handleFiltersChange} />
      {campers.map((camper) => (
        <CamperCard key={camper.id} camper={camper} />
      ))}

      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
}
