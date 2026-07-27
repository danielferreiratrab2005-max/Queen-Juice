import { About } from "../components/site/About";
import { Contact } from "../components/site/Contact";
import { Footer } from "../components/site/Footer";
import { Gallery } from "../components/site/Gallery";
import { Header } from "../components/site/Header";
import { Hero } from "../components/site/Hero";
import { Menu } from "../components/site/Menu";
import { OrderBar } from "../components/site/OrderBar";
import { Testimonials } from "../components/site/Testimonials";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";

function Index() {
  return (
    <div className="min-h-screen bg-qj-black">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <OrderBar />
      <WhatsAppFloat />
    </div>
  );
}

export default Index;
