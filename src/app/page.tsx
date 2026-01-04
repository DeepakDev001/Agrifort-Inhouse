import HeroSection from "@/components/HeroSection";
import ScrollingBanner from "@/components/ScrollingBanner";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Scrolling Banner */}
      <ScrollingBanner />

      {/* AgriFort Journey Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AgriFort Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              AgriFort Technologies was born from a vision at Blue Quadrant, Dubai—to build a strong, 
              future-ready agriculture company, and what better place to begin this journey than in the 
              heart of Indian farming. What started as a single idea has today grown into one of the 
              fastest-rising groups in the sustainable agriculture space, driven by innovation, science 
              and a deep commitment to farmers.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-agri-green-600 hover:text-agri-green-700 font-semibold text-lg transition-colors group"
            >
              Read More...
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

