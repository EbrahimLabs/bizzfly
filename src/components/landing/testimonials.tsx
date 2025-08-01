import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Innovate Inc.",
    avatar: "SJ",
    image: "https://placehold.co/100x100.png",
    text: "Automatix has revolutionized our operations. The time we've saved on manual tasks is incredible, allowing us to focus on what truly matters - innovation and growth. A must-have tool for any modern business.",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director, ScaleUp",
    avatar: "MC",
    image: "https://placehold.co/100x100.png",
    text: "The marketing automation features are a game-changer. We've seen a 200% increase in lead conversion since implementing Automatix. The platform is intuitive, powerful, and the support is outstanding.",
  },
  {
    name: "Jessica Rodriguez",
    title: "Founder, Creative Solutions",
    avatar: "JR",
    image: "https://placehold.co/100x100.png",
    text: "As a small business owner, Automatix has been invaluable. It's like having an extra team member dedicated to efficiency. I can't imagine running my business without it anymore. Highly recommended!",
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
                Real stories from businesses transformed by Automatix.
            </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/50 border border-border/50 flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
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
