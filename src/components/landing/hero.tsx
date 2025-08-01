"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

  return (
    <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-6">
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <motion.span 
              className="text-sm font-semibold uppercase tracking-wider text-primary"
              variants={itemVariants}
            >
              Your Global Business Partner
            </motion.span>
            <motion.h1 
              className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground"
              variants={itemVariants}
            >
              Global Ambition. <br />
              <span className="text-primary">Amplified By BizzFly.</span>
            </motion.h1>
            <motion.p 
              className="max-w-[700px] text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
             We empower Bangladeshi entrepreneurs to transcend borders. Form your international company, unlock global payment gateways, and operate your business worldwide—all from Bangladesh.
            </motion.p>
            <motion.div 
              className="flex flex-col gap-2 min-[400px]:flex-row mt-4"
              variants={itemVariants}
            >
              <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Link href="#contact">Get Started Now <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
