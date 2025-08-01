"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const DiamondIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <polygon points="50,0 100,50 50,100 0,50" />
  </svg>
)

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      },
    },
  };

  const features = [
      { text: "No hidden fees", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
      { text: "100% money-back guarantee", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
      { text: "Secure payments", icon: <CheckCircle2 className="h-5 w-5 text-primary" /> },
  ]

  return (
    <section className="relative w-full pt-36 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-particle-pattern [background-position:0_0]"></div>
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-6">
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
             <motion.div 
              className="inline-flex items-center rounded-full bg-card px-3 py-1 text-sm font-medium border border-border"
              variants={itemVariants}
             >
                <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Empowering 100+ Bangladeshi Businesses
            </motion.div>

            <motion.h1 
              className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground"
              variants={itemVariants}
            >
              Your <span className="text-primary">Gateway</span> to <br /> Global Business.
            </motion.h1>
            <motion.p 
              className="max-w-[700px] text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
             We empower Bangladeshi entrepreneurs to break barriers, offering seamless US & UK company formation, international banking, and payment gateway solutions.
            </motion.p>
            <motion.div 
              className="flex flex-col gap-2 min-[400px]:flex-row"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <Link href="#contact">
                      Get Started <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
              </Button>
            </motion.div>
            <motion.div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 pt-4" variants={itemVariants}>
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                        {feature.icon}
                        <span>{feature.text}</span>
                    </div>
                ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
