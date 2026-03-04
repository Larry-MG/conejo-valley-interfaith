import type { Metadata } from "next";
import { EventList } from "@/components/events/EventList";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Events and gatherings from the Conejo Valley Interfaith Association and Women's Interfaith Network.",
};

export default function EventsPage() {
  return (
    <div className="pt-28 pb-24">
      <EventList />
    </div>
  );
}
