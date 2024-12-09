import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PricingTabs from './components/sections/PricingTabs';
import Testimonials from './components/sections/Testimonials';
import Benefits from './components/sections/Benefits';
import Cta from './components/sections/Cta';
import Faq from './components/sections/Faq';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PricingTabs />
        <Testimonials />
        <Benefits />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;