import React, { useState } from "react";

const StateOne = () => {
  const [counter, setCounter] = useState(0);

  const handleCounterAdd = () => {
    setCounter(counter + 1);

    // actualizar el estado en el mismo scope
    // setCounter((prevCounter) => prevCounter + 1);
  };
  const handleCounterSub = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <p>{counter}</p>
        <button onClick={handleCounterAdd}>+</button>
        <button onClick={handleCounterSub}>-</button>
      </div>
    </>
  );
};

export default StateOne;
