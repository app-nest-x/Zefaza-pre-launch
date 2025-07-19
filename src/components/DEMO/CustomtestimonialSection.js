"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This concept is exactly what our local market needs! I enrolled immediately and can't wait for the launch.",
    author: "Ravi Kumar",
    role: "Freelance Electrician, Warangal",
    rating: 5,
    color: "from-blue-500 to-purple-600",
    bgColor: "bg-blue-50",
  },
  {
    quote: "Finally, a platform that truly understands local businesses! Signed up as soon as I heard about it.",
    author: "Ayesha Shaik",
    role: "Beauty Salon Owner, Kazipet",
    rating: 5,
    color: "from-green-500 to-teal-600",
    bgColor: "bg-green-50",
  },
  {
    quote: "The idea of smart QR systems for restaurants is brilliant! Waiting eagerly for the launch to transform our ordering experience.",
    author: "Mohammed Irfan",
    role: "Restaurant Manager, Warangal",
    rating: 5,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50",
  },
  {
    quote: "I love the vision of supporting local service providers! Already registered and telling all my colleagues about this.",
    author: "Swetha Reddy",
    role: "Home Tutor, Hanamkonda",
    rating: 5,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
  },
  {
    quote: "This platform could revolutionize how we connect with customers! Enrolled immediately and counting days until launch.",
    author: "Sandeep Naik",
    role: "Plumbing Services Owner",
    rating: 5,
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
  },
  {
    quote: "The concept of organizing freelance work in one place sounds amazing! Can't wait to see it in action.",
    author: "Vinay Verma",
    role: "AC Repair Technician",
    rating: 5,
    color: "from-teal-500 to-green-600",
    bgColor: "bg-teal-50",
  },
  {
    quote: "As a retailer, I'm excited about the potential of this technology to connect with customers. Eagerly waiting for launch!",
    author: "Rekha Jain",
    role: "Retail Business Owner",
    rating: 5,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
  },
];

// Word-by-word animation component
const AnimatedQuote = ({ text, delay = 0 }) => {
  const words = text.split(" ");
  
  return (
    <motion.p 
      className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20,
              filter: "blur(8px)",
            },
            visible: { 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

// Floating background elements
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gray-200 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Increased time for word animation

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

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  return (
    <motion.section 
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <FloatingElements />
      
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Words of <span className="font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Appreciation</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Real stories from our community of sellers and service providers
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Main testimonial card */}
        <div className="relative h-96 perspective-1000">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.6 },
              }}
              className="absolute inset-0"
            >
              <Card className={`h-full ${currentTestimonial.bgColor} border-2 border-gray-100 shadow-2xl relative overflow-hidden`}>
                {/* Gradient overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${currentTestimonial.color} opacity-10 rounded-bl-full`} />
                
                {/* Floating quote icon */}
                <motion.div
                  className="absolute top-6 left-6"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Quote className={`w-8 h-8 text-gray-400 fill-current`} />
                </motion.div>

                <CardContent className="p-8 h-full flex flex-col justify-center relative z-10">
                  {/* Animated quote text */}
                  <AnimatedQuote text={currentTestimonial.quote} delay={0.5} />

                  {/* Author info with stagger animation */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    <div>
                      <motion.h4 
                        className="font-semibold text-lg text-gray-900"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                      >
                        {currentTestimonial.author}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-600 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 2 }}
                      >
                        {currentTestimonial.role}
                      </motion.p>
                    </div>

                    {/* Animated stars */}
                    <motion.div 
                      className="flex space-x-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ 
                            opacity: i < currentTestimonial.rating ? 1 : 0.3,
                            scale: 1,
                            rotate: 0,
                          }}
                          transition={{ 
                            duration: 0.3,
                            delay: 2.4 + i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white border-gray-200 hover:bg-gray-50 shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Testimonial indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${currentTestimonial.color}` 
                    : "bg-gray-300"
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={{ 
                  scale: index === currentIndex ? 1.3 : 1,
                }}
              />
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white border-gray-200 hover:bg-gray-50 shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Auto-play toggle */}
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isAutoPlaying ? "⏸ Pause" : "▶ Play"} auto-rotation
          </button>
        </motion.div>
      </div>

      {/* Background gradient orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-48 h-48 bg-purple-200 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </motion.section>
  );
}
