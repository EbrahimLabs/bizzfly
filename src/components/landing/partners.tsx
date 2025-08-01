export default function Partners() {
    const partnerNames = ["Stripe", "PayPal", "Mercury", "Relay", "Wise", "Payoneer", "Airwallex"];

    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                        Integrated with leading global platforms
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12 lg:gap-x-16">
                        {partnerNames.map((name) => (
                            <span key={name} className="text-2xl font-semibold text-muted-foreground/80 font-headline grayscale hover:grayscale-0 transition-all">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
