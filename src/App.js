import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./components/Footer/Footer";
import men_banner from './components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './components/Assets/Frontend_Assets/banner_women.png'
import kids_banner from './components/Assets/Frontend_Assets/banner_kids.png'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/mens' element={<ShopCategory category="men" banner={men_banner}></ShopCategory>} ></Route>
        <Route path='/womens' element={<ShopCategory category="women" banner={women_banner}></ShopCategory>}></Route>
        <Route path='/kids' element={<ShopCategory category="kid" banner={kids_banner}></ShopCategory>}></Route>
        <Route path='/product' element={<Product ></Product>}></Route>
        <Route path='/product/:productId' element={<Product ></Product>}></Route>
        <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App;
