import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { EventCard } from "../cards/event";
import {ImageWithFallback} from "../other/ImageWithFallback";
import { events } from "@/mockdata/events";

export default function Popular() {
  const popularEvents = [...events]
    .sort((a, b) => b.booked - a.booked)
    .slice(0, 3);
    return (
              <section className="py-20 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Popular Events
              </h2>
              <p className="text-gray-600">Trending events that are booking fast</p>
            </div>
            <Link 
              href="/events" 
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All
              <ArrowRight className="size-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/events" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Events
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    )
}