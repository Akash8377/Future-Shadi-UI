import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../features/user/userSlice';
import { toast } from '../../components/Common/Toast';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Get user info directly from Redux store
  const { userInfo } = useSelector(state => state.user);
  const isLoggedIn = !!userInfo; // Simplified login check

  const handleLogout = () => {
    dispatch(clearUser());
    setIsDropdownOpen(false);
    navigate("/");
    toast.success("Logged out successfully!");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="images/logo.svg" alt="Site Logo" />
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
                  Help
                </Link>
              </li>
              
              {isLoggedIn ? (
                <li className="nav-item dropdown">
                  <button
                    className="user-menu-button nav-link dropdown-toggle"
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <span className="user-greeting">
                      Hi, {userInfo.firstName || "User"}{" "}
                      <span className="dropdown-arrow">
                        {isDropdownOpen ? "▲" : "▼"}
                      </span>
                    </span>
                  </button>
                  
                  <div
                    className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                    aria-labelledby="userDropdown"
                  >
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              ) : (
                <li>
                  <Link to="/login">
                    <button className="btn btn-filled" type="button">
                      <img src="images/login-arrow.svg" alt="Login" />
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};  

export default Header;