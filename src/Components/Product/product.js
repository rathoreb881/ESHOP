import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'


const Product = ({item}) => {
  return (
    <div className='product'>
      <div className='product_img'>
        <Link to={`/product_id/${item.id}`}><img src={item.image} alt=""/></Link>
      </div>
      <div className='product_price'> 
        <Link to='/product_id'><p className='item_name'>{item.name}</p></Link>
        <p className='new_price'><span>New_Price:</span> ${item.new_price}</p> 
        <p className='old_price'><span>Old_Price:</span> ${item.old_price}</p>
      </div>
      
    </div>
  )
}

export default Product