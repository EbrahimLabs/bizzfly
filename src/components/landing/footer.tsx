import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const AutomatixLogo = () => (
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
       <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
        >
        <path
            d="M24.7333 13.4V8.46667L19.8 3.53334H12.2L7.26662 8.46667V13.4L12.2 18.3333H19.8L24.7333 13.4Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.26662 23.5333L12.2 28.4667H19.8L24.7333 23.5333"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M16 18.3333V28.4667"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12.2 8.46666L7.26662 13.4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M19.8 8.46666L24.7333 13.4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
      <span className="text-2xl font-bold font-headline text-foreground">Automatix</span>
    </Link>
);


export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <AutomatixLogo />
            <p className="text-sm text-muted-foreground">
              Supercharge your business with AI.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Product</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Connect</h4>
            <div className="flex space-x-4">
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Automatix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
