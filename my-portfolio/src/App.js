import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Works from "./pages/Works";
import Home from "./pages/Homepage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/about-me" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" element={<Works />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
