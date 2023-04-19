import React from 'react'
import './SinglePageApp.css'
import Home from '../Home/Home'
import About from '../About/About'
import Roadmap from '../Roadmap/Roadmap'
import Purchase from '../Purchase/Purchase'
import Team from '../Team/Team'
import Variants from '../Variants/Variants'

const SinglePage = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <ul>
          <li>
            <a href="#home">
              <h3>Home</h3>
            </a>
          </li>

          <li>
            <a href="#about">
              <h3>About</h3>
            </a>
          </li>
          <li>
            <a href="#variants">
              <h3>Variants</h3>
            </a>
          </li>
          <li>
            <a href="#roadmap">
              <h3>Roadmap</h3>
            </a>
          </li>
          <li>
            <a href="#purchase">
              <h3>Purchase</h3>
            </a>
          </li>
          <li>
            <a href="#team">
              <h3>Team</h3>
            </a>
          </li>
        </ul>
      </nav>
      <section id="home">
        <h1>Home</h1>

        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="purchase">
        <Purchase />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="variants">
        <Variants />
      </section>
    </div>
  )
}
export default SinglePage
