"use client";

import { Leaf } from "lucide-react";

export default function ScrollingBanner() {
  const messages = [
    "Innovative technology to transform agriculture",
    "Farmer wins - we win",
    "Trusted products by farmers nationwide",
    "Jai jawan - jai kisan",
    "Moving lives through innovation",
  ];

  return (
    <div className="w-full bg-agri-green-500 py-3 overflow-hidden relative">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <span className="text-white font-medium text-sm md:text-base">{msg}</span>
                <Leaf className="w-4 h-4 text-white flex-shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

