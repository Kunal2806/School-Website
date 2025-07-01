import Hero from "./components/Hero"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Support from "./components/Support"
import About from "./components/About"
import Contact from "./components/Contact"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Nav/>
      
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      
      <Footer/>
    </div>
  )
}

export default App