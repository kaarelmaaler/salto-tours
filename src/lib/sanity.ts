import {createClient, type SanityClient} from "@sanity/client";
import {createImageUrlBuilder, type SanityImageSource} from "@sanity/image-url";

/** Fixed API version. Public reads do not use a write token. */
export const SANITY_API_VERSION = "2026-10-21";

export function getSanityClient(): SanityClient | null {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
  if (!projectId || !dataset) return null;

  return createClient({
    projectId,
    dataset,
    apiVersion: SANITY_API_VERSION,
    useCdn: true,
    perspective: "published",
  });
}

/**
 * Thumbnail keeps the uploaded ratio. The existing portrait frame crops it.
 * Lightbox uses a larger uncropped URL, so the original ratio stays intact.
 */
export function sanityImageUrls(source: SanityImageSource): {src: string; full: string} | null {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
  if (!projectId || !dataset) return null;

  const config = {projectId, dataset};
  const src = createImageUrlBuilder(config).image(source).auto("format").width(800).fit("max").url();
  const full = createImageUrlBuilder(config).image(source).auto("format").width(2400).fit("max").url();
  if (!src || !full) return null;
  return {src, full};
}

/** Homepage cover. Resized, not the original upload. */
export function sanityCoverUrl(source: SanityImageSource): string | null {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
  if (!projectId || !dataset) return null;

  return createImageUrlBuilder({projectId, dataset}).image(source).auto("format").width(1000).fit("max").url() || null;
}
