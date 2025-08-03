"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why do I need a US or UK company?",
    answer: "A foreign company gives you access to global payment gateways like Stripe and PayPal, international banking, and enhances your business's credibility, which is crucial for working with international clients.",
  },
  {
    question: "Can I get a physical debit card?",
    answer: "Yes, our partner banks like Mercury, Relay, and Wise provide international debit cards that you can use for online payments, ad campaigns, and other business expenses worldwide.",
  },
  {
    question: "Who is BizzFly for?",
    answer: "BizzFly is for Bangladeshi freelancers, startups, e-commerce businesses, agencies, and any entrepreneur who wants to operate globally, receive international payments, and overcome local financial restrictions.",
  },
  {
    question: "How long does the process take?",
    answer: "The timeline varies, but we prioritize a fast and hassle-free process. Company formation and bank account setup are typically completed within a few weeks, depending on the country and services chosen.",
  },
  {
    question: "What kind of support can I expect?",
    answer: "We offer end-to-end support in both English and Bangla. Our team provides personalized guidance through every step, from company formation to ongoing compliance, ensuring you are never alone.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <motion.div 
        className="container mx-auto max-w-4xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.span variants={itemVariants} className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold sm:text-5xl font-headline">
                Frequently Asked Questions
            </motion.h2>
        </div>
        <motion.div
          variants={containerVariants}
        >
          <Accordion type="single" collapsible className="w-full mt-12 space-y-2">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
