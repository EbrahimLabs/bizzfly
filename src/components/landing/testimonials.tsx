"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

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
  {
    name: "Sarah Johnson",
    title: "Digital Marketing Consultant",
    avatar: "SJ",
    image: "https://placehold.co/100x100.png",
    text: "BizzFly helped me establish my international presence. Their UK company formation service was smooth, and now I can accept payments from clients worldwide. Game-changing for my consulting business!",
    dataAiHint: "female consultant",
  },
  {
    name: "Mohammed Ali",
    title: "Tech Startup Founder",
    avatar: "MA",
    image: "https://placehold.co/100x100.png",
    text: "Setting up our international payment infrastructure was our biggest challenge. BizzFly's expertise in Stripe integration and UK company formation made it all possible. Highly recommended!",
    dataAiHint: "male tech founder",
  },
  {
    name: "Fatima Rahman",
    title: "Content Creator",
    avatar: "FR",
    image: "https://placehold.co/100x100.png",
    text: "As a content creator, I needed to monetize globally. BizzFly's services helped me set up proper business infrastructure and payment systems. Now I can focus on creating great content!",
    dataAiHint: "female creator",
  },
  {
    name: "David Chen",
    title: "SaaS Founder",
    avatar: "DC",
    image: "https://placehold.co/100x100.png",
    text: "BizzFly's end-to-end solution for international business setup was exactly what we needed. From UK incorporation to payment processing, they handled everything professionally.",
    dataAiHint: "male saas founder",
  },
  {
    name: "Nadia Khan",
    title: "E-commerce Entrepreneur",
    avatar: "NK",
    image: "https://placehold.co/100x100.png",
    text: "Expanding my online store globally was a dream until I found BizzFly. Their expertise in international business setup and payment gateways made my global expansion a reality.",
    dataAiHint: "female entrepreneur",
  },
  {
    name: "Ahmed Hassan",
    title: "Freelance Developer",
    avatar: "AH",
    image: "https://placehold.co/100x100.png",
    text: "BizzFly helped me establish a proper business structure for my freelance work. Now I can accept international payments seamlessly and focus on delivering quality code.",
    dataAiHint: "male developer",
  },
  {
    name: "Lisa Thompson",
    title: "Online Course Creator",
    avatar: "LT",
    image: "https://placehold.co/100x100.png",
    text: "Creating and selling online courses globally required proper business infrastructure. BizzFly made it all possible with their comprehensive international business setup services.",
    dataAiHint: "female educator",
  },
  {
    name: "Omar Farooq",
    title: "Digital Agency Owner",
    avatar: "OF",
    image: "https://placehold.co/100x100.png",
    text: "Running a digital agency with international clients was challenging until BizzFly helped us set up proper business and payment infrastructure. Now we can scale globally!",
    dataAiHint: "male agency owner",
  },
  {
    name: "Emma Wilson",
    title: "Consultant & Coach",
    avatar: "EW",
    image: "https://placehold.co/100x100.png",
    text: "BizzFly's services transformed my coaching business. I can now work with clients worldwide and receive payments seamlessly. Their support team is exceptional!",
    dataAiHint: "female coach",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <Card className="bg-card border-border flex flex-col h-[320px] min-w-[350px] mx-4">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-primary fill-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.text}"</p>
      <div className="flex items-center gap-4 pt-4 border-t border-border/50 mt-auto">
        <Avatar className="h-12 w-12 flex-shrink-0">
          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-lg">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="w-full px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.span variants={itemVariants} className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold sm:text-5xl font-headline">
            Trusted By Businesses Like Yours
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Real stories from businesses transformed by BizzFly.
          </motion.p>
        </div>

        {/* First Row - Moving Right */}
        <div className="pt-12 pb-6 overflow-hidden w-full">
          <div 
            className="flex"
            style={{
              animation: 'scroll-right 40s linear infinite',
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`top-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="pb-6 overflow-hidden w-full">
          <div 
            className="flex"
            style={{
              animation: 'scroll-left 40s linear infinite',
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`bottom-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${testimonials.length * 350}px);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(-${testimonials.length * 350}px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
