import React from 'react'

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-3">
      <div className="container">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-2 active">
              <a className="nav-link text-secondary" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-secondary" href="#">
                TV Shows
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-secondary" href="#">
                Movies
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-secondary" href="#">
                Recently Added
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-secondary" href="#">
                My List
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
