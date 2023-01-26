import React, { createContext, useReducer } from 'react'
import { cartReducer } from '../reducers/CartReducer'

export const CartContext = createContext()

const initialCartState = []

function CartContextProvider({children}) {
    const [state,dispatch] = useReducer(cartReducer, initialCartState)

  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider