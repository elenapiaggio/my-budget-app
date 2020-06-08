import React, { Fragment, useState } from "react";
import Error from './Error';

const Form = () => {

  const [ quantity, saveQuantity ] = useState(0);
  const [ error, saveError ] = useState(false);

  const defineBudget = (e) => {
    saveQuantity( parseInt(e.target.value));
  }

  const addBudget = (e) => {
    e.preventDefault();
    // validate
    if(quantity < 1 || isNaN(quantity)){
      saveError(true);
      return;
    }
    saveError(false);
  }

  return (
    <Fragment>
      <h2>Write your budget</h2>
      {
        error ? <Error message='The budget is incorrect!!!'/> : null
      }
      <form
        onSubmit={addBudget}
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
