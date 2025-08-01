import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const usps = [
  { text: "Specialized expertise for Bangladeshi clients" },
  { text: "End-to-end service from company formation to compliance" },
  { text: "Fast, hassle-free processes with personalized support" },
  { text: "Transparent pricing and trusted partnerships" },
  { text: "Proven track record with hundreds of satisfied clients" },
  { text: "Local language (Bangla) support" },
];

export default function Usp() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Image
            src="https://placehold.co/550x550.png"
            data-ai-hint="team meeting handshake"
            width={550}
            height={550}
            alt="Why BizzFly"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Your Trusted Partner for Global Expansion
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We empower Bangladeshi businesses to overcome financial barriers and achieve international success with our expert guidance and dedicated support.
              </p>
            </div>
            <ul className="grid gap-4">
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    {usp.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
