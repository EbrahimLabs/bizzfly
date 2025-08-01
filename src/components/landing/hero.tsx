import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
              Your Gateway to Global Business
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              BizzFly helps Bangladeshi entrepreneurs access international markets with company formation, payment gateways, and business banking solutions.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base transition-transform hover:scale-105">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary rounded-full px-8 text-base transition-transform hover:scale-105">
                <Link href="#contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x400.png"
            data-ai-hint="global business collaboration"
            width={600}
            height={400}
            alt="Global business collaboration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  );
}
