import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e commerse website is an online platform that facilitates buying and selling of products or services over the internet
                    server as a virtual marketplace where businessess and individuals showcase their products, interact with customers, and conduct
                    transactions without the need for a physical presence.E commerse websites have gained immense popularity due to
                    their convience accessibility, and the global reach they offer.</p>
                
                <p>
                    E-commerse websites typically display products or services a detailed descriptions ,images,prices, and any 
                    available var (e.g., sizes,colors). Each product usually has its own description with relevant information. 
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
