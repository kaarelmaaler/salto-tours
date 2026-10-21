import {fetchHomepageTrips, fetchPublishedTrips} from "./queries";
import type {HomepageTrip, Trip} from "../types/trip";

function localISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

let catalogInflight: Promise<Trip[]> | null = null;
let catalogCache: Trip[] | null = null;

/** Published Sanity trips, soonest first. */
export function loadPublishedTrips(): Promise<Trip[]> {
  if (import.meta.env.PROD && catalogCache) return Promise.resolve(catalogCache);
  if (catalogInflight) return catalogInflight;

  catalogInflight = fetchPublishedTrips()
    .then((trips) => {
      catalogCache = trips;
      return trips;
    })
    .finally(() => {
      catalogInflight = null;
    });

  return catalogInflight;
}

export async function getPublishedTrips(): Promise<Trip[]> {
  return loadPublishedTrips();
}

export async function getHomepageTrips(): Promise<HomepageTrip[]> {
  return fetchHomepageTrips();
}

/**
 * Earliest published trip that has not started.
 * A trip starting today still counts.
 */
export async function getNextTrip(now = new Date()): Promise<Trip | undefined> {
  const today = localISODate(now);
  const trips = await loadPublishedTrips();
  return trips.find((trip) => trip.startDate >= today);
}

export function tripPath(slug: string): string {
  return `/reisid/${slug}`;
}
