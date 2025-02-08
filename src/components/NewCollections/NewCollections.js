import React from 'react'
import './NewCollections.css'
import new_collections from '../Assets/Frontend_Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
          <h1>New Collections</h1>
          <hr />
          <div className="collections">
              {
                  new_collections.map((item) => {
                      return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
                })  
              }
          </div>
    </div>
  )
}

export default NewCollections
