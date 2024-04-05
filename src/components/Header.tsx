import { Link } from "react-router-dom";
import "../style/_Header.scss";

import React from 'react';


import { HiddenAdminButton } from "./HiddenAdminButton";


const Header: React.FC = () => (
  <header className="header">
    <HiddenAdminButton />
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/booking" className="nav-link">
            Booking
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
          </li>
      </ul>
    </nav>
  </header>
);

export default Header;
