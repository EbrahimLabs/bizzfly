import Image from "next/image";
import { Check } from "lucide-react";

const usps = [
  { text: "Seamlessly integrate with your existing tools and workflows." },
  { text: "Build powerful automations with our no-code, visual editor." },
  { text: "Leverage AI to make smarter, data-driven decisions." },
  { text: "Scale your operations with a platform built for growth." },
];

export default function Usp() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              How It Works
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             Get up and running with Automatix in just a few simple steps. Connect your apps, build your workflows, and let the automation begin.
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
          </div>
           <Image
            src="https://placehold.co/600x400.png"
            data-ai-hint="workflow automation dashboard"
            width={600}
            height={400}
            alt="How it works"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
        </div>
      </div>
    </section>
  );
}
