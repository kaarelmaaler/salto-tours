import {portableTextToHtml} from "./portable-text";
import {fetchSiteSettings} from "./queries";

export type SiteContent = {
  siteTitle: string;
  contactEmail: string;
  aboutHtml: string;
};

let settingsInflight: Promise<SiteContent> | null = null;
let settingsCache: SiteContent | null = null;

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
      };
      settingsCache = content;
      return content;
    })
    .finally(() => {
      settingsInflight = null;
    });

  return settingsInflight;
}
