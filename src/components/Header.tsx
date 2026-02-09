"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[var(--hops-navy)] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg md:text-xl font-bold tracking-tight hover:text-[var(--hops-green)] transition-colors">
          Mark Watson for House District 29
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/about"
            className={`transition-colors ${isActive("/about") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
          >
            About
          </Link>
          {/* Supporters link hidden temporarily
          <Link
            href="/supporters"
            className={`transition-colors ${isActive("/supporters") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
          >
            Supporters
          </Link>
          */}
          <Link
            href="/contribute"
            className="bg-[var(--hops-green)] hover:bg-[var(--hops-green-light)] px-4 py-2 rounded-md font-semibold transition-colors"
          >
            Contribute
          </Link>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <Link
            href="/contribute"
            className="bg-[var(--hops-green)] hover:bg-[var(--hops-green-light)] px-4 py-2 rounded-md font-semibold transition-colors"
          >
            Contribute
          </Link>
        </div>
      </div>
      {/* Mobile nav links */}
      <div className="md:hidden border-t border-[var(--hops-navy-dark)] px-4 py-2 flex justify-center space-x-6">
        <Link
          href="/about"
          className={`transition-colors ${isActive("/about") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
        >
          About
        </Link>
        {/* Supporters link hidden temporarily
        <Link
          href="/supporters"
          className={`transition-colors ${isActive("/supporters") ? "text-[var(--hops-green)]" : "hover:text-[var(--hops-green)]"}`}
        >
          Supporters
        </Link>
        */}
      </div>
    </nav>
  );
}
