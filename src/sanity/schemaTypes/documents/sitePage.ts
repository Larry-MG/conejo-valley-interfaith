import { defineField, defineType } from "sanity";

export const sitePageType = defineType({
  name: "sitePage",
  title: "Page Copy",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Organizations", value: "organizations" },
          { title: "Events", value: "events" },
          { title: "Gallery", value: "gallery" },
          { title: "Contact", value: "contact" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "title", title: "Browser title", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "description", title: "Meta description", type: "text", rows: 3, validation: (rule) => rule.required().max(180) }),
    defineField({ name: "heading", title: "Page heading", type: "string", validation: (rule) => rule.required().max(100) }),
    defineField({ name: "subtitle", title: "Page subtitle", type: "text", rows: 3, validation: (rule) => rule.required().max(220) }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "slug",
    },
  },
});
