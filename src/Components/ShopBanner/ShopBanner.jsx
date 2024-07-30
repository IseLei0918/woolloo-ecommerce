import './ShopBanner.css'
import React from "react";
import Lebron_Image from '../Assets/Lebron_headpage_copy.jpg'

const ShopBanner = () => {
  return (
    <div className="image-container">
      <img src={Lebron_Image} alt="Background" className="Lebron_Image" /> 
      <div className="text-overlay">THIS IS WOLLOO</div>
  </div>
  )
}

export default ShopBanner