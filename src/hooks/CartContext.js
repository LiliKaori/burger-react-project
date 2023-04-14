import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('burger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prc => prc.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    // setCartProducts(userInfo)
    await updateLocalStorage(newCartProducts)
  }

  const deleteProduct = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const increaseProduct = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProduct = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProduct(productId)
    }
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('burger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProduct,
        decreaseProduct,
        deleteProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used with CartContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
