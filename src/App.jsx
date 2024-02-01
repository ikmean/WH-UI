import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import Home from './pages/home/Home'
import PropertiesInner from './pages/properties/PropertiesInner'
import AgentsPage from './pages/agents/Agents'
import AgentsInner from './pages/agents/AgentsInner'
import Blogs from './pages/blogs/Blogs'
import BlogsInner from './pages/blogs/BlogsInner'
import { Provider } from './context/createContext'
import useContextUpdateFromSocket from './context/useContextUpdate'
import PropertiesPage from './pages/properties/Properties'
import DevelopersPage from './pages/developers/DevelopersPage'
import DeveloperInnerPage from './pages/developers/DeveloperInnerPage'
import 'leaflet/dist/leaflet.css'

export default function App() {
  const { context } = useContextUpdateFromSocket()

  return (
    <Router>
      <Provider value={{ context }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/properties' element={<PropertiesPage />} />
          <Route path='/properties/:id' element={<PropertiesInner />} />
          <Route path='/developers' element={<DevelopersPage />} />
          <Route path='/developers/:id' element={<DeveloperInnerPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/agents' element={<AgentsPage />} />
          <Route path='/agents/:id' element={<AgentsInner />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogsInner />} />
        </Routes>
        <Footer />
      </Provider>
    </Router>
  )
}
