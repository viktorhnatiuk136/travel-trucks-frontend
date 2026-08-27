"use client";

import { useState } from "react";
import { getCampersFilters } from "@/services/campersApi";
import { useQuery } from "@tanstack/react-query";

import type {
  Form,
  Engine,
  Transmission,
  CampersFilters,
} from "@/types/Camper";

interface FiltersProps {
  filtersChanges: (filters: CampersFilters) => void;
}

export default function FilterPanel({ filtersChanges }: FiltersProps) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [],
    queryFn: getCampersFilters,
  });

  const [draftFilters, setDraftFilters] = useState({
    form: "",
    transmission: "",
    engine: "",
  });

  console.log(data);
  console.log(draftFilters);

  return (
    <form>
      <fieldset>
        {data?.forms.map((form: Form) => {
          return (
            <label key={form}>
              <input
                type="radio"
                name="form"
                value={form}
                onChange={() => {
                  setDraftFilters({ ...draftFilters, form: form });
                }}
              ></input>
              {form}
            </label>
          );
        })}
      </fieldset>

      <fieldset>
        {data?.transmissions.map((transmission: Transmission) => {
          return (
            <label key={transmission}>
              <input
                type="radio"
                name="transmission"
                value={transmission}
                onChange={() => {
                  setDraftFilters({
                    ...draftFilters,
                    transmission: transmission,
                  });
                }}
              ></input>
              {transmission}
            </label>
          );
        })}
      </fieldset>

      <fieldset>
        {data?.engines.map((engine: Engine) => {
          return (
            <label key={engine}>
              <input
                type="radio"
                name="engine"
                value={engine}
                onChange={() => {
                  setDraftFilters({ ...draftFilters, engine: engine });
                }}
              ></input>
              {engine}
            </label>
          );
        })}
      </fieldset>

      <button
        type="button"
        onClick={() => {
          filtersChanges(draftFilters);
        }}
      >
        Search
      </button>
    </form>
  );
}
