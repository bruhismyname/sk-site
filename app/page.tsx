import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Schedule from '@/app/components/Schedule';
import Location from '@/app/components/Location';
import Testimonials from '@/app/components/Testimonials';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import BackToTop from '@/app/components/BackToTop';
import CalculatorHPL from '@/app/components/CalculatorHPL'; // Import baru
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CalculatorHPL />
        <About />
        <Services />
        <Schedule />
        <Location />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
