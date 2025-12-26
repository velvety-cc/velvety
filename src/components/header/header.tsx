"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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

  // 1. Hook into the scroll progress
  const { scrollY } = useScroll();

  // 2. Transform scroll values into style values (0px to 50px scroll range)
  const headerY = useTransform(scrollY, [0, 50], [0, -32]);
  const headerPadding = useTransform(
    scrollY,
    [0, 50],
    ["64px 32px 16px", "48px 32px 8px"]
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 20],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.05)"]
  );

  return (
    <header className="sm:mt-44">
      {/* Desktop Header */}
      <section className="hidden sm:grid sm:w-full sm:grid-cols-3 sm:gap-x-8 lg:gap-x-16">
        <Logo />
        <div className="col-span-1 col-start-3">
          <ul className="grid list-none grid-cols-1 gap-y-7">
            {NAV_LINKS.map((link) => (
              <NavButton
                key={link.href}
                route={link.href}
                routeName={link.name}
                clicked={pathname.startsWith(link.href)}
              />
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile Header */}
      <section className="sm:hidden">
        {/* Animated Sticky Bar */}
        <motion.div
          style={{
            y: headerY,
            padding: headerPadding,
            boxShadow: headerShadow,
          }}
          className="fixed inset-x-0 top-0 z-20 bg-white/80 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <Logo />
            <MenuButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              clicked={isMenuOpen}
            />
          </div>
        </motion.div>

        {/* Smooth Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-10 bg-white px-8 pt-32"
            >
              <ul className="grid gap-y-8">
                {NAV_LINKS.map((link) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NavButton
                      route={link.href}
                      routeName={link.name}
                      clicked={pathname.startsWith(link.href)}
                    />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
}
