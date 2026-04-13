import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Event } from "../../types/event";
import { ImageWithFallback } from "../other/ImageWithFallback";
interface EventCardProps {
  event: Event;
}
export function EventCard({ event }: EventCardProps) {
      const availableSpots = event.capacity - event.booked;
  const isAlmostFull = availableSpots <= event.capacity * 0.2;
    return(
    <Link
      href={`/event/${event.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {event.category}
          </span>
        </div>
        {isAlmostFull && (
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
              Almost Full
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="size-4 flex-shrink-0" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="size-4 flex-shrink-0" />
            <span className="text-sm">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="size-4 flex-shrink-0" />
            <span className="text-sm">{event.time} • {event.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="size-4 flex-shrink-0" />
            <span className="text-sm">
              {availableSpots} of {event.capacity} spots available
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              ${event.price.toLocaleString()}
            </span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </Link>
    )
}