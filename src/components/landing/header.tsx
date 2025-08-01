import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
      <span className="text-xl font-bold font-headline text-foreground">Automatix</span>
    </Link>
);


export default function Header() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <AutomatixLogo />
        <nav className="hidden md:flex items-center gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="ghost">
                <Link href="#">Log In</Link>
            </Button>
            <Button asChild className="rounded-full px-6 transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Sign Up</Link>
            </Button>
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
              <AutomatixLogo />
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors" prefetch={false}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-4 mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="#">Log In</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="#contact">Sign Up</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
