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
            <p>An e-commerce website is an online platform that allows businesses to sell products or services over the internet. These websites facilitate transactions between buyers and sellers, enabling customers to browse, select, and purchase items from the comfort of their own homes.</p>
            <p>Key features of e-commerce websites include product listings, shopping carts, payment gateways, and order processing systems. Product listings typically include images, descriptions, prices, and customer reviews to help buyers make informed decisions. Shopping carts allow users to add items they want to purchase and review them before checking out. Payment gateways securely process transactions,
                 ensuring that sensitive information such as credit card details is protected. Order processing systems manage the fulfillment of orders, including inventory management, shipping, and tracking.</p>
            <p>E-commerce websites can range from small, single-person businesses to large multinational corporations. They have revolutionized the way people shop, providing convenience, accessibility, and a wide range of products and services to customers worldwide.</p>
        </div>
    </div>
  )
}

export default DescriptionBox