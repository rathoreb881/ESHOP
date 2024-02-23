import React, { useContext, useEffect, useRef, useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  
  const {select,setSelect,count,cartItems}=useContext(ShopContext)

  // const menuRef=useRef();
  
  // const handleMenu=(e)=>{
  //   menuRef.current.classList.toggle('navbar_visible')
  //   e.target.classList.toggle('open')
  // }
 const[toggle,setToggle]=useState(false)

 const handleMenu=()=>{
  setToggle(!toggle)
 }

 useEffect(() => {
  window.addEventListener('resize', () => {
      if (window.innerWidth < 991) {
         setToggle(false);
      } 
      else{
        setToggle(false)
      }
  });
}, []);

// useEffect(() => {
//   document.body.addEventListener("click", ()=>
//    setToggle(!toggle))
//   }
// ,[])

  return (
    <div className='navbar'>
      <div className='navbar_logo'>
        <img src='./Assets/logo.png' alt=''/>
        <p>EShop</p>
      </div>

      
      
      {toggle?(
      <ul className='navbar_visible'>
        <li onClick={()=>setSelect("Shop")}>  <Link to='/'>Shop </Link>{select!=="Shop"?<></>:<hr/>}</li>
        <li onClick={()=>setSelect("men")}>   <Link to='/men'>men</Link> {select!=="men"?<></>:<hr/>}</li>  
        <li onClick={()=>setSelect("women")}> <Link to='women'> women </Link>{select!=="women"?<></>:<hr/>}</li>
        <li onClick={()=>setSelect("kid")}>  <Link to='kid'> kid  </Link> {select!=="kid"?<></>:<hr/>}</li>
        <Link to='/login'>Login</Link>
      </ul>
      ):(<></>
      )}
      
      <ul className='navbar_menu'>
        <li onClick={()=>setSelect("Shop")}>  <Link to='/'>Shop </Link>{select!=="Shop"?<></>:<hr/>}</li>
        <li onClick={()=>setSelect("men")}>   <Link to='/men'>men</Link> {select!=="men"?<></>:<hr/>}</li>  
        <li onClick={()=>setSelect("women")}> <Link to='women'> women </Link>{select!=="women"?<></>:<hr/>}</li>
        <li onClick={()=>setSelect("kid")}>  <Link to='kid'> kid  </Link> {select!=="kid"?<></>:<hr/>}</li>
      </ul>
     
      <div className='navbar_cart_login'>
        <Link to='/login'><button>Login</button></Link>  
        <Link to='/cart'><img src='./Assets/cart_icon.png' alt=''/></Link>
        <p>{count()}</p>
      </div>
      <CiMenuBurger className='menu' onChange={()=>{setToggle(false)}}  onClick={()=>{handleMenu()}}/>  
    </div>
  )
}

export default Navbar