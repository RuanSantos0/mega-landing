"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#noticias", label: "Notícias" },
  { href: "#campeonatos", label: "Campeonato" },
  { href: "#programacao", label: "Programação" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contactos", label: "Contactos" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo width={120} height={60} className="h-12 w-auto" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul
          className={`absolute md:relative top-full left-0 right-0 md:flex gap-8 bg-black md:bg-transparent border-t md:border-t-0 border-zinc-800 md:border-0 ${
            open ? "flex flex-col p-6" : "hidden md:flex"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 md:py-0 text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://instagram.com/mega.expo"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 md:py-0 text-[#FFCB05] hover:text-white transition-colors"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
