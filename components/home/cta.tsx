import { Building2, Users } from "lucide-react";
export default function CTA() {
    return (
              <section className="py-20 w-full bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of organizers and customers already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                <Building2 className="size-5" />
                Become an Organizer
              </button>
              <button className="bg-blue-500/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2">
                <Users className="size-5" />
                Sign Up as Customer
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}