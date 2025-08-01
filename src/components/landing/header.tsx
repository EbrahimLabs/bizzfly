import { Button } from "@/components/ui/button";
import Link from "next/link";

const BizzFlyLogo = () => (
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M16 0L32 9.2376L24 14.118V23.3556L16 28.2376L8 23.3556V14.118L0 9.2376L16 0Z" fill="currentColor"/>
        <path d="M16 16.5583L24 11.6763V18.4737L16 23.3557L8 18.4737V11.6763L16 16.5583Z" fill="white"/>
        <path d="M16 16.5582L24 21.4402L16 26.3222L8 21.4402L16 16.5582Z" opacity="0.5" fill="white"/>
      </svg>
      <span className="text-xl font-bold font-headline text-foreground">BizzFly</span>
    </Link>
);


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <BizzFlyLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors" prefetch={false}>
            Services
          </Link>
          <Link href="#about" className="text-foreground hover:text-primary transition-colors" prefetch={false}>
            About Us
          </Link>
          <Link href="#faq" className="text-foreground hover:text-primary transition-colors" prefetch={false}>
            FAQ
          </Link>
        </nav>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 transition-transform hover:scale-105">
          <Link href="#contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  );
}
