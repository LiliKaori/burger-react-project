import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../Containers'
import PrivateRoute from './private-route'

function Navigates() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/cadastro" />
        <Route
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
          path="/"
        />
        <Route
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
          path="/produtos"
        />
        <Route
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
          path="/carrinho"
        />
        <Route
          element={
            <PrivateRoute>
              <Admin isAdmin />
            </PrivateRoute>
          }
          path="/pedidos"
        />
      </Routes>
    </Router>
  )
}

export default Navigates
