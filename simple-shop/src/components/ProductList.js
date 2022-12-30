// import { useState } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

const ProductList = () => {

  return (
    <>
    <div >
      <h1> products</h1>
    </div>
    <div>
      {/* the consumer from the  */}
      <ProductConsumer>
        {value => {
            console.log(value); 
          return value.state.products.map(product =>{
            return <Product key= {product.id} product = {product} />
          })
        }}
      </ProductConsumer>
    </div>
      {/* {products.map((items) => (
        <div key={items.id}>
          <div>
            <p>{items.title}</p>
          </div>
          <div>
            <p>{items.description}</p>
          </div>

          <div>
            <div>${items.price}</div>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default ProductList;
