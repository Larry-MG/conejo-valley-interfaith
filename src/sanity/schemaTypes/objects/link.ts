import { defineField, defineType } from "sanity";

export const linkType = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (rule) => rule.required().max(40),
    }),
    defineField({
      name: "href",
      title: "URL or path",
      type: "string",
      description: "Use internal paths like /events or external links starting with https://",
      validation: (rule) => rule.required(),
    }),
  ],
});
