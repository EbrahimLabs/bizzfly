import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Automatix?",
    answer: "Automatix is a platform designed to help businesses automate their processes, from marketing and sales to operations and customer support, enabling them to scale efficiently.",
  },
  {
    question: "Who is Automatix for?",
    answer: "Automatix is for startups, small to medium-sized businesses, and enterprises looking to streamline their workflows, reduce manual tasks, and drive growth through intelligent automation.",
  },
  {
    question: "What kind of support can I expect?",
    answer: "We offer 24/7 customer support via chat and email. Our dedicated team is always ready to help you with any questions or issues you may encounter while using the platform.",
  },
  {
    question: "Can I integrate Automatix with my existing tools?",
    answer: "Yes, Automatix offers a wide range of integrations with popular tools and platforms. You can connect your favorite apps to create seamless, automated workflows across your entire tech stack.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial so you can explore all of Automatix's features and see how it can benefit your business. No credit card is required to sign up.",
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
                Your questions, answered.
            </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12 space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-secondary/30 border border-border rounded-lg px-6">
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
