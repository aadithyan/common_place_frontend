import React from 'react'
import {Link } from "react-router-dom";

function EmployeesSubMenu() {
  return (
    <ul className="pcoded-submenu">
      <li className="">
        <Link to="" className=''>List Employees</Link>
      </li>
      <li className="">
        <Link to=""  className=''>New Employees</Link>
      </li>
      <li className="">
        <Link to=""  className="">Allocate</Link>
      </li>
    </ul>
  )
}

export default EmployeesSubMenu