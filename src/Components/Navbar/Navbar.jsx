import React from "react";
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Indhu</div>
        <span>Toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:"none"}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonals</li>
          </ul>
        </div>
        <button className="button n-button">
            Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
