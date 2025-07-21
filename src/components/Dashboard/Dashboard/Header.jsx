import React, { useState, useRef, useEffect } from "react";
import './styles.css'

const Header = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const helpRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setShowHelp(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg topbar">
      <div className="container-fluid px-4 px-md-4">
        <a className="navbar-brand" href="/">
          <img src="/images/logo.svg" alt="Shaadi" className="brand-logo" />
        </a>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#shaadiNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="shaadiNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 text-center">
            <li className="nav-item">
              <a className="nav-link active text-white" href="#" data-bs-toggle="tooltip" title="My Shaadi Dashboard">My Shaadi</a>
            </li>
            <li className="nav-item position-relative">
              <a className="nav-link text-white" href="#" data-bs-toggle="tooltip" title="View Matches">
                Matches
                <span className="badge bg-white text-dark rounded-pill position-absolute top-0 start-100 translate-middle">968</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" data-bs-toggle="tooltip" title="Search Profiles">Search</a>
            </li>
            <li className="nav-item position-relative">
              <a className="nav-link text-white" href="#" data-bs-toggle="tooltip" title="Inbox Messages">
                Inbox
                <span className="badge bg-white text-dark rounded-pill position-absolute top-0 start-100 translate-middle">1</span>
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 ms-lg-3">
            <button className="btn btn-sm btn-outline-light btn-upgrade d-flex align-items-center gap-1">
              <i className="bi bi-gem"></i> Upgrade Now
            </button>

            {/* Help Dropdown */}
            <div className="dropdown" ref={helpRef}>
              <a
                className="text-white text-decoration-none dropdown-toggle"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowHelp(!showHelp);
                  setShowProfile(false);
                }}
              >
                Help
              </a>
              {showHelp && (
                <ul className="dropdown-menu dropdown-menu-end show">
                  <li><a className="dropdown-item" href="#">FAQ</a></li>
                  <li><a className="dropdown-item" href="#">Contact Support</a></li>
                </ul>
              )}
            </div>

            <div className="v-divider d-none d-lg-block"></div>

            {/* Profile Dropdown */}
            <div className="dropdown" ref={profileRef}>
              <a
                className="d-flex align-items-center dropdown-toggle text-white"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowProfile(!showProfile);
                  setShowHelp(false);
                }}
              >
                <img src="/images/user.png" className="rounded-circle" alt="user" height="32" />
              </a>
              {showProfile && (
                <ul className="dropdown-menu dropdown-menu-end show">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
