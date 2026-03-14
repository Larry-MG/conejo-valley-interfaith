import type { StructureResolver } from "sanity/structure";

const singletonTypes = new Set(["siteSettings", "homePage"]);

export const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Home Page")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      S.documentTypeListItem("sitePage").title("Inner Pages"),
      S.documentTypeListItem("organization").title("Organizations"),
      S.documentTypeListItem("event").title("Upcoming Events"),
      S.documentTypeListItem("pastEventFlier").title("Past Event Fliers"),
      S.documentTypeListItem("galleryCategory").title("Gallery Categories"),
      S.documentTypeListItem("galleryImage").title("Gallery Images"),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.has(item.getId() ?? "") && ![
        "sitePage",
        "organization",
        "event",
        "pastEventFlier",
        "galleryCategory",
        "galleryImage",
      ].includes(item.getId() ?? "")),
    ]);
