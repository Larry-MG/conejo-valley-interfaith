import { promises as fs } from "node:fs";
import path from "node:path";
import { defaultHomepageData, type HomepagePuckData } from "@/lib/puck/homepage";

export const HOMEPAGE_CONTENT_FILE = path.join(
  process.cwd(),
  "src",
  "content",
  "homepage.json",
);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function normalizeHomepageData(value: unknown): HomepagePuckData {
  if (!isRecord(value)) {
    return defaultHomepageData;
  }

  const root = isRecord(value.root) ? value.root : defaultHomepageData.root;
  const content = Array.isArray(value.content)
    ? value.content
    : defaultHomepageData.content;
  const zones = isRecord(value.zones) ? value.zones : undefined;

  return {
    root,
    content,
    ...(zones ? { zones } : {}),
  } as HomepagePuckData;
}

export async function readHomepageContent(): Promise<HomepagePuckData> {
  try {
    const file = await fs.readFile(HOMEPAGE_CONTENT_FILE, "utf8");
    return normalizeHomepageData(JSON.parse(file));
  } catch {
    return defaultHomepageData;
  }
}

export async function writeHomepageContent(data: HomepagePuckData) {
  await fs.mkdir(path.dirname(HOMEPAGE_CONTENT_FILE), { recursive: true });
  await fs.writeFile(
    HOMEPAGE_CONTENT_FILE,
    `${JSON.stringify(normalizeHomepageData(data), null, 2)}\n`,
    "utf8",
  );
}
