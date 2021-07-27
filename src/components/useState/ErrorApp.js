import React, { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");

  return (
    <>
      <button onClick={() => setError("Error al traer el API")}>Error</button>
      <button onClick={() => setError("Credenciales incorrectas")}>
        Otro error
      </button>
      <button onClick={() => setError("Error al traer el API")}>
        Proceso exitoso
      </button>
      {error && <p>{error}</p>}
    </>
  );
};

export default ErrorApp;
