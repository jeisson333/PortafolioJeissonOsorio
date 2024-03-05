import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/UI/Hero";
import Services from "./Components/UI/Services";
import Portfolio from "./Components/UI/Portfolio";

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
      </main>
      <Footer />
    </>
  );
}

export default App;
