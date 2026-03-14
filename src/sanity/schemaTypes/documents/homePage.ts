import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "heroHeading", title: "Hero heading", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "heroDescription", title: "Hero description", type: "text", rows: 3, validation: (rule) => rule.required().max(260) }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "link", validation: (rule) => rule.required() }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "link", validation: (rule) => rule.required() }),
    defineField({ name: "aboutCvia", title: "CVIA card", type: "homeAboutCard", validation: (rule) => rule.required() }),
    defineField({ name: "aboutWin", title: "WIN card", type: "homeAboutCard", validation: (rule) => rule.required() }),
    defineField({ name: "galleryCtaLabel", title: "Gallery button label", type: "string", validation: (rule) => rule.required().max(40) }),
  ],
  preview: {
    select: {
      title: "heroHeading",
      subtitle: "heroDescription",
    },
  },
});
