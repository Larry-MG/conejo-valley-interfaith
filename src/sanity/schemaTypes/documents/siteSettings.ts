import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Site name", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", validation: (rule) => rule.required().max(20) }),
    defineField({ name: "tagline", title: "Tagline", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "greeting", title: "Greeting", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "motto", title: "Motto", type: "string", validation: (rule) => rule.required().max(180) }),
    defineField({ name: "description", title: "Site description", type: "text", rows: 3, validation: (rule) => rule.required().max(320) }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url", validation: (rule) => rule.required() }),
    defineField({ name: "cviaEmail", title: "CVIA email", type: "string", validation: (rule) => rule.required().email() }),
    defineField({ name: "winEmail", title: "WIN email", type: "string", validation: (rule) => rule.required().email() }),
    defineField({ name: "cviaMeetingText", title: "CVIA meeting text", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "winMeetingText", title: "WIN meeting text", type: "string", validation: (rule) => rule.required().max(120) }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "tagline",
    },
  },
});
