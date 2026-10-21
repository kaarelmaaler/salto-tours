import type { TripImage } from "../../types/trip";

export function tripImage(id: string, alt: string): TripImage {
  return {
    src: `/images/thumbs/${id}.webp`,
    full: `/images/${id}.jpg`,
    alt,
  };
}
