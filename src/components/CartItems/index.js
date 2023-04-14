import React from 'react'

import Cart from '../../assets/empty-cart.png'
import Trash from '../../assets/trash.svg'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteProduct } =
    useCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Items</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProduct(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProduct(product.id)}>+</button>
            </div>
            <div className="price-container">
              <p>{formatCurrency(product.quantity * product.price)}</p>
              <button onClick={() => deleteProduct(product.id)}>
                <img src={Trash} />
              </button>
            </div>
          </Body>
        ))
      ) : (
        <EmptyCart>
          <p>Carrinho vazio</p>
          <img src={Cart} />
        </EmptyCart>
      )}
    </Container>
  )
}
