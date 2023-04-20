import React from 'react'

import { SiteMenuAdmin } from '../../components'
import Orders from './Orders'
import { Container } from './styles'

export function Admin() {
  return (
    <Container>
      <SiteMenuAdmin />
      <Orders />
    </Container>
  )
}
