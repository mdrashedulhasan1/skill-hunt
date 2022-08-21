import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-uppercase fs-3" to="/home">Skill Hunt</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link fs-5 active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;