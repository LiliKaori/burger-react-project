import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  PageLinkExit,
  ContainerText,
  Line
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          onClick={() => navigate(paths.Home)}
          isActive={pathname === '/'}
        >
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate(paths.Products, { state: { categoryId: 0 } })}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Person} alt="logo-pessoa" />
        </PageLink>
        <Line></Line>
        <PageLink onClick={() => navigate(paths.Cart)}>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <ContainerText>
          <p>Olá, {userData.name}!</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
