
import React, { useState }  from 'react'
import '../../styles/super-market.css'

// Components & Data
import Cart from './Cart'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import { products } from '../../data/market-data'


const SuperMarket = (props) => {

  const [cart, setCart] = useState([])

  const [productCategory, setProductCategory] = useState('Produce')

  const [toggleCart, setToggleCart] = useState(true)

  console.log(products)

const addToCart = (item) => {
    if (cart.find(ele => ele.id === item.id)) {
        setCart(
          cart.map(
            (ele) => ele.id === item.id ?
              { ...ele, quantity: ele.quantity + 1 }
              :
              ele
          )
        )
      } else {
      setCart([{ ...item, quantity: 1 }, ...cart])
      }
    }

    const removeFromCart = (item) => {
      if (item.quantity > 1) {
        setCart(cart.map((ele) => ele.id === item.id ? { ...item, quantity: item.quantity - 1 } : ele))
      } else {
        setCart(cart.filter((ele) => ele.id !== item.id))
      }
    }

  return (
    <div className="super-market">
      <section>

        <MarketNav
          products={products}
          setProductCategory={setProductCategory}
          toggleCart={toggleCart}
          setToggleCart={setToggleCart}
        />

        <DisplayProducts
          products={products}
          productCategory={productCategory}
          addToCart={addToCart}
          
        />

      </section>
        <Cart
        setCart={setCart}
        cart={cart}
        removeFromCart={removeFromCart}
        handleExchange={props.handleExchange}
        />
    </div>
  )
}
export default SuperMarket