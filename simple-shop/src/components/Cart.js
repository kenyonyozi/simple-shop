import React from "react";
import { ProductConsumer } from "../context";

const Cart = () => {
  return (
    <div>
      {/* <h1> my cart ({totalCartCount})</h1> */}
      {/* <h1> Grand Cart Amount: ({total})</h1> */}
      <ProductConsumer>
        {/* if arraay is big map works only with one item in array */}
        {(value) => {
           <h1> Grand Cart Amount: ({value.totalCartAmount[0]})</h1> 
          console.log(value);
          // console.log(total);

          return value.state.cart.map((product) => (
            <div key={product.id}>
              <div>
                <h4>{product.title}</h4>
                <p> {product.description}</p>
                <p>Price: &#8378; {product.price * product.count}</p>
                <button onClick={() => value.increase(product.id)}>+</button>
                <button onClick={() => value.removeFromCart(product.id)}>
                  remove from cart
                </button>
                <button onClick={() => value.decrease(product.id)}>-</button>
                <p>You have a total of {product.count} in your cart.</p>
              </div>
              {/* <h1> Grand Cart Amount: ({value.totalCartAmount})</h1> */}
            </div>
          ));
          
        }}
      </ProductConsumer>
      {/* <h1> Grand Cart Amount: ({value.total})</h1>  */}
    </div>
  );
};

export default Cart;
