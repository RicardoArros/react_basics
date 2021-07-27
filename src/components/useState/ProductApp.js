import React, { useState } from "react";

const initialProduct = {
  title: "Titulo",
  description: "Description",
  price: "4000",
  image: {
    small: "",
    medium: "",
    big: "",
  },
};

const ProductApp = () => {
  // ojo con inicializar el estado con un objeto vacío
  const [product, setProduct] = useState(initialProduct);

  const updateProduct = (property, value) => {
    // setProduct({});

    //el operador spread (...) copia las propiedades de initialProduct
    setProduct({
      ...product,
      // title: "Otro titulo",
      // description: "Otra descripcion",
      // title: titleNew,
      // description: value,

      // se transforma en variable con los corchetes
      [property]: value,
    });
  };

  return (
    <>
      <button onClick={() => updateProduct("title", "Nuevo titulo")}>
        Update
      </button>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      {/* convertir un objeto a una cadena de texto */}
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </>
  );
};

export default ProductApp;
