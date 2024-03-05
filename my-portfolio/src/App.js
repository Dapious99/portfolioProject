import Works from "./works/Works";
import './App.css';
import About from './about/About';
import Home from './homepage/Home';
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <About />
          <Works />
     <Home />
     <Navbar />
    </div>
  );
}

export default App;
