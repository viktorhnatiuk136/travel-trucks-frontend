import axios from "axios";
import type { Camper, CampersResponse, CampersFilters } from "../types/Camper";

export const campersApi = axios.create({
  baseURL: "https://campers-api.goit.study",
});

export const getAllCampers = async (
  page: number,
  filters: CampersFilters,
): Promise<CampersResponse> => {
  const { data } = await campersApi.get("/campers", {
    params: {
      page,
      perPage: 4,
      ...filters,
    },
  });
  return data;
};

export const getCamperById = async (id: string): Promise<Camper> => {
  const { data } = await campersApi.get(`/campers/${id}`);
  return data;
};

export const getCampersFilters = async (): Promise<CampersFilters> => {
  const { data } = await campersApi.get("/campers/filters");
  return data;
};
