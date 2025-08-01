import ContactForm from "./contact-form";

export default function Cta() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Ready to Take Your Business Global?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let's talk about your business goals. Fill out the form below or contact us directly to get a free consultation and get started.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md">
            <ContactForm />
        </div>
      </div>
    </section>
  );
}
