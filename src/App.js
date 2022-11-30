import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";
import { Tech } from "./components/Tech";

function App() {
  return (
    <div className="App">
      <About />
      <Tech/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
