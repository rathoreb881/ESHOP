
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import ShopCategory from './Pages/ShopCategory/ShopCategory.js';
import Login from './Pages/Login/Login.js';
import Cart from './Pages/Cart/Cart.js';
import Navbar from './Components/Navbar/Navbar.js';
import Shop from './Pages/Shop.js';
import Product from './Components/Product/product.js';
import Product_Id from './Pages/Product_Id/Product_Id.js';
import banner_mens from './Components/Assets_2/banner_mens.png'
import banner_women from './Components/Assets_2/banner_women.png'
import banner_kids from './Components/Assets_2/banner_kids.png'
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory image={banner_mens} category="men"/>} />
        <Route path='/women' element={<ShopCategory image={banner_women} category="women"/>} />
        <Route path='/kid' element={<ShopCategory image={banner_kids} category="kid"/>} />
        <Route path='/order' element={<ShopCategory/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
   
        <Route path='/product_id/:Id' element={<Product_Id/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
