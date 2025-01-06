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
import Login from "./components/FunctionalComponents/Login";
import Register from "./components/FunctionalComponents/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} /> 

          <Route exact path="/navbar" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="navbar/gallery" element={<Gallery />} />
            <Route path="navbar/about" element={<About />} />
            <Route path="navbar/contact" element={<Contact />} />
            <Route path="navbar/hooks" element={<Hooks />} />
            <Route path="navbar/useref" element={<UseRef />} />
            <Route path="navbar/usecontext" element={<UseContext />} />
            <Route path="navbar/use-memo" element={<UseMemo />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
