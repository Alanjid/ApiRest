import React from "react";
import { Link } from "react-router-dom";

function error() {
  return (
    <div>
      <h2>No se encuentra esta pagina</h2>
      <p>
        <Link to="/">return home</Link>
      </p>
    </div>
  );
}

export default error;
