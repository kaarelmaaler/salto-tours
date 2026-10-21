import {portableTextToParagraphs} from "./portable-text";
import {getSanityClient, sanityCoverUrl, sanityImageUrls} from "./sanity";
import type {HomepageTrip, PriceBlock, ProgramGroup, Trip, TripFact, TripImage} from "../types/trip";

const tripFields = `{
  title,
  "slug": slug.current,
  startDate,
  endDate,
  monthLabel,
  headline,
  intro,
  registrationUrl,
  facts,
  gallery[]{
    alt,
    asset,
    crop,
    hotspot
  },
  program[]{
    label,
    rows[]{
      dateLabel,
      description
    }
  },
  pricing[]{
    heading,
    priceRows[]{
      label,
      price
    }
  },
  includedText,
  excludedText,
  articleSections[]{
    heading,
    body
  }
}`;

const homepageTripFields = `{
  "slug": slug.current,
  startDate,
  endDate,
  headline,
  intro,
  "datesDisplay": facts.datesDisplay,
  coverImage{
    alt,
    asset,
    crop,
    hotspot
  },
  "fallbackImage": gallery[0]{
    alt,
    asset,
    crop,
    hotspot
  }
}`;

export const homepageTripsQuery = `*[_type == "trip" && status == "published" && defined(slug.current) && defined(startDate)] | order(startDate asc) ${homepageTripFields}`;

export const publishedTripsQuery = `*[_type == "trip" && status == "published" && defined(slug.current) && defined(startDate)] | order(startDate asc) ${tripFields}`;

export const nextTripQuery = `*[_type == "trip" && status == "published" && defined(slug.current) && defined(startDate) && startDate >= $today] | order(startDate asc)[0] ${tripFields}`;

export const tripBySlugQuery = `*[_type == "trip" && status == "published" && slug.current == $slug][0] ${tripFields}`;

export const siteSettingsQuery = `*[_id == "siteSettings"][0]{
  siteTitle,
  contactEmail,
  aboutText
}`;

type SanityGalleryImage = {
  alt?: string | null;
  asset?: {_ref?: string} | null;
  crop?: {top: number; bottom: number; left: number; right: number} | null;
  hotspot?: {x: number; y: number; height: number; width: number} | null;
};

type SanityTrip = {
  title?: string | null;
  slug?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  monthLabel?: string | null;
  headline?: string | null;
  intro?: string | null;
  registrationUrl?: string | null;
  facts?: {
    destination?: string | null;
    datesDisplay?: string | null;
    duration?: string | null;
    activity?: string | null;
    accommodation?: string | null;
    catering?: string | null;
    guide?: string | null;
    instruction?: string | null;
    highestPoint?: string | null;
    childcare?: string | null;
    priceFrom?: string | null;
  } | null;
  gallery?: SanityGalleryImage[] | null;
  program?: {
    label?: string | null;
    rows?: {dateLabel?: string | null; description?: string | null}[] | null;
  }[] | null;
  pricing?: {
    heading?: string | null;
    priceRows?: {label?: string | null; price?: string | null}[] | null;
  }[] | null;
  includedText?: string | null;
  excludedText?: string | null;
  articleSections?: {heading?: string | null; body?: unknown}[] | null;
};

export type SanitySiteSettings = {
  siteTitle?: string | null;
  contactEmail?: string | null;
  aboutText?: unknown;
};

const factFields = [
  ["destination", "Sihtkoht:"],
  ["datesDisplay", "Kuupäevad:"],
  ["duration", "Kestus:"],
  ["activity", "Tegevus:"],
  ["highestPoint", "Kõrgeim punkt:"],
  ["accommodation", "Majutus:"],
  ["catering", "Toitlustus:"],
  ["guide", "Grupijuht:"],
  ["instruction", "Õpe:"],
  ["childcare", "Lapsehoidja:"],
  ["priceFrom", "Hind:"],
] as const;

function clean(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function mapFacts(facts: SanityTrip["facts"]): TripFact[] {
  if (!facts) return [];
  return factFields.flatMap(([key, label]) => {
    const value = clean(facts[key]);
    return value ? [{label, value}] : [];
  });
}

type SanityHomepageTrip = {
  slug?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  headline?: string | null;
  intro?: string | null;
  datesDisplay?: string | null;
  coverImage?: SanityGalleryImage | null;
  fallbackImage?: SanityGalleryImage | null;
};

function mapCover(image: SanityGalleryImage | null | undefined): HomepageTrip["cover"] {
  const ref = image?.asset?._ref;
  if (!ref) return null;
  const src = sanityCoverUrl({asset: {_ref: ref}});
  return src ? {src, alt: clean(image?.alt)} : null;
}

export function mapHomepageTrip(trip: SanityHomepageTrip): HomepageTrip | null {
  const slug = clean(trip.slug);
  const startDate = clean(trip.startDate);
  if (!slug || !startDate) return null;
  const headline = clean(trip.headline) || "Reis";
  return {
    slug,
    headline,
    lede: clean(trip.intro),
    datesDisplay: clean(trip.datesDisplay),
    startDate,
    endDate: clean(trip.endDate),
    cover: mapCover(trip.coverImage) ?? mapCover(trip.fallbackImage),
  };
}

function mapImages(gallery: SanityTrip["gallery"]): TripImage[] {
  if (!gallery) return [];
  return gallery.flatMap((image) => {
    const ref = image?.asset?._ref;
    if (!ref) return [];
    const urls = sanityImageUrls({
      asset: {_ref: ref},
      crop: image.crop ?? undefined,
      hotspot: image.hotspot ?? undefined,
    });
    if (!urls) return [];
    return [{...urls, alt: clean(image.alt)}];
  });
}

function mapProgram(groups: SanityTrip["program"]): ProgramGroup[] {
  if (!groups) return [];
  return groups.flatMap((group) => {
    const rows = (group.rows ?? []).flatMap((row) => {
      const date = clean(row.dateLabel);
      const text = clean(row.description);
      return date || text ? [{date, text}] : [];
    });
    if (rows.length === 0) return [];
    const kicker = clean(group.label);
    return [{kicker: kicker || undefined, rows}];
  });
}

function mapPrices(groups: SanityTrip["pricing"]): PriceBlock[] {
  if (!groups) return [];
  return groups.flatMap((group) => {
    const lines = (group.priceRows ?? []).flatMap((row) => {
      const label = clean(row.label);
      const price = clean(row.price);
      if (label && price) return [`${label} – ${price}`];
      const line = label || price;
      return line ? [line] : [];
    });
    const label = clean(group.heading);
    if (!label && lines.length === 0) return [];
    return [{label, lines}];
  });
}

export function mapSanityTrip(trip: SanityTrip): Trip | null {
  const slug = clean(trip.slug);
  const startDate = clean(trip.startDate);
  if (!slug || !startDate) return null;

  const name = clean(trip.title) || "Reis";
  const prices = mapPrices(trip.pricing);

  return {
    slug,
    name,
    headline: clean(trip.headline) || name,
    monthLabel: clean(trip.monthLabel),
    lede: clean(trip.intro),
    startDate,
    endDate: clean(trip.endDate),
    published: true,
    registerUrl: clean(trip.registrationUrl) || undefined,
    images: mapImages(trip.gallery),
    facts: mapFacts(trip.facts),
    program: mapProgram(trip.program),
    included: clean(trip.includedText) || undefined,
    excluded: clean(trip.excludedText) || undefined,
    prices: prices.length > 0 ? prices : undefined,
    articles: (trip.articleSections ?? []).flatMap((section) => {
      const heading = clean(section.heading);
      const paragraphs = portableTextToParagraphs(section.body);
      if (!heading && paragraphs.length === 0) return [];
      return [{heading, paragraphs}];
    }),
  };
}

function requireClient() {
  const client = getSanityClient();
  if (!client) {
    throw new Error("Sanity is not configured. Set PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET.");
  }
  return client;
}

export async function fetchHomepageTrips(): Promise<HomepageTrip[]> {
  const result = await requireClient().fetch<SanityHomepageTrip[] | null>(homepageTripsQuery);
  return (result ?? []).flatMap((trip) => {
    const mapped = mapHomepageTrip(trip);
    return mapped ? [mapped] : [];
  });
}

export async function fetchPublishedTrips(): Promise<Trip[]> {
  const result = await requireClient().fetch<SanityTrip[] | null>(publishedTripsQuery);
  return (result ?? []).flatMap((trip) => {
    const mapped = mapSanityTrip(trip);
    return mapped ? [mapped] : [];
  });
}

export async function fetchNextPublishedTrip(today: string): Promise<Trip | null> {
  const result = await requireClient().fetch<SanityTrip | null>(nextTripQuery, {today});
  return result ? mapSanityTrip(result) : null;
}

export async function fetchTripBySlug(slug: string): Promise<Trip | null> {
  const result = await requireClient().fetch<SanityTrip | null>(tripBySlugQuery, {slug});
  return result ? mapSanityTrip(result) : null;
}

export async function fetchSiteSettings(): Promise<SanitySiteSettings | null> {
  return requireClient().fetch<SanitySiteSettings | null>(siteSettingsQuery);
}
