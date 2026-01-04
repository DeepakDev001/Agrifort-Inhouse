"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, User, Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Leaders of People", href: "/leaders" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Farmer Wins", href: "/farmer-wins" },
    { label: "AgriFort Highlights", href: "/highlights" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Leaf className="w-8 h-8 text-agri-green-600 group-hover:text-agri-green-700 transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-agri-green-500 rounded-full opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-agri-green-600 dark:text-agri-green-400 leading-tight">AGRIFORT</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 leading-tight">TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-agri-green-600 dark:hover:text-agri-green-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-agri-green-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side - Registration & Login */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/registration"
              className="text-sm font-medium text-gray-700 hover:text-agri-green-600 transition-colors dark:text-gray-300 dark:hover:text-agri-green-400"
            >
              Registration Center
            </Link>
            <Link
              href="/login"
              className="btn-gradient-agri flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Workplace Login
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t animate-slide-up bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-agri-green-600 dark:hover:text-agri-green-400 transition-colors py-2 px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t pt-3 mt-3 space-y-3">
                <Link
                  href="/registration"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-agri-green-600 dark:hover:text-agri-green-400 transition-colors py-2 px-4 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registration Center
                </Link>
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                  <ThemeToggle />
                </div>
                <Link
                  href="/login"
                  className="btn-gradient-agri flex items-center gap-2 mx-4 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Workplace Login
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

