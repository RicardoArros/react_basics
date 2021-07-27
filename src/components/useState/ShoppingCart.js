import React, { useState } from "react";

const initialCart = [
  { id: 1, title: "Product", description: "Description" },
  { id: 2, title: "Product 2", description: "Description 2" },
  { id: 3, title: "Product 3", description: "Description 3" },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (productId) => {
    // const changedCart = [];

    const changedCart = cart.filter((product) => product.id !== productId);

    setCart(changedCart);
  };

  return (
    <div>
      <h2>ShoppingCart</h2>

      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
