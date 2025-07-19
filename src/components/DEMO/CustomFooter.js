"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Rocket, 
  Users, 
  Heart, 
  Star, 
  Mail, 
  Bell,
  ArrowRight,
  Zap,
  Circle,
  Sparkles,
  Globe,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function PreLaunchFooter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 4000);
      setEmail("");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        damping: 25,
        stiffness: 100
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const stats = [
    { 
      value: "2,847", 
      label: "Early Members", 
      icon: Users, 
      color: "from-blue-400 to-cyan-400",
      description: "Growing daily"
    },
    { 
      value: "98%", 
      label: "Love Rate", 
      icon: Heart, 
      color: "from-red-400 to-pink-400",
      description: "From beta users"
    },
    { 
      value: "4.9", 
      label: "Pre-Rating", 
      icon: Star, 
      color: "from-yellow-400 to-orange-400",
      description: "Average score"
    },
    { 
      value: "24/7", 
      label: "Support Ready", 
      icon: Shield, 
      color: "from-green-400 to-emerald-400",
      description: "Always here"
    },
  ];

  const features = [
    { icon: Globe, text: "Global Reach", description: "Connect worldwide" },
    { icon: Zap, text: "Lightning Fast", description: "Instant responses" },
    { icon: TrendingUp, text: "Growth Focused", description: "Scale with us" },
    { icon: Clock, text: "Real-time", description: "Live updates" },
  ];

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full bg-black text-white py-40 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Interactive Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            backgroundPosition: [`0px 0px`, `40px 40px`, `0px 0px`],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Interactive Glow Effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovering ? [1, 1.2, 1] : 1,
            opacity: isHovering ? [0.1, 0.2, 0.1] : 0.05,
          }}
          transition={{
            duration: 2,
            repeat: isHovering ? Infinity : 0,
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            style={{
              left: `${10 + i * 6}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Floating Header Badge */}
        <motion.div 
          variants={itemVariants} 
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-3 border border-white/20 px-6 py-3 rounded-full text-sm font-light mb-12 bg-white/[0.03] backdrop-blur-sm"
            variants={floatingVariants}
            animate="animate"
            whileHover={{ 
              scale: 1.05, 
              borderColor: 'rgba(255,255,255,0.4)',
              boxShadow: '0 0 30px rgba(255,255,255,0.1)'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="tracking-[0.2em] uppercase">Pre-Launch Phase</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Circle className="w-2 h-2 fill-current" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-6xl md:text-8xl font-extralight mb-8 tracking-tight leading-none"
            variants={itemVariants}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: "linear-gradient(90deg, #ffffff 30%, #60a5fa 50%, #ffffff 70%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Future is
            </motion.span>
            <br />
            <motion.span 
              className="font-light"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Almost Here
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed"
            variants={itemVariants}
          >
            Experience the next generation of local commerce
          </motion.p>
        </motion.div>

        {/* Enhanced Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.h3 
            className="text-center text-2xl font-light mb-12 text-white/80"
            variants={itemVariants}
          >
            Launch Countdown
          </motion.h3>
          <div className="grid grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                className="relative"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
              >
                <div className="relative bg-white/[0.02] border border-white/20 rounded-3xl p-6 md:p-8 backdrop-blur-sm overflow-hidden">
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `conic-gradient(from ${index * 90}deg, transparent, rgba(59, 130, 246, 0.3), transparent)`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + index * 2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl md:text-7xl font-extralight text-white mb-3"
                      key={value}
                      initial={{ scale: 1.2, opacity: 0, rotateX: 90 }}
                      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                      transition={{ 
                        duration: 0.6,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {value.toString().padStart(2, '0')}
                    </motion.div>
                    <div className="text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] font-light">
                      {unit}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Stats Grid */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm overflow-hidden group-hover:border-white/30 transition-all duration-500">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center justify-center w-12 h-12 mb-4 mx-auto"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                      </motion.div>
                      
                      <motion.div 
                        className="text-3xl md:text-4xl font-light text-white mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      
                      <div className="text-sm text-white/60 font-light mb-1">
                        {stat.label}
                      </div>
                      
                      <div className="text-xs text-white/40 font-light">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Features Showcase */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <Icon className="w-6 h-6 text-white/80" />
                  </motion.div>
                  <div className="text-sm font-light text-white/80 mb-1">{feature.text}</div>
                  <div className="text-xs text-white/50 font-light">{feature.description}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Email Subscription */}
        <motion.div variants={itemVariants} className="max-w-lg mx-auto mb-20">
          <div className="text-center mb-10">
            <motion.h3 
              className="text-3xl md:text-4xl font-light text-white mb-4"
              variants={itemVariants}
            >
              Join the Revolution
            </motion.h3>
            <p className="text-white/60 text-lg font-light">
              Be among the first to experience the future
            </p>
          </div>
          
          <motion.form 
            onSubmit={handleSubscribe} 
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-20 blur group-hover:opacity-30 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Input
                type="email"
                placeholder="Enter your email for exclusive access"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="relative w-full bg-white/5 border border-white/20 text-white placeholder-white/50 focus:border-white/50 focus:ring-2 focus:ring-white/20 py-6 px-8 rounded-full text-center font-light text-lg backdrop-blur-sm"
                required
              />
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 font-light py-6 rounded-full text-lg transition-all duration-300 group relative overflow-hidden"
                disabled={isSubscribed}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                {isSubscribed ? (
                  <motion.span 
                    className="flex items-center justify-center space-x-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Welcome to the Future!</span>
                  </motion.span>
                ) : (
                  <span className="flex items-center justify-center space-x-3 relative z-10">
                    <span>Secure Your Spot</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                )}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto"
            >
              <Button 
                variant="outline" 
                className="w-full border-white/30 text-white bg-white/5 hover:bg-white/10 px-10 py-4 rounded-full font-light text-lg backdrop-blur-sm group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transform: "translateX(-100%)" }}
                  animate={{ transform: "translateX(100%)" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10">Share the Vision</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto"
            >
              <Button className="w-full bg-gradient-to-r from-white to-gray-100 text-black hover:opacity-90 px-10 py-4 rounded-full font-light text-lg relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Join VIP Access</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Elegant Separator */}
        <motion.div 
          variants={itemVariants} 
          className="flex justify-center mb-16"
        >
          <motion.div 
            className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          />
        </motion.div>

        {/* Sophisticated Brand Section */}
        <motion.div variants={itemVariants} className="text-center">
          <motion.div 
            className="font-extralight text-4xl md:text-5xl text-white mb-4 tracking-[0.3em]"
            animate={{
              textShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 20px rgba(255,255,255,0.1)",
                "0 0 0px rgba(255,255,255,0)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ZEFAZA
          </motion.div>
          <motion.p 
            className="text-white/50 text-lg font-light tracking-[0.1em] mb-8"
            variants={itemVariants}
          >
            Empowering Local Commerce • Launching Soon
          </motion.p>
          
          {/* Social Proof Elements */}
          <motion.div 
            className="flex justify-center items-center space-x-8 text-white/30"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-light">Enterprise Ready</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-light">Global Scale</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-light">Lightning Fast</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Advanced Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-64 bg-gradient-to-t from-white/[0.02] to-transparent blur-3xl" />
    </motion.section>
  );
}
