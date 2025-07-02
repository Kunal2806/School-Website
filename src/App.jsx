import { Routes, Route } from "react-router-dom"

import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Support from "./components/Support"
import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/projectDescription/Education"
import LivelihoodProgramme from "./components/projectDescription/Livelihood"
import Environment from "./components/projectDescription/Environment"
import WomenEmpowerment from "./components/projectDescription/WomenEmpower"
import TribalDevelopment from "./components/projectDescription/TribalRegion"
import Medical from "./components/projectDescription/Medical"
import News from "./components/Media/News"
import Gallery from "./components/Media/Gallery"
import Admin from "./components/Media/Admin"

function App() {
  return (
    <div>
      <Nav/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/livelihood" element={<LivelihoodProgramme/>} />
          <Route path="/environment" element={<Environment/>} />
          <Route path="/womenempowerment" element={<WomenEmpowerment/>} />
          <Route path="/tribalregion" element={<TribalDevelopment/>} />
          <Route path="/medical" element={<Medical/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      
      <Footer/>
    </div>
  )
}

export default App