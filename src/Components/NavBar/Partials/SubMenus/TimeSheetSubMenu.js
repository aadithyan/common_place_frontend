import React from 'react'
import { Link } from "react-router-dom";
function TimeSheetSubMenu() {
  return (
    <ul className="pcoded-submenu">
      <li className="">
        <Link to="" className=''>My Timesheets</Link>
      </li>
      <li className="">
        <Link to=""  className=''>Log Time</Link>
      </li>
    </ul>
  )
}

export default TimeSheetSubMenu