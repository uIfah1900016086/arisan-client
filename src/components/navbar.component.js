import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Sistem Pencatatan Arisan
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto ms-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
              Rekap Arisan
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Input Data Arisan
              </Link>
            </li>
             <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Data Peserta Arisan
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/createuser" className="nav-link">
                Input Peserta Arisan
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
