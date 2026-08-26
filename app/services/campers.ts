import { API_URL } from "../lib/api";
import type {
  Camper,
  FilterValues,
} from "../types/camper";

export type CamperResponse = {
  campers: Camper[];
  totalPages: number;
};

export async function fetchCampers(
  page: number,
  perPage: number,
  filters: FilterValues,
  signal?: AbortSignal,
): Promise<CamperResponse> {
  const params = new URLSearchParams({
    page: String(page),
    perPage: String(perPage),
  });

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      params.set(key, value);
    }
  });

  const response = await fetch(
    `${API_URL}/campers?${params}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error("Unable to load campers");
  }

  return response.json();
}