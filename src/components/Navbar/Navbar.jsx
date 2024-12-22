import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="position-sticky w-100 top-0 ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary   py-4 ">
        <div className="container">
          <a className="navbar-brand" href="#">
            Start Bootstrap
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-uppercase"
                  aria-current="page"
                  to={'/Portfoilo'}
                >
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to={'/About'}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to={'/Contact'}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
