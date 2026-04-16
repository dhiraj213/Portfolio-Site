"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const section = document.getElementById(href.slice(1));
    if (section) {
      // By scrolling the massive 150vh container block to the 'center' of the viewport,
      // it perfectly frames the internal content (which is vertically centered via flex)
      // without being tricked by Framer Motion translation offsets.
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.5 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4"
    >
      <ul className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-16 overflow-x-auto no-scrollbar py-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              aria-label={`Scroll to ${item.name}`}
              className={`text-sm font-medium transition-all duration-300 flex items-center justify-center ${activeSection === item.href.slice(1)
                  ? "text-neon-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] scale-110"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              <span className="hidden min-[360px]:inline">{item.name}</span>
              <span className="inline min-[360px]:hidden w-2.5 h-2.5 rounded-full bg-current transition-all" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
