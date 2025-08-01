"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building, Globe, Landmark, ShieldCheck, Banknote, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "US & UK Company Formation",
    description: "Establish your business identity in the world's leading markets. We handle everything from registration to compliance, giving you a credible global presence.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Payment Gateway Setup",
    description: "Access Stripe, PayPal, and more. We navigate the complexities to get your business approved, so you can accept payments from anyone, anywhere.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Business Bank Accounts",
    description: "Open accounts with Mercury, Wise, and other leading platforms. Manage your international funds with ease and get a professional edge.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function Services() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.span variants={itemVariants} className="text-sm font-semibold uppercase tracking-wider text-primary">Our Expertise</motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Experience The Benefits Of Our Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a complete solution to take your business global, from legal formation to financial freedom.
          </motion.p>
        </div>
        <motion.div 
          className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
                <CardHeader className="p-6">
                  <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full border-2 border-primary/30 group-hover:border-primary/80 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
