import React, { Fragment, useState } from "react";

const Form = () => {

  const [quantity, saveQuantity] = useState(0);

  const defineBudget = (e) => {
    saveQuantity( parseInt(e.target.value));
  }

  const addBudget = (e) => {
    e.preventDefault();
    // validate
    // si pasa la validation
  }

  return (
    <Fragment>
      <h2>Write your budget</h2>
      <form
        onSubmit='addBudget'
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget"
          onChange={defineBudget}
        ></input>
        <input
          type="submit"
          className="button-primary u-full-width"
          placeholder="Define budget"
        ></input>
      </form>
    </Fragment>
  );
};

export default Form;
