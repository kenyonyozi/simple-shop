import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Product = ({ product }) => {
  
  return (
    <ProductConsumer>
      {(value) =>(
        
         <div className="m-4">
         {/* mapping the product in product list */}
         {/* on click to add product to cart */}
   {/* adding and item to details */}
         <div  onClick={() => value.addToCart(product)}>
           <Link to="/details"> {product.title} </Link>
         </div>
         <div> {product.description}</div>
         <div> Price: ${product.price} </div>
   
         <button  onClick={() => value.addToCart(product)}> Add To Cart</button>
       </div>
      )}
   
    </ProductConsumer>
  );
};

export default Product;
