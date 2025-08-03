"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const usPlans = [
  {
    name: "US Starter",
    price: "$399",
    description: "Perfect for freelancers and small businesses",
    features: [
      "Delaware LLC Formation",
      "EIN (Tax ID) Application",
      "Basic Business Bank Account",
      "Virtual Debit Card",
      "Tax Filing Support",
      "Email Support",
      "Setup within 10 days"
    ],
    cta: "Get Started",
    color: "border-border"
  },
  {
    name: "US Professional",
    price: "$799",
    description: "Ideal for growing businesses and startups",
    features: [
      "Delaware LLC Formation",
      "EIN (Tax ID) Application",
      "Mercury Business Account",
      "Physical + Virtual Cards",
      "Stripe Payment Gateway",
      "Priority Support",
      "Tax & Compliance Package",
      "Setup within 7 days",
      "Dedicated Account Manager"
    ],
    cta: "Get Started",
    color: "border-border"
  },
  {
    name: "US Enterprise",
    price: "$1,299",
    description: "Complete solution for established businesses",
    features: [
      "Multiple LLC Formations",
      "Multiple EIN Applications",
      "Multiple Bank Accounts",
      "Advanced Payment Gateways",
      "Custom Tax Strategy",
      "24/7 Priority Support",
      "Legal Consultation",
      "Setup within 5 days",
      "White-glove Service",
      "Custom Integrations"
    ],
    cta: "Contact Sales",
    color: "border-border"
  }
];

const ukPlans = [
  {
    name: "UK Starter",
    price: "$299",
    description: "Perfect for freelancers and small businesses",
    features: [
      "UK Limited Company Formation",
      "Basic Business Bank Account",
      "Virtual Debit Card",
      "Tax Filing Support",
      "Email Support",
      "Setup within 7 days"
    ],
    cta: "Get Started",
    color: "border-border"
  },
  {
    name: "UK Professional",
    price: "$599",
    description: "Ideal for growing businesses and startups",
    features: [
      "UK Limited Company Formation",
      "Mercury Business Account",
      "Physical + Virtual Cards",
      "Stripe Payment Gateway",
      "Priority Support",
      "Tax & Compliance Package",
      "Setup within 5 days",
      "Dedicated Account Manager"
    ],
    cta: "Get Started",
    color: "border-border"
  },
  {
    name: "UK Enterprise",
    price: "$999",
    description: "Complete solution for established businesses",
    features: [
      "Multiple UK Company Formations",
      "Multiple Bank Accounts",
      "Advanced Payment Gateways",
      "Custom Tax Strategy",
      "24/7 Priority Support",
      "Legal Consultation",
      "Setup within 3 days",
      "White-glove Service",
      "Custom Integrations"
    ],
    cta: "Contact Sales",
    color: "border-border"
  }
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

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isUS, setIsUS] = useState(true);

  const currentPlans = isUS ? usPlans : ukPlans;

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <motion.div 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.span variants={itemVariants} className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold sm:text-5xl font-headline">
            Choose Your Path to Global Success
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Transparent pricing for every stage of your business journey. No hidden fees, no surprises.
          </motion.p>
        </div>

        {/* Toggle Switch */}
        <motion.div 
          className="flex justify-center items-center space-x-4 mt-8"
          variants={itemVariants}
        >
          <span className="text-sm font-medium text-muted-foreground">USA</span>
          <button
            onClick={() => setIsUS(!isUS)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isUS ? 'translate-x-1' : 'translate-x-6'
              }`}
            />
          </button>
          <span className="text-sm font-medium text-muted-foreground">UK</span>
        </motion.div>

        <motion.div 
          className="mx-auto grid gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
          key={`${isUS ? 'us' : 'uk'}-plans`}
        >
          {currentPlans.map((plan, index) => (
            <motion.div 
              key={`${isUS ? 'us' : 'uk'}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring", 
                stiffness: 300, 
                damping: 10 
              }}
              className="relative group"
            >
              
              <Card className="h-full flex flex-col relative overflow-hidden border border-border/50 shadow-lg bg-gradient-to-br from-card via-card to-card/90 transition-all duration-300">
                
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-muted/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-muted via-muted/60 to-muted/40" />
                
                <CardHeader className="text-center pb-8 relative z-10">
                  <CardTitle className="text-2xl font-headline bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2 text-lg">one-time</span>
                  </div>
                  <CardDescription className="text-base mt-4 text-muted-foreground/80">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col relative z-10">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3 group/item">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors duration-200">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full h-14 text-base font-bold transition-all duration-500 ease-out bg-gradient-to-r from-primary via-primary/90 to-primary hover:from-primary/80 hover:via-primary hover:to-primary/80 shadow-lg hover:shadow-2xl hover:scale-105 transform border-0 text-primary-foreground relative overflow-hidden group/btn before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-[100%] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:translate-x-[-100%] after:transition-transform after:duration-700 after:delay-200 after:ease-out hover:after:translate-x-[100%]"
                    onClick={() => setSelectedPlan(plan.name)}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                  </Button>
                </CardContent>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-muted/40 via-muted/20 to-muted/10" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We're here to help.
          </p>
          <Button variant="outline" size="lg">
            Contact Us for Custom Pricing
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
} 