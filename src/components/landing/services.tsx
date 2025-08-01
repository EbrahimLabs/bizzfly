"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Globe, DollarSign, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Globe className="h-8 w-8 text-white" />,
    title: "US/UK Company Formation",
    description: "Establish your business identity in the world's leading markets. We handle everything from registration to compliance, giving you a credible global presence.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-white" />,
    title: "Payment Gateway Setup",
    description: "Access Stripe, PayPal, and more. We navigate the complexities to get your business approved, so you can accept payments from anyone, anywhere.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-white" />,
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

const Particle = ({ delay }: { delay: number }) => {
  const size = Math.random() * 1.5 + 0.5;
  const x = Math.random() * 100;

  return (
    <motion.div
      className="absolute bottom-0 bg-white/50 rounded-full"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
      }}
      animate={{
        y: '-200px',
      }}
      transition={{
        delay,
        duration: Math.random() * 2 + 3,
        ease: "linear",
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 15 }).map((_, index) => (
      <Particle key={index} delay={index * 0.35} />
    ))}
  </div>
);


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
          className="mx-auto grid items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300 group h-full flex flex-col">
                <CardHeader className="p-8">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg bg-[#050505] bg-grid p-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505)] z-10"></div>
                      <ParticleBackground />
                      <motion.div
                        className="relative z-20 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-orange-400 shadow-lg"
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut"
                        }}
                      >
                        {service.icon}
                      </motion.div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4 flex-grow flex flex-col">
                    <CardTitle className="font-headline text-2xl mb-2 text-left">{service.title}</CardTitle>
                    <CardDescription className="text-left">
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
