import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Kamrul Hasan",
    title: "CEO, StartupBD",
    avatar: "KH",
    image: "https://placehold.co/100x100.png",
    text: "BizzFly made it possible for us to finally access Stripe and global markets. Their end-to-end service is seamless and their support is top-notch. Highly recommended for any Bangladeshi entrepreneur.",
    dataAiHint: "male entrepreneur",
  },
  {
    name: "Ayesha Ahmed",
    title: "Freelance Designer",
    avatar: "AA",
    image: "https://placehold.co/100x100.png",
    text: "As a freelancer, getting an international debit card was a huge challenge. BizzFly handled everything, from company formation to opening a Mercury account. I can now easily receive payments from my international clients.",
    dataAiHint: "female designer",
  },
  {
    name: "Rakib Mahmud",
    title: "Founder, E-commerce Store",
    avatar: "RM",
    image: "https://placehold.co/100x100.png",
    text: "Expanding my e-commerce business globally seemed impossible from Bangladesh. BizzFly's expertise in UK company formation and payment gateways was a game-changer for us. Invaluable service!",
    dataAiHint: "male founder",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real stories from businesses transformed by BizzFly.
            </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/50 border border-border/50 flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
