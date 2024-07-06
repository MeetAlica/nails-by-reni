import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app bg-auto bg-repeat">
      <Navbar />
      <Hero />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
