import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const user = localStorage.getItem('burger:userData')

  if (!user) {
    return <Navigate to="/login" />
  }

  return children
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
