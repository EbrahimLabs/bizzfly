import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const BizzFlyLogo = () => (
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-2xl font-bold font-headline text-foreground">BizzFly</span>
    </Link>
);


export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <BizzFlyLogo />
            <p className="text-sm text-muted-foreground">
              Your Gateway to Global Business.
            </p>
             <div className="flex space-x-4">
              <Link href="https://facebook.com/yourbizzfly" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/76548075" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Services</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">US/UK Company Formation</Link></li>
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Payment Gateway</Link></li>
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Business Banking</Link></li>
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Tax & Compliance</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BizzFly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
