import React, { useState } from "react";
import Error from './Error';
import shortid from 'shortid';

const FormBudget = ({ saveExpensive, saveCreateExpensive }) => {
  const [ expensiveName, saveExpensiveName ] = useState("");
  const [ quantity, saveQuantity ] = useState(0);
  const [ error, saveError ] = useState(false);

  const addExpensive = (e) => {
    e.preventDefault();

    // validate
    if(quantity < 1 || isNaN(quantity) || expensiveName.trim() === ''){
      saveError(true);
      return;
    }
    saveError(false)

    // build the expensive
    const expensive = {
      expensiveName,
      quantity,
      id: shortid.generate()
    }

    // set expensive to principal component
    saveExpensive(expensive);
    saveCreateExpensive(true)

    // reset form
    saveExpensiveName('');
    saveQuantity(0);
  }
  
  return (
    <form
      onSubmit = {addExpensive}
    >
      <h2>Add your expenses</h2>
      {
        error ? <Error message='Name and quantity are required'/> : false
      }
      <div className="campo">
        <label>Expense</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="TMB, Supermarket, Coffes ..."
          value={expensiveName}
          onChange={(e) => saveExpensiveName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="100, 200, 1000 ..."
          value={quantity}
          onChange={(e) => saveQuantity(parseInt(e.target.value))}
        />
      </div>
      <input type="submit" value = 'add expensive' className="button-primary u-full-width" />
    </form>
  );
};

export default FormBudget;
