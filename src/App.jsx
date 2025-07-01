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

function App() {
  return (
    <div>
      <Nav/>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/project/education" element={<Education/>} />
          <Route path="/project/livelihood" element={<LivelihoodProgramme/>} />
          <Route path="/project/environment" element={<Environment/>} />
          <Route path="/project/womenempowerment" element={<WomenEmpowerment/>} />
          <Route path="/project/tribalregion" element={<TribalDevelopment/>} />
          <Route path="/project/medical" element={<Medical/>} />
        </Routes>
      
      <Footer/>
    </div>
  )
}

export default App