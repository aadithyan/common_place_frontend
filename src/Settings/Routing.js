import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Containers/Dashboard';
import Login from '../Containers/Login';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Routing