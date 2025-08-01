import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Frequently Asked Questions
            </h2>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12 space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
