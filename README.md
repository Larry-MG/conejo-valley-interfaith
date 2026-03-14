# Conejo Valley Interfaith site

This Next.js app includes an embedded Sanity Studio at `/studio` plus a structured content layer for homepage copy, inner-page headings, organizations, events, past-event fliers, and gallery content.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the site and `http://localhost:3000/studio` for the CMS.

## Sanity setup

1. Create or choose a Sanity project and dataset.
2. Copy `.env.example` to `.env.local`.
3. Fill in:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-03-14
SANITY_API_READ_TOKEN=optional_server_token_for_private_datasets
```

4. In the Sanity project settings, add `http://localhost:3000` and your deployed site domain to the project CORS origins before using the embedded Studio.
5. Start the app and open `/studio`.
6. In Sanity, create these documents first:
   - `Site Settings`
   - `Home Page`
   - four `Page Copy` entries with slugs `organizations`, `events`, `gallery`, and `contact`
7. Add organizations, upcoming events, past event fliers, gallery categories, and gallery images.

## Ahmad editing guide

- Use `Site Settings` for sitewide email addresses, footer meeting copy, tagline, and Facebook URL.
- Use `Home Page` for the animated homepage text and CTA buttons only. The layout and animation code stay locked in React.
- Use `Inner Pages` for each page heading, subtitle, and metadata copy.
- Use `Upcoming Events`, `Past Event Fliers`, `Organizations`, `Gallery Categories`, and `Gallery Images` for structured collections.
- Avoid deleting categories that still have gallery images referencing them.

## Content safety model

- The homepage animation and layout remain in code; Sanity only controls approved text and collection data.
- Inner pages use structured fields instead of portable-text page building.
- If Sanity env vars are missing or the API is unavailable, the site falls back to the current hardcoded content so production does not blank out.

## Validation

Run these before shipping:

```bash
npm run lint
npm run build
```
