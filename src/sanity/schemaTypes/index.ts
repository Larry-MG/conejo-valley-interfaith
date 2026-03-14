import { eventType } from "./documents/event";
import { galleryCategoryType } from "./documents/galleryCategory";
import { galleryImageType } from "./documents/galleryImage";
import { homePageType } from "./documents/homePage";
import { organizationType } from "./documents/organization";
import { pastEventFlierType } from "./documents/pastEventFlier";
import { sitePageType } from "./documents/sitePage";
import { siteSettingsType } from "./documents/siteSettings";
import { homeAboutCardType } from "./objects/homeAboutCard";
import { linkType } from "./objects/link";

export const schemaTypes = [
  linkType,
  homeAboutCardType,
  siteSettingsType,
  homePageType,
  sitePageType,
  organizationType,
  eventType,
  pastEventFlierType,
  galleryCategoryType,
  galleryImageType,
];
