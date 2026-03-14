import { createHmac, timingSafeEqual } from "node:crypto";

export const EDITOR_SESSION_COOKIE_NAME = "cvia-editor-session";

const SESSION_DURATION_MS = 1000 * 60 * 60 * 12;

function getEditorSecret() {
  const username = process.env.PUCK_EDITOR_USERNAME?.trim();
  const password = process.env.PUCK_EDITOR_PASSWORD?.trim();

  if (!username || !password) {
    return null;
  }

  return {
    username,
    password,
    secret: `${username}:${password}`,
  };
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function editorCredentialsConfigured() {
  return Boolean(getEditorSecret());
}

export function createEditorSessionValue() {
  const auth = getEditorSecret();

  if (!auth) {
    return null;
  }

  const payload = Buffer.from(
    JSON.stringify({
      username: auth.username,
      expiresAt: Date.now() + SESSION_DURATION_MS,
    }),
  ).toString("base64url");

  return `${payload}.${sign(payload, auth.secret)}`;
}

export function verifyEditorSessionValue(value: string | null | undefined) {
  const auth = getEditorSecret();

  if (!auth || !value) {
    return false;
  }

  const [payload, signature] = value.split(".");

  if (!payload || !signature) {
    return false;
  }

  const expectedSignature = sign(payload, auth.secret);

  if (signature.length !== expectedSignature.length) {
    return false;
  }

  if (
    !timingSafeEqual(
      Buffer.from(signature, "utf8"),
      Buffer.from(expectedSignature, "utf8"),
    )
  ) {
    return false;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));

    return (
      parsed.username === auth.username &&
      typeof parsed.expiresAt === "number" &&
      parsed.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
}

export function buildEditorSessionCookie(value: string) {
  return {
    name: EDITOR_SESSION_COOKIE_NAME,
    value,
    httpOnly: true,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(Date.now() + SESSION_DURATION_MS),
  };
}

export function buildClearedEditorSessionCookie() {
  return {
    name: EDITOR_SESSION_COOKIE_NAME,
    value: "",
    httpOnly: true,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
  };
}
