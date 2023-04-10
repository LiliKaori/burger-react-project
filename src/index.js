import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Login from './Containers/Login'
import Register from './Containers/Register'
import { UserProvider } from './hooks/UserContext'
import GlobalStyles from './Styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <UserProvider>
      <Login />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>
)
