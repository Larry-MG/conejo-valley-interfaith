import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { isSanityConfigured, sanityApiVersion, sanityDataset, sanityProjectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { singletonActions, structure } from "./src/sanity/structure";

const singletonTypes = new Set(["siteSettings", "homePage"]);
const studioConfig = isSanityConfigured
  ? {
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
    }
  : {
      projectId: "missing-project-id",
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
    };

export default defineConfig({
  ...studioConfig,
  name: "default",
  title: "Conejo Valley Interfaith CMS",
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
  document: {
    actions: (prev, context) =>
      singletonTypes.has(context.schemaType)
        ? prev.filter((action) => action.action && singletonActions.has(action.action))
        : prev,
    newDocumentOptions: (prev, context) =>
      context.creationContext.type === "global"
        ? prev.filter((templateItem) => !singletonTypes.has(templateItem.templateId))
        : prev,
  },
});
