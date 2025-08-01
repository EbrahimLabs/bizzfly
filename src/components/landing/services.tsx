import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, Bot, BarChart, Settings, ShoppingBag, MessageCircle } from "lucide-react";

const services = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and build complex workflows with our intuitive drag-and-drop builder.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Powered Assistants",
    description: "Leverage our intelligent chatbots and assistants to provide instant support and handle customer queries.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Data & Analytics",
    description: "Gain valuable insights from your data with our powerful analytics and reporting tools.",
  },
  {
    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
    title: "E-commerce Automation",
    description: "Streamline your online store operations, from inventory management to order fulfillment.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Marketing Automation",
    description: "Create and manage automated email campaigns, social media posts, and targeted ads.",
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Custom Integrations",
    description: "Connect Automatix with your favorite tools and platforms using our flexible API and webhooks.",
  },
];

export default function Services() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            Unlock the Power of Automation
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover a comprehensive suite of features designed to help you build, manage, and scale your business with ease.
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
