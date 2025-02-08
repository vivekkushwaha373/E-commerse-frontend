import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'

import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
    return (
      <div className='navbar'>
          <div className='nav-logo'>
              <img src={logo} alt="" />
              <p>SHOPPER</p>
          </div>
            <ul className="nav-menu">
                <Link  className="text-link" to='/' >
                <li onClick={() => { setMenu('shop') }}>Shop{menu==='shop'?<hr></hr>:<></>}</li>
                </Link>
                <Link  className="text-link" to='/mens'>
                <li onClick={() => { setMenu('mens') }}>Men{menu === 'mens' ? <hr></hr> : <></> }</li>
                </Link>
                <Link  className="text-link" to='/womens'>
                <li onClick={() => { setMenu('womens') }}>Women{menu === 'womens' ? <hr></hr> : <></> }</li>
                </Link>
                <Link className="text-link"  to='/kids'>
                <li onClick={() => { setMenu('kids') }}>Kids{menu === 'kids' ? <hr></hr> : <></>}</li>
                </Link>

          </ul>
            <div className="nav-login-cart">
                <Link  className="text-link" to='/login'>
              <button>Login</button>
                </Link>
                <Link  className="text-link" to='/cart'>
              <img src={cart_icon} alt="" />
                    
              </Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
          </div>
    </div>
  )
}

export default Navbar
