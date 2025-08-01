import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6">
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
              Supercharge your business with AI
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Automatix is the all-in-one platform to automate your marketing, sales, and operations.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
