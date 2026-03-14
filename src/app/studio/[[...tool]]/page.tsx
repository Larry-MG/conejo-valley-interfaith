import { metadata, viewport } from "next-sanity/studio";
import { isSanityConfigured } from "@/sanity/env";
import { StudioClient } from "./StudioClient";

export const dynamic = "force-static";
export { metadata, viewport };

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="min-h-screen bg-cream px-6 py-20 text-charcoal">
        <div className="mx-auto max-w-3xl rounded-3xl border border-sand/60 bg-warm-white p-10 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">Sanity setup required</p>
          <h1 className="mt-4 font-serif text-4xl">Studio is ready once env vars are added.</h1>
          <p className="mt-4 text-warm-gray leading-relaxed">
            Add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and optionally `SANITY_API_READ_TOKEN`, then reload `/studio`.
          </p>
        </div>
      </div>
    );
  }

  return <StudioClient />;
}
