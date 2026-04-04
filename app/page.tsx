import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { Products } from '@/components/sections/products';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';
import { Contact } from '@/components/sections/contact';
import { Gallery } from '@/components/sections/gallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      {/* <Testimonials /> */}
      <Gallery/>
      {/* <CTA /> */}
      <Contact />
      <Footer />
    </main>
  );
}
