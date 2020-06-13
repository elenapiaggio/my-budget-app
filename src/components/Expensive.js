import React from "react";

const Expensive = ({ expensive }) => (
  <li className="gastos">
    <p>
      {expensive.expensiveName}
      <span className="gasto">{expensive.quantity}€</span>
    </p>
  </li>
);

export default Expensive;
