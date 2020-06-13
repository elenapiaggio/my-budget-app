import React from "react";
import PropTypes from 'prop-types';

const Expensive = ({ expensive }) => (
  <li className="gastos">
    <p>
      {expensive.expensiveName}
      <span className="gasto">{expensive.quantity}€</span>
    </p>
  </li>
);

Expensive.propTypes = {
  expensive: PropTypes.object.isRequired,
}

export default Expensive;
