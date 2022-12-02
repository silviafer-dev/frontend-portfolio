import { useEffect } from "react";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Tech } from "./components/Tech";
import { IoIosArrowUp } from "react-icons/io";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="App">
      <button
        className="scrollToTop"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <IoIosArrowUp  />
      </button>
      <Header />
      <About />
      <Tech />
      <Portfolio />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
