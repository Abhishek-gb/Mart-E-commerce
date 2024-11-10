import React from 'react';
import Ait from "../Images/achieversIT.png"; 
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Ait} alt="ait" width="100%" height="50" /> 
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-dark" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/Shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/Cart">
               Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
              <FaUser />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/Cart">
              <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
