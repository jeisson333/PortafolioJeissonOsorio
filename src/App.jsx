import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/UI/Hero";
import Services from "./Components/UI/Services";
import Portfolio from "./Components/UI/Portfolio";
import Contact from "./Components/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
