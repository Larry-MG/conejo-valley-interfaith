import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  EDITOR_SESSION_COOKIE_NAME,
  verifyEditorSessionValue,
} from "@/lib/puck/auth";
import {
  normalizeHomepageData,
  writeHomepageContent,
} from "@/lib/puck/homepage-content";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const cookieStore = await cookies();

  if (
    !verifyEditorSessionValue(
      cookieStore.get(EDITOR_SESSION_COOKIE_NAME)?.value,
    )
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    await writeHomepageContent(normalizeHomepageData(body));
    revalidatePath("/");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to save homepage content." },
      { status: 500 },
    );
  }
}
