"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Joining this platform helped me reach more customers in my area. My monthly bookings nearly doubled!",
    author: "Ravi Kumar",
    role: "Freelance Electrician, Warangal",
    rating: 5,
  },
  {
    quote:
      "Thanks to this service, managing orders and customer requests has become effortless. It feels like I’ve hired a digital assistant!",
    author: "Ayesha Shaik",
    role: "Beauty Salon Owner, Kazipet",
    rating: 5,
  },
  {
    quote:
      "As a restaurant manager, their smart QR system reduced order confusion and boosted efficiency. Customers love the menu experience!",
    author: "Mohammed Irfan",
    role: "Manager, Arabian Knights Restaurant",
    rating: 5,
  },
  {
    quote:
      "I’ve tried many platforms, but this one genuinely supports local service providers with real leads and fast payments.",
    author: "Swetha Reddy",
    role: "Home Tutor, Hanamkonda",
    rating: 4,
  },
  {
    quote:
      "Our plumbing services saw a 40% growth in appointments last quarter after we joined. It's a no-brainer for any local business.",
    author: "Sandeep Naik",
    role: "Founder, AquaFix Plumbing",
    rating: 5,
  },
  {
    quote:
      "This solution brought structure to my freelance gigs. Now I get jobs, track earnings, and receive reviews in one place.",
    author: "Vinay Verma",
    role: "Freelancer - AC Repair",
    rating: 4,
  },
  {
    quote:
      "We’ve been in retail for over a decade, but this is the first time tech actually helped us connect better with walk-in customers.",
    author: "Rekha Jain",
    role: "Owner, Jain Garments",
    rating: 5,
  },
];


export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getTestimonialIndex = (offset) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  const variants = {
    center: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      x: 0,
      zIndex: 2,
    },
    sideLeft: {
      opacity: 0.5,
      scale: 0.85,
      filter: "blur(3px)",
      x: -150,
      zIndex: 1,
    },
    sideRight: {
      opacity: 0.5,
      scale: 0.85,
      filter: "blur(3px)",
      x: 150,
      zIndex: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      scale: 0.7,
      filter: "blur(6px)",
      x: direction > 0 ? -300 : 300,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center shadow-2xl justify-center p-6 relative overflow-hidden">
      {/* Decorative SVG Background */}
      <svg
        className="absolute inset-0 opacity-10"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 360C200 500 400 200 720 360C1040 520 1240 220 1440 360"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
        <circle cx="200" cy="100" r="50" fill="white" fillOpacity="0.2" />
        <circle cx="1240" cy="600" r="70" fill="white" fillOpacity="0.2" />
      </svg>

      <div className="max-w-6xl w-full relative z-10">
        <motion.h1
          className="text-5xl font-extrabold text-black mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          Words of Appreciation
        </motion.h1>
        <div className="flex justify-center items-center gap-6">
          {[-1, 0, 1].map((offset) => (
            <AnimatePresence key={offset} mode="wait" custom={direction}>
              <motion.div
                custom={direction}
                variants={variants}
                initial={
                  offset === 0
                    ? "center"
                    : offset < 0
                    ? "sideLeft"
                    : "sideRight"
                }
                animate={
                  offset === 0
                    ? "center"
                    : offset < 0
                    ? "sideLeft"
                    : "sideRight"
                }
                exit="exit"
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  delay: Math.abs(offset) * 0.1,
                }}
                className="w-1/3"
              >
                <Card className="bg-white text-black border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[
                        ...Array(
                          testimonials[getTestimonialIndex(offset)].rating
                        ),
                      ].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-lg italic mb-6 text-gray-800">
                      "{testimonials[getTestimonialIndex(offset)].quote}"
                    </p>
                    <p className="font-semibold text-xl">
                      {testimonials[getTestimonialIndex(offset)].author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[getTestimonialIndex(offset)].role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="bg-white text-black border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
          >
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.div>
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="bg-white text-black border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
          >
            <motion.div
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.div>
          </Button>
        </div>
      </div>
    </div>
  );
}
