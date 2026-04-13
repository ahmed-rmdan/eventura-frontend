import { ArrowRight, Building2, Calendar, Sparkles } from "lucide-react";
export default function Hero(){
    return (
              <section className="relative w-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white ">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="size-5 text-yellow-300" />
              <span className="text-sm font-medium">Multi-Organizer Event Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Eventura
              </span>
              Create & Discover Amazing Events
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
              The ultimate platform connecting event organizers with customers. 
              Host events or book your next unforgettable experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                <Building2 className="size-5" />
                Become an Organizer
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/30 transition-all flex items-center gap-2">
                <Calendar className="size-5" />
                Browse Events
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 mt-16 pt-16 border-t border-white/20">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-200 text-sm md:text-base">Active Organizers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">2,000+</div>
                <div className="text-blue-200 text-sm md:text-base">Events Hosted</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-200 text-sm md:text-base">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}