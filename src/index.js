import React from 'react'
import ReactDOM from 'react-dom/client'

import Login from './Containers/Login'
import GlobalStyles from './Styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />
    <GlobalStyles />
  </>
)
