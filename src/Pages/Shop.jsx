import React from 'react' 

import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import ShopBanner from '../Components/ShopBanner/ShopBanner'

const Shop = () => {
  return (
    <div>
      <ShopBanner/>
      <Popular/> 
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop