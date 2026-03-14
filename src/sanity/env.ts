export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-03-14";
export const sanityReadToken = process.env.SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(sanityProjectId);

export function getRequiredStudioConfig() {
  if (!isSanityConfigured) {
    throw new Error("Sanity is not configured. Add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET.");
  }

  return {
    projectId: sanityProjectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
  };
}
