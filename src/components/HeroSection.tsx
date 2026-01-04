"use client";

import { useState, useEffect } from "react";
import { Factory, Search, Users, Package, Handshake } from "lucide-react";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Multiple dummy images for agriculture/farming theme
  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80", // Combine harvester
      alt: "Combine harvester in field",
    },
    {
      url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&q=80", // Tractor in field
      alt: "Tractor in agricultural field",
    },
    {
      url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80", // Green fields
      alt: "Green agricultural fields",
    },
    {
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1920&q=80", // Farm landscape
      alt: "Beautiful farm landscape",
    },
    {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80", // Wheat field
      alt: "Golden wheat field",
    },
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const features = [
    {
      icon: Factory,
      label: "Manufacturing",
    },
    {
      icon: Search,
      label: "R&D",
    },
    {
      icon: Users,
      label: "People at AFT",
    },
    {
      icon: Package,
      label: "Tech-based Products",
    },
    {
      icon: Handshake,
      label: "Trusted Partnerships",
    },
  ];

  return (
    <section className="relative w-full h-[60vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Images - Right Side with Carousel Effect */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-r from-agri-green-900 via-agri-green-800 to-transparent transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image.url}')`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Fallback gradient if image doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-amber-500/30 to-transparent"></div>
          </div>
        ))}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-agri-green-900/95 via-agri-green-800/90 to-transparent z-10"></div>
      </div>

      {/* Gradient Overlay - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 md:w-2/5 bg-gradient-to-r from-agri-green-900 via-agri-green-800/95 to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in">
            Innovative Technology To Transform Agriculture
          </h1>

          {/* Feature Icons Row */}
          <div className="flex flex-wrap gap-4 md:gap-6 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium mt-2 text-center max-w-[100px]">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 right-8 z-30 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

