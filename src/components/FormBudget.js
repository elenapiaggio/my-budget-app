import React, { useState } from "react";

const FormBudget = () => {
  const [expensive, saveExpensive] = useState("");
  const [quantity, saveQuantity] = useState(0);

  const addExpensive = (e) => {
    e.preventDefault();

    // validate
    // build the expensive
    // set expensive to principal component
    // reset form
  }
  return (
    <form
      onSubmit = {addExpensive}
    >
      <h2>Add your expenses</h2>
      <div className="campo">
        <label>Expense</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="TMB, Supermarket, Coffes ..."
          value={expensive}
          onChange={(e) => saveExpensive(e.target.value)}
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
      <input type="submit" className="button-primary u-full-width" />
    </form>
  );
};

export default FormBudget;
