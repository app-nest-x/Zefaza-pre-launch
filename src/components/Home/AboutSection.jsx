"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Globe, TrendingUp, Clock, Award, Users, Zap } from "lucide-react";
const stats = [{
  icon: Target,
  number: "100%",
  label: "Local Focus"
}, {
  icon: Rocket,
  number: "2024",
  label: "Launch Year"
}, {
  icon: Globe,
  number: "Smart",
  label: "Cities Ready"
}, {
  icon: TrendingUp,
  number: "∞",
  label: "Growth Potential"
}];
const values = [{
  icon: Clock,
  title: "Speed & Efficiency",
  description: "Lightning-fast deliveries and instant connections between buyers and sellers in your neighborhood."
}, {
  icon: Award,
  title: "Quality Assurance",
  description: "Every seller is verified and every product is quality-checked to ensure the best experience."
}, {
  icon: Users,
  title: "Community First",
  description: "Building stronger local communities by empowering neighborhood businesses and connections."
}, {
  icon: Zap,
  title: "Innovation",
  description: "Cutting-edge technology that makes local commerce smarter, faster, and more accessible."
}];
const milestones = [{
  year: "2024 Q1",
  event: "Concept & Research",
  status: "completed"
}, {
  year: "2024 Q2",
  event: "Platform Development",
  status: "completed"
}, {
  year: "2024 Q3",
  event: "Beta Testing",
  status: "in-progress"
}, {
  year: "2024 Q4",
  event: "Public Launch",
  status: "upcoming"
}];
export default function AboutSection() {
  return <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Reimagining
              <span className="font-medium gradient-text"> Local Commerce</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                At Zefaza, we believe that the future of commerce lies in strengthening local communities. Our platform bridges the gap between technology and human connection, creating meaningful economic opportunities at the neighborhood level.
              </p>
              
              <p>
                We're building more than just a marketplace—we're creating an ecosystem where local businesses thrive, communities grow stronger, and every transaction contributes to a more sustainable future.
              </p>
              
              <p>
                From trusted seller verification to smart logistics, every feature is designed with one goal: empowering hyperlocal commerce for the digital age.
              </p>
            </div>

            <motion.div className="mt-8" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} viewport={{
            once: true
          }}>
              <button className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                Learn More About Our Vision
              </button>
            </motion.div>
          </motion.div>

          {}
          <motion.div className="grid grid-cols-2 gap-6" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            {stats.map((stat, index) => {
            const Icon = stat.icon;
            return <motion.div key={stat.label} className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4 + index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              y: -5
            }}>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-light text-gray-900 mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>;
          })}
          </motion.div>
        </div>

        {}
        <motion.div className="mb-24" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Zefaza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
            const Icon = value.icon;
            return <motion.div key={value.title} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} whileHover={{
              y: -5
            }}>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>;
          })}
          </div>
        </motion.div>

        {}
        <motion.div className="mb-24" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Our Journey
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in building the future of hyperlocal commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => <motion.div key={milestone.year} className="relative" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <div className={`p-6 rounded-2xl border ${milestone.status === 'completed' ? 'bg-green-50 border-green-200' : milestone.status === 'in-progress' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`w-3 h-3 rounded-full mb-4 ${milestone.status === 'completed' ? 'bg-green-500' : milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'}`} />
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    {milestone.year}
                  </div>
                  <div className="font-semibold text-gray-900">
                    {milestone.event}
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>

        {}
        <motion.div className="text-center" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} viewport={{
        once: true
      }}>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              "To create a world where every neighborhood is a thriving digital marketplace, where local businesses flourish, and where technology serves to strengthen—not replace—human connections."
            </p>
            <div className="mt-6 text-sm text-gray-500 font-medium">
              — Zefaza Industries Team
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}