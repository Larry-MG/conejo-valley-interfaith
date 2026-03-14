import { createClient, type QueryParams } from "next-sanity";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
  sanityReadToken,
} from "@/sanity/env";

const client =
  isSanityConfigured
    ? createClient({
        projectId: sanityProjectId,
        dataset: sanityDataset,
        apiVersion: sanityApiVersion,
        useCdn: !sanityReadToken,
        token: sanityReadToken,
      })
    : null;

interface SanityFetchOptions<T> {
  query: string;
  params?: QueryParams;
  fallback: T;
  tags?: string[];
}

export async function sanityFetch<T>({ query, params, fallback, tags }: SanityFetchOptions<T>): Promise<T> {
  if (!client) {
    return fallback;
  }

  try {
    const data = await client.fetch<T>(query, params ?? {}, {
      next: {
        revalidate: 60,
        tags,
      },
    });

    return data ?? fallback;
  } catch (error) {
    console.error("Sanity fetch failed, serving fallback content.", error);
    return fallback;
  }
}
