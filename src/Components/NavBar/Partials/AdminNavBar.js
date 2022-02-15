import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import ReportsSubMenu from "./SubMenus/ReportsSubMenu";
import EmployeesSubMenu from "./SubMenus/EmployeesSubMenu";
import { Link } from "react-router-dom";
function AdminNavBar() {
  const [reportsSubMenu, setReportsSubMenu] = useState(false);
  const [employeesSubMenu, setEmployeesSubMenu] = useState(false);
  return (
    <label>
      <li className="nav-item pcoded-menu-caption">
        <label>Administration</label>
      </li>
      <li className="nav-item pcoded-hasmenu">
        <Link
          to=""
          className="nav-link "
          onClick={(e) => {
            setEmployeesSubMenu(!employeesSubMenu);
          }}
        >
          <span className="pcoded-micon">
            <FeatherIcon icon="award" />
          </span>
          <span className="pcoded-mtext">Manage Employees</span>
        </Link>
        {employeesSubMenu && <EmployeesSubMenu />}
      </li>
      <li className="nav-item">
        <Link to="" className="nav-link ">
          <span className="pcoded-micon">
            <FeatherIcon icon="list" />
          </span>
          <span className="pcoded-mtext">Clients</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="" className="nav-link ">
          <span className="pcoded-micon">
            <FeatherIcon icon="code" />
          </span>
          <span className="pcoded-mtext">Projects</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="" className="nav-link ">
          <span className="pcoded-micon">
            <FeatherIcon icon="figma" />
          </span>
          <span className="pcoded-mtext">Designations</span>
        </Link>
      </li>
      <li className="nav-item pcoded-hasmenu">
        <Link
          to=""
          className="nav-link"
          onClick={() => setReportsSubMenu(!reportsSubMenu)}
        >
          <span className="pcoded-micon">
            <FeatherIcon icon="briefcase" />
          </span>
          <span className="pcoded-mtext">Reports</span>
        </Link>
        {reportsSubMenu && <ReportsSubMenu />}
      </li>
    </label>
  );
}

export default AdminNavBar;
