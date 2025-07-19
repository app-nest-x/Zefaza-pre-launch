"use client";

import { motion } from "framer-motion";
import { Eye, Zap, MapPin, Coins, Calendar, Bell, Navigation, CheckCircle } from "lucide-react";
const providerFeatures = [{
  title: "Digital Visibility",
  description: "Customers can instantly find and book your service with one scan — no calls needed.",
  icon: Eye,
  color: "text-green-600",
  bgColor: "bg-green-50"
}, {
  title: "Instant Booking Alerts",
  description: "As soon as a request is made, you're notified instantly to act fast — like Rapido.",
  icon: Zap,
  color: "text-blue-600",
  bgColor: "bg-blue-50"
}, {
  title: "Real-Time Dispatch",
  description: "Once accepted, you head to the customer's location immediately — no waiting, no delays.",
  icon: Navigation,
  color: "text-purple-600",
  bgColor: "bg-purple-50"
}, {
  title: "Zero Commission",
  description: "We don't take a cut. You keep 100% of what you earn. Just pay-as-you-go.",
  icon: Coins,
  color: "text-yellow-600",
  bgColor: "bg-yellow-50"
}];
const howServiceWorks = [{
  step: "01",
  title: "Customer Books Instantly",
  description: "They choose a service provider nearby and book immediately — no scheduling.",
  icon: Calendar,
  color: "text-blue-600"
}, {
  step: "02",
  title: "You Get Instant Notification",
  description: "You receive a real-time alert with job details in your dashboard.",
  icon: Bell,
  color: "text-green-600"
}, {
  step: "03",
  title: "Reach Customer Quickly",
  description: "You accept the job and immediately proceed to the customer's location.",
  icon: MapPin,
  color: "text-purple-600"
}, {
  step: "04",
  title: "Deliver & Get Paid",
  description: "Provide the service, mark it complete, and receive payment instantly.",
  icon: CheckCircle,
  color: "text-orange-600"
}];
const providerBeliefs = [{
  title: "Be Fast. Be First.",
  description: "The fastest responders win more jobs — build your reputation with speed.",
  icon: Zap,
  color: "text-blue-600"
}, {
  title: "Local Hero, Digital Power",
  description: "With QR + real-time bookings, you're always one tap away from new income.",
  icon: Eye,
  color: "text-green-600"
}, {
  title: "Earn What You Deserve",
  description: "No middlemen. No cuts. 100% of your service charges are yours.",
  icon: Coins,
  color: "text-yellow-600"
}, {
  title: "Join the Movement",
  description: "Be a proud part of Warangal's fastest-growing on-demand service network.",
  icon: Navigation,
  color: "text-purple-600"
}];
const container = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
const CustomServiceProviderSection = () => {
  return <motion.div className="min-h-screen bg-white py-24 px-6 md:px-16 lg:px-24" variants={container} initial="hidden" whileInView="visible" viewport={{
    once: true
  }}>
      {}
      <motion.div variants={item} className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
          For <span className="font-medium text-green-600">Service Providers</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Join our on-demand service network and connect with customers instantly
        </p>
      </motion.div>

      {}
      <motion.div variants={item} className="max-w-6xl mx-auto mb-24">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
          Everything You Need to Succeed
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {providerFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return <motion.div key={index} variants={item} whileHover={{
            y: -5
          }} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>;
        })}
        </div>
      </motion.div>

      {}
      <motion.div variants={item} className="max-w-6xl mx-auto mb-24">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
          How Service Booking Works
        </h3>
        <div className="relative">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {howServiceWorks.map((step, index) => {
            const Icon = step.icon;
            return <motion.div key={index} variants={item} className="relative">
                  <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="text-sm font-bold text-gray-400 mb-2">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {}
                  {index < howServiceWorks.length - 1 && <>
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-300 via-green-400 to-green-300 transform -translate-y-1/2 z-10"></div>
                      <div className="hidden lg:block absolute top-1/2 -right-2 w-2 h-2 bg-green-400 rounded-full transform -translate-y-1/2 z-20"></div>
                    </>}
                </motion.div>;
          })}
          </div>
          
          {}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent transform -translate-y-1/2 -z-10"></div>
        </div>
      </motion.div>

      {}
      <motion.div variants={item} className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
          Why Service Providers Love Zefaza
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {providerBeliefs.map((belief, index) => {
          const Icon = belief.icon;
          return <motion.div key={index} variants={item} whileHover={{
            y: -5
          }} className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon className={`w-6 h-6 ${belief.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                  {belief.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {belief.description}
                </p>
              </motion.div>;
        })}
        </div>
      </motion.div>

      {}
      <motion.div variants={item} className="text-center mt-20">
        <div className="max-w-2xl mx-auto bg-green-50 rounded-3xl border border-green-100 p-12">
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Start Earning More Today
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Join hundreds of service providers who are growing their income with Zefaza
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors shadow-sm">
            Become a Service Provider
          </button>
        </div>
      </motion.div>
    </motion.div>;
};
export default CustomServiceProviderSection;