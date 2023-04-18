import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Hushies</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-link active">
                <Link to="/home">Home</Link>
              </li>

              <li className="nav-link">
                <Link to="#about">About</Link>
              </li>

              <li className="nav-link">
                <Link to="#variants">Variants</Link>
              </li>

              <li className="nav-link">
                <Link to="#roadmap">Roadmap</Link>
              </li>

              <li className="nav-link">
                <Link to="/SinglePage/#purchase">Purchase</Link>
              </li>

              <li className="nav-link">
                <Link to="/#team">Team</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
