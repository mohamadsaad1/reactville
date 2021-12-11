import React from 'react'
import CartItem from './CartItem'


const Cart = (props) => {
  return (
    <div className="cart">
      <h3>Cart</h3>

      {props.cart.map((item, idx) => (
        <CartItem 
        key={idx} 
        item={item} 
        removeFromCart={props.removeFromCart}
        />
      ))}

      <div className="cart-total">
        <p>Total:</p>
        <p>$</p>
      </div>

      
    </div>
  )
}

export default Cart