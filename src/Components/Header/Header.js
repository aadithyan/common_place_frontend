import React from 'react'
import {Dropdown} from 'react-bootstrap';
import avatar from '../../assets/images/user/avatar-1.jpg'
import {Link } from "react-router-dom";

function Header() {
  return (
    <header className="navbar pcoded-header navbar-expand-lg navbar-light">
        <div className="m-header">
            <Link to="" className="mobile-menu" id="mobile-collapse1" href="#"><span></span></Link>
            <Link to="" href="index.html" className="b-brand">
                   <div className="b-bg">
                       <i className="feather icon-trending-up"></i>
                   </div>
                   <span className="b-title">Datta Able</span>
               </Link>
        </div>
        <Link to="" className="mobile-menu" id="mobile-header" href="#">
            <i className="feather icon-more-horizontal"></i>
        </Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li>
                  <Dropdown className="drp-user">
                      <Dropdown.Toggle variant={'link'} id="dropdown-basic">
                      <i className="icon feather icon-settings"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="profile-notification">
                          <div className="pro-head">
                              <img src={avatar} className="img-radius" alt="User Profile" />
                              <span>John Doe</span>
                              <Link to="" href="#" className="dud-logout" title="Logout">
                                  <i className="feather icon-log-out"/>
                              </Link>
                          </div>
                          <ul className="pro-body">
                              <li><Link to="" href="#" className="dropdown-item"><i className="feather icon-settings"/> Settings</Link></li>
                              <li><Link to="" href="#" className="dropdown-item"><i className="feather icon-user"/> Profile</Link></li>
                              <li><Link to="" href="#" className="dropdown-item"><i className="feather icon-more-horizontal"/> Change Password</Link></li>
                              <li><Link to="" href="#" className="dropdown-item"><i className="feather icon-log-out"/> Sign Out</Link></li>
                          </ul>
                      </Dropdown.Menu>
                  </Dropdown>
              </li>
            </ul>
        </div>
    </header>
  )
}

export default Header