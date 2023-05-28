import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import PropertiesInner from "./pages/properties/PropertiesInner";
import Agents from './pages/agents/Agents'
import AgentsInner from './pages/agents/AgentsInner'
import Blogs from './pages/blogs/Blogs'
import { Provider } from "./context/createContext"
import useContextUpdateFromSocket from "./context/useContextUpdate"

export default function App() {
  const { context } = useContextUpdateFromSocket()

  return (
    <Router>
       <Provider value={{context}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />}/>
          <Route path='/properties/:id' element={<PropertiesInner />} />
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<AgentsInner />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
       </Provider>
    </Router>
  );
}
