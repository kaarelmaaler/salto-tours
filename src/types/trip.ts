export type TripImage = {
  src: string;
  full: string;
  alt: string;
};

/** Homepage preview. The cover is coverImage, or the first gallery image when that is empty. */
export type HomepageTrip = {
  slug: string;
  headline: string;
  lede: string;
  datesDisplay: string;
  startDate: string;
  endDate: string;
  cover: {src: string; alt: string} | null;
};

export type TripFact = {
  label: string;
  value: string;
};

export type ProgramRow = {
  date: string;
  text: string;
};

export type ProgramGroup = {
  kicker?: string;
  rows: ProgramRow[];
};

export type PriceBlock = {
  label: string;
  lines: string[];
};

export type ArticleParagraph = {
  html: string;
  class?: string;
};

export type Article = {
  heading: string;
  paragraphs: ArticleParagraph[];
};

/**
 * Trip document shape. Local data uses this now; a later Sanity query
 * should return the same fields.
 */
export type Trip = {
  slug: string;
  name: string;
  headline: string;
  monthLabel: string;
  lede: string;
  /** ISO date, YYYY-MM-DD. Used to order trips and pick the next one. */
  startDate: string;
  endDate: string;
  published: boolean;
  registerUrl?: string;
  backgroundImage?: string;
  images: TripImage[];
  facts: TripFact[];
  program: ProgramGroup[];
  included?: string;
  excluded?: string;
  prices?: PriceBlock[];
  articles: Article[];
};
