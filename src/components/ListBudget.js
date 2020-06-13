import React from "react";
import Expensive from "./Expensive";

const ListBudget = ({ expensives }) => {
  console.log('aqui los expensives', expensives)
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
