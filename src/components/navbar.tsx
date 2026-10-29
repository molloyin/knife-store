"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/knifelist", label: "Knives" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-colors duration-300 ${
          solid ? "border-b border-line bg-black" : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-shell items-center justify-between px-4 sm:px-6">
          {/* Left: desktop links / mobile menu toggle */}
          <nav className="hidden flex-1 items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`ui link-underline ${
                  pathname === link.href ? "text-white" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="ui flex flex-1 items-center gap-2 text-left md:hidden"
          >
            <span className="flex h-3 w-4 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </span>
            {menuOpen ? "Close" : "Menu"}
          </button>

          {/* Center: wordmark */}
          <Link href="/" className="display shrink-0 text-white transition-opacity hover:opacity-70">
            <span className="hidden text-[15px] lg:inline">OBJECTIVE RESOURCE GROUP</span>
            <span className="text-[15px] lg:hidden">ORG</span>
          </Link>

          {/* Right: contact */}
          <div className="flex flex-1 justify-end">
            <Link href="/contact" className="ui link-underline">
              Contact
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="display border-b border-line py-5 text-[13vw] text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="display border-b border-line py-5 text-[13vw] text-white">
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
