"use client";

import { Leaf, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description?: string;
  showBackButton?: boolean;
}

export default function ComingSoon({
  title,
  description = "We're working hard to bring you something amazing. Stay tuned!",
  showBackButton = true,
}: ComingSoonProps) {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-agri-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-agri-green-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-2xl mx-auto text-center z-10">
        {/* Animated Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-agri-green-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-agri-green-500 to-agri-green-600 flex items-center justify-center shadow-lg">
              <Leaf className="w-10 h-10 text-white animate-bounce" style={{ animationDuration: "2s" }} />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-agri-green-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-agri-green-400 to-agri-green-500 flex items-center justify-center shadow-lg">
              <Clock className="w-8 h-8 text-white animate-spin" style={{ animationDuration: "3s" }} />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-agri-green-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-agri-green-500 to-agri-green-600 flex items-center justify-center shadow-lg">
              <Sparkles className="w-10 h-10 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="gradient-text">{title}</span>
        </h1>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agri-green-100 dark:bg-agri-green-900/30 border border-agri-green-300 dark:border-agri-green-700 mb-8 animate-slide-up">
          <div className="w-2 h-2 rounded-full bg-agri-green-500 animate-pulse"></div>
          <span className="text-sm font-semibold text-agri-green-700 dark:text-agri-green-300">
            Coming Soon
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {description}
        </p>

        {/* Progress Indicator */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="w-full max-w-md mx-auto h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-agri-green-500 to-agri-green-600 rounded-full animate-progress"></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            We're making progress every day
          </p>
        </div>

        {/* Back Button */}
        {showBackButton && (
          <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-agri-green-500 hover:bg-agri-green-600 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

