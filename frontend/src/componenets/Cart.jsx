import React from 'react'
import burger from '../assets/burger.jpg'
import '../styles/carrt.scss'
import { Link } from 'react-router-dom'

const CartItem = ({title, img, increment, decrement, value})=>{
    return(
       <>
        <div className='cartitems'>
            <div className='d-flex'>
                <h4>{title}</h4>
                <img src={img} alt="burger" />
            </div>
            <div className='d-flex'>
                <button className='btn' type='button' onClick={increment}>+</button>
                <input type="number" name="" id="" value={value} readOnly/>
                <button className='btn' type='button' onClick={decrement}>-</button>
            </div>
        </div>

        <div>

        </div>
       </>
    )
}

const Cart = () => {

    const increment = (item)=>{}
    const decrement = (item)=>{}

  return (
    <div>

        <div>
         <CartItem title={'cheese burger'} img={burger} increment={()=>increment(1)} decrement={()=>decrement(1)} value={200}/>
        </div>

        <div>
            <div>
                <h4>subtotal</h4>
                <p>₹{200}</p>
            </div>
            <div>
                <h4>Tax</h4>
                <p>₹{200 * 0.18}</p>
            </div>
            <div>
                <h4>Shipping</h4>
                <p>₹{50}</p>
            </div>
            <div>
                <h4>Total</h4>
                <p>₹{200 + 200*0.8 + 50}</p>
            </div>
            <Link to={'/checkout'}>Checkout</Link>
        </div>
        
    </div>
  )
}



export default Cart