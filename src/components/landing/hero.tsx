import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6">
          <div className="flex flex-col justify-center items-center space-y-6 text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Your Global Business Partner</span>
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
              Global Ambition. <br />
              <span className="text-primary">Amplified By BizzFly.</span>
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
             We empower Bangladeshi entrepreneurs to transcend borders. Form your international company, unlock global payment gateways, and operate your business worldwide—all from Bangladesh.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Link href="#contact">Get Started Now <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
