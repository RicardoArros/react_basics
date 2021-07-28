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

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();

    const changedCart = [newProduct, ...cart];

    setCart(changedCart);
  };

  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );
    setCart(changedCart);
  };

  return (
    <div>
      <h2>ShoppingCart</h2>

      <button
        onClick={() =>
          addProduct({
            title: "Nuevo titulo",
            description: "Nueva description",
          })
        }
      >
        Add
      </button>

      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
            <button
              onClick={() =>
                updateProduct({
                  id: product.id,
                  title: "Titulo actualizado",
                  description: "Description actualizado",
                })
              }
            >
              Update
            </button>
          </div>
        ))}
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};

export default ShoppingCart;
