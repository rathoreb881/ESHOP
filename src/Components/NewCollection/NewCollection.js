import React from 'react'
import { new_collections } from '../Data/data'
import Product from '../Product/product'
import '../Product/product.css'
import './NewCollection.css'
const NewCollection = () => {
  return (
   <div className='all_new'>
       <h1>New-Collection</h1>
        <div className='new'>
            {new_collections.map((item,i)=>(
                <Product key={i} item={item}/>
            ))}
        </div>
   </div> 
    
  )
}

export default NewCollection