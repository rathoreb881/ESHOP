import React from 'react'
import './Popular.css'
import data_product from '../Data/data'
import Product from '../Product/product'

const Popular = () => {
  return (
    <div className='popular_items'>
        <div><h1>Popular in Women</h1></div>
        <div className='popular_items_title'>
            
            {data_product.map((item,i)=>(
                <Product key={i} item={item}/>
            ))}
        </div>
        
    </div>
  )
}

export default Popular