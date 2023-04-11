import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import PrivateRoute from './private-route'

function Navigates() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path="/"
        />

        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
      </Routes>
    </Router>
  )
}

export default Navigates
