import React, { useState } from 'react'
import './SinglePageApp.css'
import Home from '../Home/Home'
import About from '../About/About'
import Roadmap from '../Roadmap/Roadmap'
import Purchase from '../Purchase/Purchase'
import Team from '../Team/Team'
import Variants from '../Variants/Variants'
const SinglePage = () => {
  const [showComponent, setShowComponents] = useState(true)

  return (
    <div className="">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <ul>
          <li>
            <a
              href="#home"
              onClick={() => {
                showComponent ? '' : setShowComponents(!showComponent)
              }}
            >
              <h3>Home</h3>
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => {
                showComponent ? '' : setShowComponents(!showComponent)
              }}
            >
              <h3>About</h3>
            </a>
          </li>
          <li>
            <a
              href="#variants"
              onClick={() => {
                console.log('Hello', showComponent)
                showComponent
                  ? setShowComponents(!showComponent)
                  : setShowComponents(showComponent)
              }}
            >
              <h3>Variants</h3>
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              onClick={() => {
                showComponent ? '' : setShowComponents(!showComponent)
              }}
            >
              <h3>Roadmap</h3>
            </a>
          </li>
          <li>
            <a
              href="#purchase"
              onClick={() => {
                showComponent ? '' : setShowComponents(!showComponent)
              }}
            >
              <h3>Purchase</h3>
            </a>
          </li>
          <li>
            <a
              href="#team"
              onClick={() => {
                showComponent ? '' : setShowComponents(!showComponent)
              }}
            >
              <h3>Team</h3>
            </a>
          </li>
        </ul>
      </nav>
      <section id="home">
        <h1>Home</h1>
        {showComponent ? <Home /> : ''}
      </section>
      <section id="about">{showComponent ? <About /> : ''}</section>
      <section id="roadmap">{showComponent ? <Roadmap /> : ''}</section>
      <section id="purchase">{showComponent ? <Purchase /> : ''}</section>
      <section id="team">{showComponent ? <Team /> : ''}</section>
      <section id="variants">{!showComponent ? <Variants /> : ''}</section>
    </div>
  )
}
export default SinglePage
