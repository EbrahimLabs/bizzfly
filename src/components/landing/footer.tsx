import Link from "next/link";
import { Linkedin, Facebook, MessageSquare } from "lucide-react";

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


export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <BizzFlyLogo />
            <p className="text-sm text-muted-foreground">
              Empowering Bangladeshi entrepreneurs to operate globally.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Services</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">US/UK Company Formation</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Payment Gateways</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Business Banking</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Tax & Compliance</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/yourbizzfly" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com/company/76548075" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://wa.me/8801795806651" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground pt-2">Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BizzFly International. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
