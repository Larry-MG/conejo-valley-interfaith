import { defineField, defineType } from "sanity";

export const organizationType = defineType({
  name: "organization",
  title: "Organization",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "denomination", title: "Tradition / denomination", type: "string", validation: (rule) => rule.max(80) }),
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
      subtitle: "denomination",
    },
  },
});
