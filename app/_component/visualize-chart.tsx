"use client";

import { useEffect, useRef } from "react";
// import Image from "next/image";

export default function VisualizeChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://public.flourish.studio/resources/embed.js";
      script.async = true;
      containerRef.current?.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="flourish-embed flourish-bar-chart-race"
      data-src="visualisation/23497414"
    >
      <noscript>
        <img
          src="https://public.flourish.studio/visualisation/23497414/thumbnail"
          width="100%"
          alt="bar-chart-race visualization"
        />
      </noscript>
    </div>
  );
}
