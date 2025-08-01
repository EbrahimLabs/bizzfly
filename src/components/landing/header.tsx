"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const BizzFlyLogo = () => (
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-bold font-headline text-primary">BizzFly</span>
    </Link>
);


export default function Header() {
  const navLinks = [
    { href: "#features", label: "Services" },
    { href: "#about", label: "Why Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <motion.div 
        className="bg-card/60 backdrop-blur-lg rounded-full border border-border/30 shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <BizzFlyLogo />
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" style={{ '--tw-gradient-from': '#E87811' } as React.CSSProperties}></div>
                 <Button asChild className="relative rounded-full px-6 transition-transform hover:scale-105 group bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="#contact">Let's Talk <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
                </Button>
            </div>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <div className="flex flex-col gap-6 p-6">
                <BizzFlyLogo />
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4 mt-auto">
                  <Button asChild className="w-full">
                    <Link href="#contact">Let's Talk</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
