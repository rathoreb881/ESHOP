import { createContext, useEffect, useState} from "react";
import { all_product } from "../Components/Data/data";
import Product from "../Components/Product/product";

export const ShopContext=createContext();


const defaultCart=(e)=>{
    let cart=[]
    for (let index=0;index<all_product.length+1;index++){
    cart[index]=0;
  }
    return cart;
  }


export const ShopContextProvider = (props)=>{

const[cartItems,setCartItems]=useState(defaultCart());
const[select,setSelect]=useState("")

const addToCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}


const removeFromCart=(itemId)=>{
setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))}


const getData=()=>{
  let newCartData=localStorage.getItem("ourcart");
  if(newCartData){
     return JSON.parse(newCartData);
  }else{
    return []
  }
}

const[product,setProduct]=useState(getData())

useEffect(()=>{   
  localStorage.setItem("ourcart",JSON.stringify(cartItems))
  },[cartItems])

  const count=()=>{
    let total=0;
    for(const id in cartItems){
     if(cartItems[id]>0)
     {
       total+=cartItems[id]
     }
     } 
     return total
  } 
  
   return( 
    <ShopContext.Provider value={{all_product,select,count,setSelect,product,cartItems,defaultCart,getData,setCartItems,addToCart,removeFromCart}}>
        {props.children}
    </ShopContext.Provider>
   )
}

export default ShopContextProvider       