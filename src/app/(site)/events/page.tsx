import type { Metadata } from "next";
import { EventList } from "@/components/events/EventList";
import { getEvents, getPastEventFliers, getSitePage } from "@/lib/cms/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getSitePage("events");

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function EventsPage() {
  const [page, events, previousEventFliers] = await Promise.all([
    getSitePage("events"),
    getEvents(),
    getPastEventFliers(),
  ]);

  return (
    <div className="pt-28 pb-24">
      <EventList
        title={page.heading}
        subtitle={page.subtitle}
        events={events}
        previousEventFliers={previousEventFliers}
      />
    </div>
  );
}
