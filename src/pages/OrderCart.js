import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

function OrderCart() {
    const {state, dispatch} = useContext(CartContext)

  return (
    <div style={{paddingTop:'200px'}}>
        <h2>Order Summary</h2>
        <div>
            { state.length > 0 ?
                state.map(item => {
                    return (
                        <div>
                            <h3>{item.name}</h3>
                            <h3>{item.quantity}</h3>
                            <h3>{item.price}</h3>
                        </div>
                    )
                })
                :
                "Your cart is empty"
            }
        </div>

    </div>
  )
}

export default OrderCart