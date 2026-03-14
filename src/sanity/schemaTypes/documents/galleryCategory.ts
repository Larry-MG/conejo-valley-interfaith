import { defineField, defineType } from "sanity";

export const galleryCategoryType = defineType({
  name: "galleryCategory",
  title: "Gallery Category",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (rule) => rule.required() }),
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
      title: "name",
      subtitle: "slug.current",
    },
  },
});
