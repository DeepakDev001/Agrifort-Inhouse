"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User, Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Leaders of People", href: "/leaders" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Farmer Wins", href: "/farmer-wins" },
    { label: "AgriFort Highlights", href: "/highlights" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Leaf className="w-7 h-7 text-agri-green-600 group-hover:text-agri-green-700 transition-colors" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-agri-green-500 rounded-full opacity-75"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-agri-green-600 dark:text-agri-green-400 leading-tight">AGRIFORT</span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">TECHNOLOGIES</span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative group",
                    active
                      ? "text-agri-green-600 dark:text-agri-green-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-agri-green-600 dark:hover:text-agri-green-400"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-agri-green-600 transition-all",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Right Side - Registration & Login */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/registration"
              className={cn(
                "text-sm font-medium transition-colors",
                isActive("/registration")
                  ? "text-agri-green-600 dark:text-agri-green-400"
                  : "text-gray-700 hover:text-agri-green-600 dark:text-gray-300 dark:hover:text-agri-green-400"
              )}
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
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors py-2 px-4 rounded-md",
                      active
                        ? "text-agri-green-600 dark:text-agri-green-400 bg-agri-green-50 dark:bg-agri-green-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-agri-green-600 dark:hover:text-agri-green-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-t pt-3 mt-3 space-y-3">
                <Link
                  href="/registration"
                  className={cn(
                    "text-sm font-medium transition-colors py-2 px-4 block rounded-md",
                    isActive("/registration")
                      ? "text-agri-green-600 dark:text-agri-green-400 bg-agri-green-50 dark:bg-agri-green-900/20"
                      : "text-gray-700 dark:text-gray-300 hover:text-agri-green-600 dark:hover:text-agri-green-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
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

