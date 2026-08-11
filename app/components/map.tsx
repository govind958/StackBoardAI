"use client";

import { MapPinned } from "lucide-react";

export default function Map() {
  return (
    <>
      <div className="rounded-xl overflow-hidden border border-white/10">
        <iframe
          title="Apex Roofing location"
          src="YOUR_REAL_GOOGLE_MAPS_EMBED_URL"
          width="100%"
          height="180"
          style={{
            border: 0,
            filter: "grayscale(100%) invert(92%) contrast(83%)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>

      <a
        href="YOUR_REAL_GOOGLE_MAPS_URL"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 mt-3 text-xs font-bold text-[#e6b84a] hover:text-[#f0c855] transition-colors"
      >
        <MapPinned className="w-3.5 h-3.5" />
        Open in Google Maps
      </a>
    </>
  );
}