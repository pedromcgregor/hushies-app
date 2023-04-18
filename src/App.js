import React from 'react'
import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Navbar from './components/Navbar/Navbar'
// import Variants from './components/Variants/Variants'
// import Roadmap from './components/Roadmap/Roadmap'
// import Purchase from './components/Purchase/Purchase'
// import Team from './components/Team/Team'
import SinglePage from './components/SinglePage/SinglePageApp'
// import NavBar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <SinglePage />
    </>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/home" element={<Home />} />
    //     <Route index element={<Home />} />
    //     <Route path="#about" element={<About />} />
    //     <Route path="/variants" element={<Variants />} />
    //     <Route path="/roadmap" element={<Roadmap />} />
    //     <Route path="/purchase" element={<Purchase />} />
    //     <Route path="/team" element={<Team />} />
    //     <Route path="/s" element={<SinglePage />} />
    //   </Routes>
    // </BrowserRouter>
  )
}
export default App
// https://reactrouter.com/en/main/router-components/hash-router
