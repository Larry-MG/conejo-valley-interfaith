import "@measured/puck/puck.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logoutFromEditor } from "@/app/admin/actions";
import { HomepageEditor } from "@/components/puck/HomepageEditor";
import { readHomepageContent } from "@/lib/puck/homepage-content";
import {
  EDITOR_SESSION_COOKIE_NAME,
  editorCredentialsConfigured,
  verifyEditorSessionValue,
} from "@/lib/puck/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const cookieStore = await cookies();

  if (!editorCredentialsConfigured()) {
    redirect("/admin/login?error=missing-config");
  }

  if (
    !verifyEditorSessionValue(
      cookieStore.get(EDITOR_SESSION_COOKIE_NAME)?.value,
    )
  ) {
    redirect("/admin/login");
  }

  const data = await readHomepageContent();

  return (
    <section className="bg-cream py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-sand/60 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-terracotta">
              Admin
            </p>
            <h1 className="mt-2 font-serif text-3xl text-charcoal">
              Homepage Editor
            </h1>
            <p className="mt-2 text-sm text-warm-gray">
              Drag, drop, edit, and publish the homepage body content.
            </p>
          </div>

          <form action={logoutFromEditor}>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-sand px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-sage hover:text-sage"
            >
              Sign out
            </button>
          </form>
        </div>

        <HomepageEditor initialData={data} />
      </div>
    </section>
  );
}
