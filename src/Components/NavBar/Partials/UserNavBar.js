import React, { useState } from "react";
import { Link } from "react-router-dom";
import TimeSheetSubMenu from "./SubMenus/TimeSheetSubMenu";
function UserNavBar() {
  const [subTimesheetMenu, setSubTimeSheetmenu] = useState(false);
  return (
    <label>
      <li className="nav-item pcoded-menu-caption">
        <label>My Views</label>
      </li>
      <li className="nav-item" >
        <Link to="" className="nav-link ">
          <span className="pcoded-micon">
            <i className="feather icon-globe"></i>
          </span>
          <span className="pcoded-mtext">My Clients</span>
        </Link>
      </li>
      <li
        data-username="form elements advance componant validation masking wizard picker select"
        className="nav-item"
      >
        <Link to="" className="nav-link ">
          <span className="pcoded-micon">
            <i className="feather icon-file-text"></i>
          </span>
          <span className="pcoded-mtext">My Projects</span>
        </Link>
      </li>
      <li
        data-username="Table bootstrap datatable footable"
        className="nav-item"
      >
        <Link to="" className="nav-link ">
          <span className="pcoded-micon">
            <i className="feather icon-check-circle"></i>
          </span>
          <span className="pcoded-mtext">My Tasks</span>
        </Link>
      </li>
      <li className="nav-item pcoded-hasmenu">
        <Link
          to=""
          className="nav-link "
          onClick={(e) => {
            setSubTimeSheetmenu(!subTimesheetMenu);
          }}
        >
          <span className="pcoded-micon">
            <i className="feather icon-server"></i>
          </span>
          <span className="pcoded-mtext">Timesheets</span>
        </Link>
        {subTimesheetMenu && <TimeSheetSubMenu />}
      </li>
      <li
        data-username="Table bootstrap datatable footable"
        className="nav-item"
      >
        <Link to="" className="nav-link ">
          <span className="pcoded-micon">
            <i className="feather icon-clock"></i>
          </span>
          <span className="pcoded-mtext">Checkin / Checkout</span>
        </Link>
      </li>
    </label>
  );
}

export default UserNavBar;
