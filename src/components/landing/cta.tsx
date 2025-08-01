import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Ready to Take Your Business Global?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of Bangladeshi entrepreneurs scaling new heights with BizzFly. Get started today.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-8 text-lg font-semibold transition-transform hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#">Get Started for Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
