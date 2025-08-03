import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
<<<<<<< HEAD
import Pricing from '@/components/landing/pricing';
=======
>>>>>>> f7cbe365829eb7a9272277ceb5fdefdd587b5f06
import Usp from '@/components/landing/usp';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';
import Partners from '@/components/landing/partners';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Services />
<<<<<<< HEAD
        <Pricing />
=======
>>>>>>> f7cbe365829eb7a9272277ceb5fdefdd587b5f06
        <Usp />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
