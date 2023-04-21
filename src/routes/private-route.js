import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../components'
import paths from '../constants/paths'

function PrivateRoute({ children }) {
  const user = localStorage.getItem('burger:userData')

  if (!user) {
    return <Navigate to={paths.Login} />
  }

  if (children.props.isAdmin && !JSON.parse(user).admin) {
    return <Navigate to={paths.Home} />
  }

  return (
    <>
      {!children.props.isAdmin && <Header />}
      {children}
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
