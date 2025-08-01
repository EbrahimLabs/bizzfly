import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "A. Rahman",
    title: "Founder, Tech Innovators",
    avatar: "AR",
    text: "BizzFly made setting up our US company a breeze. Their team is knowledgeable and supportive, handling everything from paperwork to bank accounts. Highly recommended for any Bangladeshi entrepreneur looking to go global.",
  },
  {
    name: "Fatima Chowdhury",
    title: "Freelance Designer",
    avatar: "FC",
    text: "Accessing Stripe was a game-changer for my freelance business. BizzFly's expertise was invaluable. The process was fast and completely hassle-free. I can finally receive international payments without any issues!",
  },
  {
    name: "S. Ahmed",
    title: "E-commerce Store Owner",
    avatar: "SA",
    text: "The BizzFly team is incredibly professional. They helped me set up my UK company and a Wise business account, which opened up so many opportunities for my e-commerce store. Their support is top-notch.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Loved by Entrepreneurs Across Bangladesh
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our clients have to say about our services and their success stories.
            </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-2 border-transparent hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
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
