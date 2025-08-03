"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <motion.div 
        className="container px-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-card border p-8 md:p-12">
            <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Let's Talk</span>
                <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl md:text-5xl font-headline">
                    Let's Turn Your Dream Into Reality
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Ready to take the next step? Contact us today to discuss your project and see how we can help you achieve your goals.
                </p>
                <Button asChild size="lg" className="mt-8 rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground group">
                    <Link href="#">
                        Get Started <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
