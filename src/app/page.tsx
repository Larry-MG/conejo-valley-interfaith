import { Render } from "@measured/puck/rsc";
import { readHomepageContent } from "@/lib/puck/homepage-content";
import { homepagePuckConfig } from "@/lib/puck/homepage";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await readHomepageContent();
  return <Render config={homepagePuckConfig} data={data} />;
}
