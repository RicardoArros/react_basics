import React, { useState } from "react";

const StateOne = () => {
  const [condition, setCondition] = useState(true);

  return (
    <>
      <div>
        <h2>Conditional App</h2>

        <p>
          State value is <strong>{condition.toString()}</strong>
        </p>

        <button onClick={() => setCondition(!condition)}>Toggle</button>

        {/* {condition ? <p>Show message in true</p> : <p>Show message in false</p>} */}

        {/* {condition ? <p>Show message in true</p> : null} */}

        {/* {condition && <p>Show only in true</p>} */}
      </div>
    </>
  );
};

export default StateOne;
