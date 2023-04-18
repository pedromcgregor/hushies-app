import React from 'react'
import './SinglePageApp.css'
import Home from '../Home/Home'
import About from '../About/About'
import Roadmap from '../Roadmap/Roadmap'

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
        <h1>Purchase</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>
      <section id="team">
        <h1>Team</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>
      <section id="variants">
        <h1>Variants</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>
    </div>
  )
}
export default SinglePage
