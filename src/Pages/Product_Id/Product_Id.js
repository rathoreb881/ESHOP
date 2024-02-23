import React, { useContext, useState } from 'react'
import './Product_Id.css'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
const Product_Id = () => {

    const{all_product,cartItems,addToCart,removeFromCart}=useContext(ShopContext)
    
    const{Id}=useParams();
    const prod=all_product.find((item)=>item.id===Number(Id))
  
  return (
    <div>
        <div className='product_display'>
        <div className='product_display_left'>
            <img src={`.${prod.image}`} alt=''/>
            <img src={`.${prod.image}`} alt=''/>
            <img src={`.${prod.image}`} alt=''/>
            <img src={`.${prod.image}`} alt=''/>
        </div>
        <div className='product_display_right'>
            <img src={`.${prod.image}`} alt=''/>
        </div>
        <div className='prod_desc'>
          <p className='prod_name'>{prod.name}</p>  
          <div className='rating'>
            <img src='../Assets/star_icon.png'/>
            <img src='../Assets/star_icon.png'/>
            <img src='../Assets/star_icon.png'/>
            <img src='../Assets/star_icon.png'/>
            <img src='../Assets/star_dull_icon.png'/>
            (122)
          </div>
          <div className='prod_price'>
            <p>${prod.old_price}</p>
            <span>${prod.new_price}</span>
          </div>
          <Link to='/cart'><button onClick={()=>addToCart(prod.id)}>Add To Cart</button></Link>
        </div>
        </div>
    </div>
    
  )
}

export default Product_Id