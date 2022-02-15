import React from "react";
import { Link } from "react-router-dom";
function ReportsSubMenu() {
  return (
    <ul className="pcoded-submenu">
      <li className="">
        <Link to="" className="">
          Employee Allocations
        </Link>
      </li>
      <li className="">
        <Link to="" className="">
          Timesheets Report
        </Link>
      </li>
      <li className="">
        <Link to="" className="">
          User Checkin Reports
        </Link>
      </li>
    </ul>
  );
}

export default ReportsSubMenu;
