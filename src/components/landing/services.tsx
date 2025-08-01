import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Globe, Landmark, ShieldCheck, Banknote, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "US & UK Company Formation",
    description: "Register LLCs in the US or companies in the UK with full compliance support.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Payment Gateway Setup",
    description: "Open international payment gateways like Stripe and PayPal for your business.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Business Bank Accounts",
    description: "Access global banking solutions with international debit cards for all your needs.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Tax & Compliance",
    description: "We support you with tax filing and ongoing compliance for your US & UK companies.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "International Debit Cards",
    description: "Obtain international debit cards for ads, SaaS subscriptions, and other payments.",
  },
  {
    icon: <Banknote className="h-8 w-8 text-primary" />,
    title: "Global Payment Solutions",
    description: "Receive payments from customers worldwide without financial restrictions.",
  },
];

export default function Services() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Unlock Your Global Potential
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover a comprehensive suite of services designed to help you build, manage, and scale your international business from Bangladesh.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                 <div className="bg-background p-3 rounded-full border border-border">
                   {service.icon}
                 </div>
                <div className="grid gap-1">
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
