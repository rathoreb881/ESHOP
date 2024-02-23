import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Product from '../../Components/Product/product'
import './ShopCategory.css'

const ShopCategory = (props) => {
const {all_product}=useContext(ShopContext)
   
   
  return (
      <div className='category'>
        <img src={props.image} alt=''/>
        <div className='category_item'>
          {all_product.map((item,i)=>{
            if(props.category===item.category)
            {return <Product key={i} item={item}/>}
            else{ return null}
          })}
        </div>
      </div>
  )
}

export default ShopCategory