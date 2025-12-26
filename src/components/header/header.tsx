"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import NavButton from "./navigation/nav-button";
import Logo from "./logo/logo";
import MenuButton from "./navigation/menu-button";

const NAV_LINKS = [
  { name: "About", href: "/about" },
  { name: "Writings", href: "/writings" },
  { name: "Archive", href: "/archive" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Toggle menu helper
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Scroll listener for animations
  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Calculate scroll-based styles
  const scrollProgress = Math.min(Math.max(scrollY / 12, 0), 1);
  const paddingTop = 64 - scrollProgress * 16;
  const paddingBottom = 16 - scrollProgress * 8;
  const translateY = -32 * scrollProgress;

  // Shared Navigation List Component
  const NavigationList = () => (
    <ul className="grid list-none grid-cols-1 gap-y-7">
      {NAV_LINKS.map((link) => (
        <NavButton
          key={link.href}
          route={link.href}
          routeName={link.name}
          // Matches if current path starts with the link href (e.g., /about/team matches /about)
          clicked={pathname.startsWith(link.href)}
        />
      ))}
    </ul>
  );

  return (
    <header className="sm:mt-44">
      {/* Desktop Header */}
      <section className="hidden sm:grid sm:w-full sm:grid-cols-3 sm:gap-x-8 lg:gap-x-16">
        <Logo />
        <div className="col-span-1 col-start-3">
          <NavigationList />
        </div>
      </section>

      {/* Mobile Header */}
      <section className="sm:hidden">
        {/* Sticky Top Bar */}
        <div
          className={`fixed left-0 right-0 top-0 z-10 bg-white/80 px-8 backdrop-blur transition-all duration-200 ease-out ${
            scrollProgress > 0.5 ? "shadow-sm" : ""
          }`}
          style={{
            paddingTop: `${paddingTop}px`,
            paddingBottom: `${paddingBottom}px`,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div className="flex w-full flex-row items-center justify-between">
            <Logo />
            <MenuButton onClick={toggleMenu} clicked={isMenuOpen} />
          </div>
        </div>

        {/* Fullscreen Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-10 cursor-pointer bg-white px-8 pt-16 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={toggleMenu}
        >
          <div
            className="flex w-full flex-row items-center justify-between transition-transform duration-200 ease-out"
            style={{ transform: `translateY(${translateY - 16}px)` }}
          >
            <Logo />
            <MenuButton onClick={toggleMenu} clicked={isMenuOpen} />
          </div>
          <div
            className="mt-16 transition-transform duration-200 ease-out"
            style={{ transform: `translateY(${translateY}px)` }}
          >
            <NavigationList />
          </div>
        </div>
      </section>
    </header>
  );
}
