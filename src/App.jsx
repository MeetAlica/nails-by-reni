import FadeInSection from "./util/FadeInSection";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app bg-auto bg-repeat">
      <Navbar />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <Work />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />
    </div>
  );
};

export default App;
