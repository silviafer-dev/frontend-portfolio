import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Tech } from "./components/Tech";
import { IoIosArrowUp } from "react-icons/io";
import { Footer } from "./components/Footer";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {showTopBtn && (
          <IoIosArrowUp className="scrollToTop" onClick={goToTop} />
      )}
      <Header />
      <About />
      <Tech />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
