import React from 'react'
// import './RelatedProducts.css'
import './RelatedProduct.css'
import data_product from '../Assets/Frontend_Assets/data'
import Item from '../Item/Item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
          <h1>Related Products</h1>
          <hr />
          <div className="relatedProductItems">
              {
                data_product.map((item) => {
                  return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                 })
                
              }
          </div>
    </div>
  )
}

export default RelatedProducts
