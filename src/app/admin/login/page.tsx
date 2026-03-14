import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { loginToEditor } from "@/app/admin/actions";
import {
  EDITOR_SESSION_COOKIE_NAME,
  editorCredentialsConfigured,
  verifyEditorSessionValue,
} from "@/lib/puck/auth";

export const dynamic = "force-dynamic";

type AdminLoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

const errorMessages: Record<string, string> = {
  invalid: "The username or password was incorrect.",
  "missing-config":
    "Set PUCK_EDITOR_USERNAME and PUCK_EDITOR_PASSWORD before using the editor.",
};

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();

  if (
    verifyEditorSessionValue(
      cookieStore.get(EDITOR_SESSION_COOKIE_NAME)?.value,
    )
  ) {
    redirect("/admin");
  }

  const configured = editorCredentialsConfigured();
  const errorMessage = params.error ? errorMessages[params.error] : null;

  return (
    <section className="bg-cream py-16">
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-sand/60 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
            Admin
          </p>
          <h1 className="mt-3 font-serif text-3xl text-charcoal">
            Puck Editor Login
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-warm-gray">
            Sign in with the editor credentials from the environment variables.
          </p>

          {errorMessage ? (
            <p className="mt-4 rounded-2xl border border-terracotta/20 bg-terracotta/10 px-4 py-3 text-sm text-charcoal">
              {errorMessage}
            </p>
          ) : null}

          {!configured ? (
            <p className="mt-6 rounded-2xl border border-sand/60 bg-cream px-4 py-3 text-sm text-warm-gray">
              Add the two `PUCK_EDITOR_*` variables in `.env.local`, then
              reload this page.
            </p>
          ) : (
            <form action={loginToEditor} className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-charcoal">
                  Username
                </span>
                <input
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="w-full rounded-2xl border border-sand bg-warm-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-sage"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-charcoal">
                  Password
                </span>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="w-full rounded-2xl border border-sand bg-warm-white px-4 py-3 text-charcoal outline-none transition-colors focus:border-sage"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-sage px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-deep-forest"
              >
                Sign in
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
