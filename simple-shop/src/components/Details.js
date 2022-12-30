import React from 'react';
import { ProductConsumer } from "../context";


const Details = () => {
  return (
    <div>
     <ProductConsumer>
      {/* if arraay is big map works only with one item in array */}
        {value => {
          console.log(value)
          return (
            <div className='mx-auto'>
              <h1>{value.state.cart[0].title}</h1>
              <h3>{value.state.cart[0].description}</h3>
              <h4>Price: {value.state.cart[0].price}</h4>
            </div>
          )
        }}
      </ProductConsumer>
    </div>
  )
}

export default Details
