import React, { Component } from 'react'
import Product from './data/productData'

class Card extends Component {

  
render(){
 
  let productStyle ={
    width: '200px',
    height: '200px'

}
  return (
    <div class="container">
    
    {Product.Products.map((postDetail, index) => {
        return <div id="prodstyles" class="tc">
         
          <img src={postDetail.imgUrl} style={productStyle} alt="Images"/>
          <h1>Product: {postDetail.name}</h1>
          <h2>Price: Rs. {postDetail.price}</h2>
        </div>
      })}
    </div>
  )
}

}

export default Card;