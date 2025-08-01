import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Partners from '@/components/landing/partners';
import Services from '@/components/landing/services';
import Usp from '@/components/landing/usp';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import Cta from '@/components/landing/cta';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0,#10132a_0,#000213_65%,#000213_100%)] -z-10" />
      <Header />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Services />
        <Usp />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
