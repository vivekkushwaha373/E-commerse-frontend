import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/Frontend_Assets/star_icon.png'
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const Product = props.product;
    const { addToCart } = useContext(ShopContext);
  return (
    <div class='productDisplay'>
          <div className="productDisplay-left">
              <div className="productdisplay-img-list">
                  <img src={Product.image} alt="" />
                  <img src={Product.image} alt="" />
                  <img src={Product.image} alt="" />
                  <img src={Product.image} alt="" />
              </div>
              <div className='productdisplay-img'>
                  <img className='productdisplay-main-img' src={Product.image} alt="" />
              </div>
            </div>

          <div className="productDisplay-right">
              <h1>{Product.name}</h1>
              <div className="productdisplay-right-star">
                  <img src={star_icon} alt="" />
                  <img src={star_icon} alt="" />
                  <img src={star_icon} alt="" />
                  <img src={star_icon} alt="" />
                  <img src={star_dull_icon} alt="" />
                  <p>(122)</p>
              </div>
              <div className="productdisplay-right-prices">
                  <div className="productdisplay-right-price-old">${Product.old_price}</div>
                  <div className="productdisplay-right-price-new">${Product.new_price}</div>
              </div>
              <div className="productdisplay-right-description">
                  A lightweight, usually knitted,pullover shirt,close-fitting and with a round neckline
                  and shorts sleeves, worn as an undershirt or outer garments.
              </div>
              <div className='productdisplay-right-size'>
                  <h1>Select Size</h1>
                  <div className='productdisplay-right-sizes'>
                      <div>S</div>
                      <div>M</div>
                      <div>L</div>
                      <div>XL</div>
                      <div>XXL</div>
                  </div>
              </div>
              <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>
              <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
              <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>

          </div>
    </div>
  )
}

export default ProductDisplay
