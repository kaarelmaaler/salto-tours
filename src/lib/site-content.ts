import type {TripImage} from "../types/trip";
import {portableTextToHtml} from "./portable-text";
import {fetchSiteSettings, type SanitySiteSettings} from "./queries";
import {sanityImageUrls} from "./sanity";

export type SiteContent = {
  siteTitle: string;
  contactEmail: string;
  aboutHtml: string;
  aboutImages: TripImage[];
};

let settingsInflight: Promise<SiteContent> | null = null;
let settingsCache: SiteContent | null = null;

function clean(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function mapAboutImages(images: SanitySiteSettings["aboutImages"]): TripImage[] {
  if (!images) return [];
  return images.flatMap((image) => {
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

export function getSiteContent(): Promise<SiteContent> {
  if (import.meta.env.PROD && settingsCache) return Promise.resolve(settingsCache);
  if (settingsInflight) return settingsInflight;

  settingsInflight = fetchSiteSettings()
    .then((settings) => {
      if (!settings) throw new Error("Sanity site settings document is missing.");
      const content: SiteContent = {
        siteTitle: settings.siteTitle?.trim() ?? "",
        contactEmail: settings.contactEmail?.trim() ?? "",
        aboutHtml: portableTextToHtml(settings.aboutText),
        aboutImages: mapAboutImages(settings.aboutImages),
      };
      settingsCache = content;
      return content;
    })
    .finally(() => {
      settingsInflight = null;
    });

  return settingsInflight;
}
