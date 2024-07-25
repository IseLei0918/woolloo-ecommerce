import React from 'react' 
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="descriptionbox-description">
        <p>E-commerce, or electronic commerce, is the buying and selling of goods and services over the internet. It includes online shopping, electronic payments, online auctions, and internet banking.
        E-commerce enables businesses to reach a global audience, offering convenience, wider product selection, and competitive pricing to consumers.</p>
        <p> 
        E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any avaliable variations 
        (e.g. size, colors). Each product usually has its own dedicated page with relevant information. 
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox