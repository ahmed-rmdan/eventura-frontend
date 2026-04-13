import { Calendar } from "lucide-react";
import Link from "next/link";
export default function Footer() {
    return (
              <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="size-6" />
                <span className="text-lg font-semibold">Eventura</span>
              </div>
              <p className="text-gray-400">
                Your premier platform for booking events and ceremonies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Browse Events</Link></li>
                 <li><Link href="/organizers" className="hover:text-white transition-colors">Organizers</Link></li>
                <li><Link href="/my-bookings" className="hover:text-white transition-colors">My Bookings</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@eventura.com</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 eventura. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}