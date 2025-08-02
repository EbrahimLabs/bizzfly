"use client";
import { motion } from "framer-motion";

export default function Partners() {
    const partnerNames = ["Stripe", "PayPal", "Mercury", "Relay", "Wise", "Payoneer", "Airwallex"];
    const duplicatedPartners = [...partnerNames, ...partnerNames];

    return (
        <section className="py-8 md:py-12 lg:py-16">
            <motion.div 
                className="container mx-auto px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                        Trusted partnerships with international banks and payment providers
                    </h3>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex animate-infinite-scroll">
                            {duplicatedPartners.map((name, index) => (
                                <span key={index} className="mx-4 md:mx-6 lg:mx-8 flex-shrink-0 text-2xl font-semibold text-muted-foreground/60 font-headline grayscale hover:grayscale-0 transition-all">
                                    {name}
                                </span>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-background to-transparent pointer-events-none from-10%"/>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-background to-transparent pointer-events-none from-10%"/>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
