import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { json } from 'react-router'
import CartItem from '../cartItems/cartItems'
import './Cart.css'
const Cart = () => {

  const {all_product,cartItems,select,setSelect,defaultCart,validData,addToCart,setCartItems}=useContext(ShopContext)
  
  const totalAmount=()=>{
    let amount=0;
    for(const item in cartItems )
    {
      if(cartItems[item]>0)
      {
        const itemInfo=all_product.find((product)=>product.id===Number(item))
        amount+=itemInfo.new_price*cartItems[item]  
      }
      
    }
    return amount;
  }



 useEffect(()=>{
  setSelect("")
 },[])
 
  return (
    <div>
      <div className='cartitems'>
        <div className='cartitems_list'>
           <p>Products</p>
           <p>Title</p>
           <span>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
           </span>
        </div>  
      </div>
      {all_product.map((item)=>{
         if(cartItems[item.id]>0)
            {return <CartItem item={item}/>}
         else {return null}
})}
     <div className='cart_total'>
      <div className='cart_subtotal'>
        <h3>Cart Totals</h3>
        <div className='cart_subtotal_item'>
          <div className='cart_subtotal_item_row'>
            <p>SubTotal</p>
            <p>${totalAmount()}</p>
          </div>
          <hr/>
         <div className='cart_subtotal_item_row'>
          <p>Shipping Fee</p>
          <p>Free</p>
        </div>
        <hr/> 
        <div className='cart_subtotal_item_row'>
          <p>Total</p>
          <p>${totalAmount()}</p>
        </div>  
          
        </div>
        
        <button>Proceed To Checkout</button>
      </div>
      
      <div className='promocode'>
        <p>If You have a promo code,Find it here</p>
        <div className='promocode_input'>
          <input type='text' placeholder='promo code'/>
          <button>Submit</button>
        </div>
        
      </div>
     </div>
    </div>
  )
}

export default Cart