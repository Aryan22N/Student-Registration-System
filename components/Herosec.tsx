"use client";

import { motion } from "framer-motion";
import { QrCode, Users, CheckCircle, Shield, Zap, Calendar } from "lucide-react";

export default function Herosec() {
  const features = [
    { icon: QrCode, text: "One QR Verification", desc: "Single QR handles everything" },
    { icon: Users, text: "Smart Team Management", desc: "Handle replacements & optional slots" },
    { icon: CheckCircle, text: "Real-time Verification", desc: "Instant status updates" },
    { icon: Shield, text: "No Duplicate Entries", desc: "Fraud prevention built-in" },
  ];

  return (
    <div className="relative mx-auto my-7 flex max-w-7xl flex-col items-center justify-center">
      {/* Decorative Borders */}
      <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
      </motion.div>

      {/* Hero Content */}
      <div className="px-4 py-10 md:py-20">
        {/* Animated Title */}
        <h1 className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-bold text-slate-800 md:text-5xl lg:text-[89px] dark:text-slate-100">
          {"Seamless Event Entry with QR Verification"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-medium text-primary/90 dark:text-primary/80"
        >
          <Zap className="inline size-4 mr-2" />
          Smart QR System for College Events  
        </motion.p>
        
        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative z-10 mx-auto max-w-3xl py-4 text-center text-xl font-normal text-neutral-700 dark:text-neutral-300"
        >
          Replace messy Google Forms and manual Excel checks with our all-in-one platform. 
          Handle <span className="font-semibold text-primary">on-spot registrations</span>, 
          <span className="font-semibold text-primary"> team replacements</span>, and 
          <span className="font-semibold text-primary"> optional members</span> — all through a single QR code.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="relative z-10 mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="rounded-xl border border-border/40 bg-background/50 p-4 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="rounded-lg bg-primary/10 p-3 mb-3">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{feature.text}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Animated CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group w-64 transform rounded-xl bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="size-5" />
              Create Your First Event
            </span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-64 transform rounded-xl border-2 border-primary/30 bg-background/80 px-8 py-4 font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:shadow-lg"
          >
            <span className="flex items-center justify-center gap-2">
              <Users className="size-5" />
              Start Exploring
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="relative z-10 mt-12"
        >
          <div className="rounded-2xl border border-border/30 bg-gradient-to-br from-background to-accent/5 p-8 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">90%</div>
                <div className="text-sm text-muted-foreground">Faster Verification</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Manual Errors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Team Size Flexibility</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2-Way</div>
                <div className="text-sm text-muted-foreground">Excel + DB Sync</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Animated Preview Container */}
         <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2.4 }}
            className="mt-6 overflow-hidden rounded-xl border border-border/40 bg-gradient-to-br from-background to-accent/10"
          >
       <div className="p-1">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                alt="Event verification dashboard preview"
                className="aspect-[16/9] h-auto w-full rounded-lg object-cover"
                height={800}
                width={1200}
              />
            </div>
            </motion.div>
      </div>
    </div>
  );
}