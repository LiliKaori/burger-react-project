import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OfferCarousel from '../../components/OfferCarousel'
import { Container, HomeImg } from './styles'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo da home" />
      <CategoryCarousel />
      <OfferCarousel />
    </Container>
  )
}

export default Home
