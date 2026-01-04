import { LanguageProvider } from './context/LanguageContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainingPrograms from './components/TrainingPrograms';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Affiliations from './components/Affiliations';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="antialiased text-white overflow-x-hidden relative">
        {/* Noise Overlay */}
        <div className="bg-noise"></div>
        
        <TopBar />
        <Navbar />
        <Hero />
        <TrainingPrograms />
        <About />
        <Features />
        <Testimonials />
        <Affiliations />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
