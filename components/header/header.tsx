'use client'
import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
export default function Header() {
      const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };
    return (
          <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Calendar className="size-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">Eventura</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className={`${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Browse Events
              </Link>
              <Link
                href="/my-bookings"
                className={`${
                  isActive("/my-bookings")
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                My Bookings
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-6 text-gray-600" />
              ) : (
                <Menu className="size-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className={`${
                    isActive("/") ? "text-blue-600" : "text-gray-600"
                  } transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Browse Events
                </Link>
                <Link
                  href="/my-bookings"
                  className={`${
                    isActive("/my-bookings") ? "text-blue-600" : "text-gray-600"
                  } transition-colors`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Bookings
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>


    )

}