import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              My favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
}

export default Header