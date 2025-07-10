import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
   <section className="header">
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand" to="/">
        {" "}
        <img src="images/logo.svg" alt=""/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              {" "}
              Help
            </Link>
          </li>
          <li>
            <Link to="login">
            <button className="btn btn-filled" type="button">
              <img src="images/login-arrow.svg" alt=""/>
              Login
            </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>

  )
}

export default Header
