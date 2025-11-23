'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-4 border-red-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="text-2xl">🚌</div>
            <span className="text-gray-900">Transmilenio</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-semibold">
            <Link href="/" className="hover:text-red-600 transition">
              Inicio
            </Link>
            <Link href="/rutas" className="hover:text-red-600 transition">
              Rutas
            </Link>
            <Link href="/tarjeta" className="hover:text-red-600 transition">
              Tarjeta
            </Link>
            <Link href="/planear-viaje" className="hover:text-red-600 transition">
              Planear Viaje
            </Link>
            <Link href="/alertas" className="hover:text-red-600 transition">
              Alertas
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 text-gray-700 font-semibold">
            <Link href="/" className="hover:text-red-600 py-2">
              Inicio
            </Link>
            <Link href="/rutas" className="hover:text-red-600 py-2">
              Rutas
            </Link>
            <Link href="/tarjeta" className="hover:text-red-600 py-2">
              Tarjeta
            </Link>
            <Link href="/planear-viaje" className="hover:text-red-600 py-2">
              Planear Viaje
            </Link>
            <Link href="/alertas" className="hover:text-red-600 py-2">
              Alertas
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
