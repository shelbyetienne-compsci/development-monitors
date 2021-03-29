import React, {useEffect, Component} from "react";
import './style.css';
import {Link} from 'react-router-dom';


function Nav () {

  return (
      <header>
        <div>
          <h2><Link id="title-icon" to="/">Development Monitors</Link></h2>

          <ul>
            <Link className="link" to="/about">
              <li>About</li>
            </Link>

            <Link className="link" to="/projects">
              <li>Projects</li>
            </Link>

            <Link className="link" to="/tools">
              <li>Tools</li>
            </Link>

            <Link className="link" to="/contacts">
              <li>Contact Us</li>
            </Link>

            <Link className="link" to="/signin">
              <li>Sign In</li>
            </Link>
            
          </ul>
        </div>
      </header>
  );
}

export default Nav;