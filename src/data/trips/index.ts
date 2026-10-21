import type { Trip } from "../../types/trip";
import { himaalaja } from "./himaalaja";
import { himos } from "./himos";
import { jaapan } from "./jaapan";
import { maroko } from "./maroko";

/** Stand-in for the future Sanity trip collection. */
export const trips: Trip[] = [himaalaja, maroko, himos, jaapan];
