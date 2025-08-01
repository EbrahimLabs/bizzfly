import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const usps = [
  { text: "Specialized expertise for Bangladeshi clients." },
  { text: "End-to-end service from company formation to compliance." },
  { text: "Fast, hassle-free processes with personalized support." },
  { text: "Transparent and competitive pricing." },
];

export default function Usp() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Image
            src="https://placehold.co/600x600.png"
            data-ai-hint="global business meeting"
            width={600}
            height={600}
            alt="Why BizzFly"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
          <div className="space-y-6">
             <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why BizzFly</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              We Drive Businesses To The Forefront
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             We remove barriers for Bangladeshi clients, allowing them to receive payments from customers worldwide, gain international credibility, and operate without limitations.
            </p>
            <ul className="grid gap-4">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary/20 text-primary rounded-full p-1 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">
                    {usp.text}
                  </span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground group">
                <Link href="#contact">
                    Learn More <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
