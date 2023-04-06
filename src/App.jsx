import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </Router>
  );
}
