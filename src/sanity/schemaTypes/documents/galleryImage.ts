import { defineField, defineType } from "sanity";

export const galleryImageType = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "alt", title: "Alt text", type: "string", validation: (rule) => rule.required().max(140) }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "galleryCategory" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
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
      subtitle: "alt",
      media: "image",
    },
  },
});
