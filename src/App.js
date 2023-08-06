import Analytics from "./components/Analytics/Analytics";
import CardsSection from "./components/CardsSection/CardsSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import NewsLetter from "./components/NewsLetter/NewsLetter";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Analytics />
      <NewsLetter />
      <CardsSection />
      <Footer />
    </div>

  );
}

export default App;
