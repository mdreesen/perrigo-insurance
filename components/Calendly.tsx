'use client';
import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }: any) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head?.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget h-[100vh] w-[100%] sm:py-8 py-20"
      data-url={url}
    ></div>
  );
};

export default CalendlyEmbed;