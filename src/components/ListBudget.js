import React from "react";
import Expensive from "./Expensive";
import PropTypes from 'prop-types';

const ListBudget = ({ expensives }) => {
  return (
    <div className="gastos-realizados">
      <h2>List</h2>
      {
        expensives.map((expensive) => (
          <Expensive 
            key={expensive.id} 
            expensive={expensive} 
            />
        ))
      }
    </div>
  );
};

ListBudget.propTypes = {
  expensives: PropTypes.array.isRequired,
}

export default ListBudget;
