import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building, Globe, Landmark, ShieldCheck, Banknote, Briefcase } from "lucide-react";

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

export default function Services() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Expertise</span>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Experience The Benefits Of Our Expertise
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We provide a complete solution to take your business global, from legal formation to financial freedom.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 transform hover:-translate-y-1 group">
              <CardHeader className="p-6">
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full border-2 border-primary/30 group-hover:border-primary/80 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                  <CardDescription>
                    {service.description}
                  </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
