## CVIA Site

This is the Conejo Valley Interfaith Association site built with Next.js App Router.

## Puck Homepage Editor

The homepage body is file-backed and editable at `/admin`.

### Ahmad setup

1. Create `.env.local` with:

```bash
PUCK_EDITOR_USERNAME=ahmad
PUCK_EDITOR_PASSWORD=replace-this-with-a-strong-password
```

2. Start the app with `npm run dev`.
3. Open `http://localhost:3000/admin/login`.
4. Sign in and publish changes from the Puck editor.

Homepage content lives in `src/content/homepage.json`. The public homepage at `/` renders from that file, while the site navbar and footer stay in the shared layout outside Puck.

## Development

```bash
npm install
npm run dev
npm run build
```

The editor uses a signed HTTP-only session cookie based on the configured credentials. Changing either editor env var invalidates existing sessions.
