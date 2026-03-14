"use client";

import { useState } from "react";
import { Puck } from "@measured/puck";
import { homepagePuckConfig, type HomepagePuckData } from "@/lib/puck/homepage";

type HomepageEditorProps = {
  initialData: HomepagePuckData;
};

export function HomepageEditor({ initialData }: HomepageEditorProps) {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState("Ready");

  async function handlePublish(nextData: HomepagePuckData) {
    setStatus("Saving...");

    const response = await fetch("/api/admin/homepage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nextData),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      throw new Error(body?.error ?? "Unable to save homepage content.");
    }

    setData(nextData);
    setStatus("Saved");
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-sand/60 bg-white shadow-sm">
      <div className="border-b border-sand/60 bg-cream px-4 py-3 text-sm text-warm-gray">
        {status}
      </div>
      <Puck
        config={homepagePuckConfig}
        data={data}
        headerTitle="Homepage Editor"
        headerPath="/"
        onChange={(nextData) => {
          setData(nextData);
          setStatus("Unsaved changes");
        }}
        onPublish={handlePublish}
      />
    </div>
  );
}
