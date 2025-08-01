import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do I need a US or UK company?",
    answer: "A US or UK company provides international credibility, allows you to access global payment gateways like Stripe and PayPal, and opens doors to international business banking, which are often restricted for businesses based in Bangladesh.",
  },
  {
    question: "Can I get a physical debit card for international payments?",
    answer: "Yes, our business banking solution partners like Mercury, Wise, and Payoneer provide international debit cards (both virtual and physical) that you can use for online payments, such as running Facebook/Google ads or paying for SaaS subscriptions.",
  },
  {
    question: "How long does the company formation process take?",
    answer: "The timeline can vary, but we strive for a fast and hassle-free process. UK company formation is typically faster, often completed within a few days. US company formation, including obtaining an EIN, can take a few weeks. We guide you through every step to ensure it's as quick as possible.",
  },
  {
    question: "What documents do I need to provide?",
    answer: "Generally, you will need to provide a valid passport, proof of address, and some basic information about your business. We will provide you with a detailed checklist and guide you through the entire document collection process.",
  },
  {
    question: "Do you provide support in Bangla?",
    answer: "Yes! We offer personalized customer support in both English and Bangla to ensure clear communication and to better assist our Bangladeshi clients.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our services. Can't find what you're looking for? Contact us.
            </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card px-4 rounded-lg mb-2 shadow-sm hover:shadow-md transition-shadow">
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
