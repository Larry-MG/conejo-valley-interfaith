import { defineField, defineType } from "sanity";

export const pastEventFlierType = defineType({
  name: "pastEventFlier",
  title: "Past Event Flier",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({
      name: "image",
      title: "Flier image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "sortOrder", title: "Sort order", type: "number", initialValue: 100, validation: (rule) => rule.required().integer().min(0) }),
  ],
  orderings: [
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
