import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Upcoming Event",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "date", title: "Date", type: "date", validation: (rule) => rule.required() }),
    defineField({ name: "time", title: "Time", type: "string", validation: (rule) => rule.required().max(80) }),
    defineField({ name: "location", title: "Location", type: "string", validation: (rule) => rule.required().max(180) }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4, validation: (rule) => rule.max(500) }),
    defineField({
      name: "flyer",
      title: "Flyer image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.max(120),
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Date",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "flyer",
    },
  },
});
