type Form = "alcove" | "panel_van" | "integrated" | "semi_integrated";
type Amenity =
  | "ac"
  | "bathroom"
  | "kitchen"
  | "tv"
  | "radio"
  | "refrigerator"
  | "microwave"
  | "gas"
  | "water";
type Engine = "diesel" | "petrol" | "hybrid" | "electric";
type Transmission = "automatic" | "manual";

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: Form;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: Amenity[];
  coverImage: string;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;
};

export type CampersResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
};

export type CampersFilters = {
  location?: string;
  form?: Form;
  transmission?: Transmission;
  engine?: Engine;
};
