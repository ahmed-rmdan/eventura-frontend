import { DollarSign, Shield, TrendingUp, Zap } from "lucide-react";
export default function Features() {
    return (
              <section className="py-20 w-full flex justify-center items-center bg-gray-50">
        <div className="flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in the events industry
            </p>
          </div>

          <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="size-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Booking</h3>
              <p className="text-gray-600">Real-time availability and instant booking confirmations</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="size-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and secure payment processing for all transactions</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="size-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">Track your performance with detailed insights and reports</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="size-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Low Fees</h3>
              <p className="text-gray-600">Competitive pricing with transparent fee structure</p>
            </div>
          </div>
        </div>
      </section>
    )
}