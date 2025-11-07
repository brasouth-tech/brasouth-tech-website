import BenefitsSection from "./components/BenefitsSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";
import "./styles/globals.scss";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <TestimonialsSection />
      <BenefitsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
