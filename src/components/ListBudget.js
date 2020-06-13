import React from "react";
import Expensive from "./Expensive";

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

export default ListBudget;
