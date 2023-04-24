import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SiteMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon style={{ color: '#ffffff' }} />
        <ListLink to={paths.Login} onClick={logout}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SiteMenuAdmin.propTypes = {
  path: PropTypes.string
}
