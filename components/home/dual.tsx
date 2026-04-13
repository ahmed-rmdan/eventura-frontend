import { ArrowRight, Building2, Users } from "lucide-react";
export function Dual() {
    return (
              <section className="py-20 w-full flex justify-center items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're hosting events or booking them, we've made it simple
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Organizers */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Building2 className="size-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Event Organizers</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Create Your Account</h4>
                    <p className="text-gray-600">Sign up as an organizer and set up your profile in minutes</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">List Your Events</h4>
                    <p className="text-gray-600">Add event details, pricing, and showcase your venues</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Manage Bookings</h4>
                    <p className="text-gray-600">Track reservations and grow your business effortlessly</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2">
                Start Creating Events
                <ArrowRight className="size-5" />
              </button>
            </div>

            {/* For Customers */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="size-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">For Customers</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Browse Events</h4>
                    <p className="text-gray-600">Explore thousands of events across all categories</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Book Instantly</h4>
                    <p className="text-gray-600">Secure your spot with our easy booking process</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="size-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Enjoy Your Event</h4>
                    <p className="text-gray-600">Receive instant confirmation and event updates</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold flex items-center justify-center gap-2">
                Explore Events
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}