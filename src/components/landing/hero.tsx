
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, TrendingUp, CalendarDays, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState, useEffect } from "react";

const USFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rounded-sm" viewBox="0 0 7410 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path fill="#fff" d="M0 450h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0zm0 600h7410v300H0z"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><path fill="#fff" d="m148.2 175 45.39-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.39-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.39-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.39-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.39-140.71 45.4 140.71-118.84-87.02h146.9zM444.6 175l45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zM741 350l45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zM1037.4 350l45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zM1333.8 175l45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zM1630.2 175l45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zM1926.6 350l45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zM2223 350l45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zM2519.4 175l45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.39 140.71-118.84-87.02h146.9zM2815.8 175l45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9zm0 350 45.4-140.71 45.4 140.71-118.84-87.02h146.9z"/></svg>
);

const UKFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rounded-sm" viewBox="0 0 1200 600"><path fill="#012169" d="M0 0h1200v600H0z"/><path fill="#FFF" d="m50 0 400 200-400 200V0zm700 0 400 200-400 200V0zM0 50l600 200-600 200V50zm1200 0L600 250l600 200V50z"/><path fill="none" stroke="#FFF" strokeWidth="60" d="M0 0L600 300M1200 0L600 300"/><path fill="none" stroke="#C8102E" strokeWidth="40" d="M0 0L600 300M1200 0L600 300"/><path fill="none" stroke="#FFF" strokeWidth="100" d="M0 200h1200M0 400h1200M400 0v600M800 0v600"/><path fill="none" stroke="#C8102E" strokeWidth="60" d="M0 200h1200M0 400h1200M400 0v600M800 0v600"/></svg>
);


const EmpoweredCard = () => (
    <motion.div
        className="hidden lg:flex absolute top-20 -left-20 w-72 -rotate-3"
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100 }}
    >
        <div className="bg-card/80 backdrop-blur-lg border border-border/30 rounded-2xl p-4 shadow-xl w-full">
            <div className="flex items-center gap-3">
                <div className="bg-primary/20 text-primary p-2 rounded-full">
                    <Users className="h-5 w-5" />
                </div>
                <p className="font-semibold text-foreground">Businesses Empowered</p>
            </div>
            <p className="text-3xl font-bold text-foreground my-2">100+</p>
            <div className="flex items-center">
                <div className="flex -space-x-2">
                    <Avatar className="h-6 w-6 border-2 border-card">
                        <AvatarImage src="https://placehold.co/32x32.png" data-ai-hint="person" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-6 w-6 border-2 border-card">
                        <AvatarImage src="https://placehold.co/32x32.png" data-ai-hint="person" />
                        <AvatarFallback>B</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-6 w-6 border-2 border-card">
                        <AvatarImage src="https://placehold.co/32x32.png" data-ai-hint="person" />
                        <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                </div>
                <p className="text-xs text-muted-foreground ml-2">+97 more</p>
            </div>
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <LineChart className="h-4 w-4 text-green-500" />
              <span>15% growth this month</span>
            </div>
        </div>
    </motion.div>
);

const FormationCard = () => (
    <motion.div
        className="hidden lg:flex absolute top-20 -right-20 w-72 rotate-3"
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 100 }}
    >
        <div className="bg-card/80 backdrop-blur-lg border border-border/30 rounded-2xl p-4 shadow-xl w-full flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary/20 text-primary p-2 rounded-full">
                      <CalendarDays className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-foreground">Company Formation</p>
              </div>
              <p className="text-3xl font-bold text-foreground">Under 7 Days</p>
            </div>
            <div className="border-t border-border/50 pt-3">
                <p className="text-xs font-semibold text-muted-foreground mb-2">US & UK Incorporation</p>
                <div className="flex items-center gap-2">
                    <USFlag />
                    <UKFlag />
                </div>
            </div>
        </div>
    </motion.div>
);

const Particle = ({ delay }: { delay: number }) => {
  const [style, setStyle] = useState({});
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // This code now runs only on the client
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    setStyle({
      width: `${size}px`,
      height: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
    });
    setDuration(Math.random() * 3 + 2); // 2 to 5 seconds
  }, []); // Empty dependency array ensures this runs once on mount

  if (!duration) return null;

  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={style}
      animate={{
        opacity: [0, 1, 0], // Twinkle effect
      }}
      transition={{
        delay,
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

const HeroParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 100 }).map((_, index) => (
      <Particle key={index} delay={index * 0.1} />
    ))}
  </div>
);


export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headline = {
    words: [
      {
        text: "Your",
        className: "text-foreground",
      },
      {
        text: "Gateway",
        className: "text-foreground",
      },
      {
        text: "to",
        className: "text-foreground",
      },
      {
        text: "Global",
        className: "text-primary",
      },
      {
        text: "Business.",
        className: "text-primary",
      },
    ],
  };

  const features = [
      { text: "No hidden fees" },
      { text: "100% money-back guarantee" },
      { text: "Secure payments" },
  ]

  return (
    <section className="relative w-full pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden bg-grid">
      <HeroParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background to-80%"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
            <EmpoweredCard />
            <FormationCard />
            <motion.div 
              className="flex flex-col justify-center items-center space-y-8 text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="inline-flex items-center rounded-full bg-background px-3 py-1 text-sm font-medium border border-border"
                variants={itemVariants}
              >
                  <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Empowering 100+ Bangladeshi Businesses
              </motion.div>

              <motion.h1 
                className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl font-headline"
                variants={containerVariants}
              >
                <span className="sr-only">Your Gateway to Global Business.</span>
                <span className="block">
                  {headline.words.slice(0, 3).map((word, i) => (
                    <motion.span key={i} className={`inline-block mr-3 lg:mr-5 ${word.className}`} variants={itemVariants}>
                      {word.text}
                    </motion.span>
                  ))}
                </span>
                <span className="block">
                  {headline.words.slice(3).map((word, i) => (
                    <motion.span key={i} className={`inline-block mr-3 lg:mr-5 ${word.className}`} variants={itemVariants}>
                      {word.text}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
              <motion.p 
                className="max-w-[700px] text-muted-foreground md:text-lg"
                variants={itemVariants}
              >
              We empower Bangladeshi entrepreneurs to break barriers, offering seamless US & UK company formation, international banking, and payment gateway solutions.
              </motion.p>
              <motion.div 
                className="flex flex-col gap-2 min-[400px]:flex-row"
                variants={itemVariants}
              >
                <Button asChild size="lg" className="rounded-md px-6 text-base font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground group">
                    <Link href="#contact">
                        Get Started <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
              </motion.div>
              <motion.div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4" variants={itemVariants}>
                  {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{feature.text}</span>
                      </div>
                  ))}
              </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

    