"use client";

import Link from "next/link";
import { MapPin, Mail, Users, Building2, Newspaper, Radio, Globe, Calendar, ArrowRight, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const addresses = [
    {
      title: "Reg. Office (Lucknow)",
      address: "911, Sector-M Ashiyana Colony, Kanpur Road, UP - 226012",
    },
    {
      title: "Corporate (Mumbai)",
      address: "302, Wing-A, Cello triumph, I.B Patel road, Goregaon East - 400063",
    },
    {
      title: "Dubai Presence",
      address: "Blue Quadrant DSO-IFZA-6910, Dubai Digital Park, UAE",
    },
  ];

  const mediaLinks = [
    { label: "Newsrooms", href: "/media/newsrooms", icon: Newspaper },
    { label: "Electronic", href: "/media/electronic", icon: Radio },
    { label: "Online", href: "/media/online", icon: Globe },
    { label: "Events", href: "/media/events", icon: Calendar },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/agrifort",
      icon: Facebook,
      color: "hover:text-blue-500 hover:bg-blue-500/10",
    },
    {
      name: "Twitter",
      href: "https://www.twitter.com/agrifort",
      icon: Twitter,
      color: "hover:text-sky-400 hover:bg-sky-400/10",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/agrifort",
      icon: Linkedin,
      color: "hover:text-blue-600 hover:bg-blue-600/10",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/agrifort",
      icon: Youtube,
      color: "hover:text-red-500 hover:bg-red-500/10",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-agri-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-agri-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-10 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Address Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-agri-green-500/20 rounded-lg">
                <MapPin className="w-4 h-4 text-agri-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Address</h3>
            </div>
            <div className="space-y-2.5">
              {addresses.map((addr, index) => (
                <div
                  key={index}
                  className="group p-2.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-agri-green-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-agri-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <h4 className="text-xs font-semibold mb-1 text-white group-hover:text-agri-green-400 transition-colors">
                        {addr.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-snug">
                        {addr.address}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-agri-green-500/20 rounded-lg">
                <Newspaper className="w-4 h-4 text-agri-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Media</h3>
            </div>
            <ul className="space-y-1.5">
              {mediaLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-2.5 py-2 px-2.5 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="w-3.5 h-3.5 text-agri-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="text-xs font-medium flex-1">{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Farmer's Reach & Get in Touch */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-agri-green-500/20 rounded-lg">
                <Users className="w-4 h-4 text-agri-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Farmer&apos;s Reach</h3>
            </div>
            <p className="text-xs text-gray-300 leading-snug mb-4">
              Connecting with farmers nationwide through innovative solutions and trusted partnerships.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-agri-green-500/20 rounded-lg">
                <Mail className="w-4 h-4 text-agri-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            </div>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2.5 py-2 px-2.5 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Mail className="w-3.5 h-3.5 text-agri-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-xs font-medium flex-1">Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="group flex items-center gap-2.5 py-2 px-2.5 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <Users className="w-3.5 h-3.5 text-agri-green-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-xs font-medium flex-1">Join Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Groups of Companies */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-agri-green-500/20 rounded-lg">
                <Building2 className="w-4 h-4 text-agri-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Groups of Companies</h3>
            </div>
            <Link href="/companies" className="block group mb-4">
              <div className="relative py-2.5 px-0 rounded-md bg-gradient-to-br from-agri-green-500/20 to-agri-green-600/10 border border-agri-green-500/30 hover:border-agri-green-400/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-agri-green-500/0 via-agri-green-500/10 to-agri-green-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center gap-1.5">
                  <p className="text-xs font-medium text-center text-white group-hover:text-agri-green-300 transition-colors">
                    Click to visit company websites
                  </p>
                  <ArrowRight className="w-3.5 h-3.5 text-agri-green-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </div>
              </div>
            </Link>

            {/* Social Media Icons */}
            <div>
              <h4 className="text-xs font-semibold text-gray-400 mb-2.5">Follow Us</h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-center w-9 h-9 rounded-md bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Links */}
        <div className="pt-5 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-agri-green-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">AF</span>
              </div>
              <p className="text-xs text-gray-400">
                Copyright © 2026 <span className="text-white font-semibold">AgriFort Technologies</span>. All rights reserved.
              </p>
            </div>
            <div className="flex gap-5 text-xs">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-agri-green-400 transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-agri-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-agri-green-400 transition-colors relative group"
              >
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-agri-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

