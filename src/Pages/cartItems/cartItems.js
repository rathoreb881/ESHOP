import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './cartItems.css'

const CartItem = ({item}) => {

const {all_product,cartItems,addToCart,removeFromCart,setCartItems}=useContext(ShopContext)

const amount=()=>{
  let amt=0
  for (item in cartItems)
   if(cartItems[item]){
    return amt+=cartItems
   }else{
    return null
   }
}


const [product,setProduct]=useState([])

  return (
    <div className='selected'>
      <div className='selected_items'>
        <div className='selected_items_image'>
          <img src={item.image}/>
          <div className='title'>{item.name}</div>
        </div>
        <div className='selected_items_detail'>  
          <div className='price'>${item.new_price}</div>
          <div className='quantity'>{cartItems[item.id]}</div>
          <div>${cartItems[item.id]*item.new_price}</div>   
          <button onClick={()=>{removeFromCart(item.id)}}>-</button>
        </div>
      </div>
      <div className='line'><hr/></div>
    
    </div>
    
    
    
    
  )
}

export default CartItem