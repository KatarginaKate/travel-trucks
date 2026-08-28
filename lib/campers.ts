import type { Camper } from "../types/camper";

export function mergeCampers(
  current: Camper[],
  next: Camper[],
): Camper[] {
  return Array.from(
    new Map(
      [...current, ...next].map((camper) => [
        camper.id,
        camper,
      ]),
    ).values(),
  );
}