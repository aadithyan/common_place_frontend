import React from "react";
import FeatherIcon from "feather-icons-react";
import AdminNavBar from "./Partials/AdminNavBar";
import UserNavBar from "./Partials/UserNavBar";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
function NavBar() {
  return (
    <nav className="pcoded-navbar">
      <div className="navbar-wrapper">
        <div className="navbar-brand header-logo">
          <Link to="/dashboard" href="index.html" className="b-brand">
            <div className="b-bg">
              <i className="feather icon-trending-up"></i>
            </div>
            <span className="b-title">Common Place</span>
          </Link>
          <a className="mobile-menu" id="mobile-collapse" href="#">
            <span></span>
          </a>
        </div>
        <div className="navbar-content scroll-div">
          <PerfectScrollbar>
            <ul className="nav pcoded-inner-navbar">
              <li className="nav-item pcoded-menu-caption">
                <label>Navigation</label>
              </li>
              <li
                data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                className="nav-item active"
              >
                <Link to="/dashboard" className="nav-link ">
                  <span className="pcoded-micon">
                    <FeatherIcon icon="home" />
                  </span>
                  <span className="pcoded-mtext">Dashboard</span>
                </Link>
              </li>
              <AdminNavBar />
              <UserNavBar />
            </ul>
          </PerfectScrollbar>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
