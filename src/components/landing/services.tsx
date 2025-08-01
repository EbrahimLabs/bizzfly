import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building2, Landmark, Wallet, CreditCard, BookUser, Settings2 } from "lucide-react";

const services = [
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "US Company Formation",
    description: "Register LLCs in the United States, including EIN application, registered agent service, and compliance support.",
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "UK Company Formation",
    description: "Establish companies in the United Kingdom, handling registration, registered office address, and ongoing compliance.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "Payment Gateway Setup",
    description: "Guidance on opening international payment gateways like Stripe and PayPal, not directly available in Bangladesh.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Business Bank Accounts",
    description: "Open accounts with global platforms like Mercury, Relay, and Wise, including international debit cards.",
  },
  {
    icon: <BookUser className="h-8 w-8 text-primary" />,
    title: "Tax Filing & Compliance",
    description: "We support clients with tax filing and ongoing compliance requirements for their US and UK companies.",
  },
  {
    icon: <Settings2 className="h-8 w-8 text-primary" />,
    title: "Other Supporting Services",
    description: "Additional services to help clients maintain and grow their international businesses, tailored to specific needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-semibold">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Everything You Need to Go Global
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From company formation to global banking, we provide end-to-end solutions to help your business thrive internationally.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-col items-center text-center gap-4 p-6">
                <div className="bg-primary/10 p-3 rounded-full">
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
