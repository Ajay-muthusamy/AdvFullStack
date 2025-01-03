import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/FunctionalComponents/Home";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import NavBar from "./components/FunctionalComponents/NavBar";
import About from "./components/FunctionalComponents/About";
import Footer from "./components/FunctionalComponents/Footer";
import Hooks from "./components/FunctionalComponents/Hooks";
import UseRef from "./components/FunctionalComponents/UseRef";
import UseContext from "./components/FunctionalComponents/UseContext";
import UseMemo from "./components/FunctionalComponents/ContextComponents/UseMemo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="useref" element={<UseRef />} />
            <Route path="usecontext" element={<UseContext />} />
            <Route path="use-memo" element={<UseMemo />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
