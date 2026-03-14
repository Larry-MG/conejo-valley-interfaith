"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  buildClearedEditorSessionCookie,
  buildEditorSessionCookie,
  createEditorSessionValue,
  editorCredentialsConfigured,
} from "@/lib/puck/auth";

export async function loginToEditor(formData: FormData) {
  if (!editorCredentialsConfigured()) {
    redirect("/admin/login?error=missing-config");
  }

  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (
    username !== process.env.PUCK_EDITOR_USERNAME?.trim() ||
    password !== process.env.PUCK_EDITOR_PASSWORD?.trim()
  ) {
    redirect("/admin/login?error=invalid");
  }

  const sessionValue = createEditorSessionValue();

  if (!sessionValue) {
    redirect("/admin/login?error=missing-config");
  }

  const cookieStore = await cookies();
  cookieStore.set(buildEditorSessionCookie(sessionValue));

  redirect("/admin");
}

export async function logoutFromEditor() {
  const cookieStore = await cookies();
  cookieStore.set(buildClearedEditorSessionCookie());
  redirect("/admin/login");
}
