import React, { Fragment, useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';
 
const Form = ({ saveBudget, saveRemainingBudget, updateForm }) => {

  const [ quantity, saveQuantity ] = useState(0);
  const [ error, saveError ] = useState(false);

  const defineBudget = (e) => {
    saveQuantity( parseInt(e.target.value));
  }

  const addBudget = (e) => {
    e.preventDefault();
    
    // Validation
    if(quantity < 1 || isNaN(quantity)){
      saveError(true);
      return;
    }

    // If it has been validation
    saveError(false);
    saveBudget(quantity);
    saveRemainingBudget(quantity);
    updateForm(false);
  }

  return (
    <Fragment>
      <h2>My Budget</h2>
      {
        error ? <Error message='The expense is incorrect!!!'/> : null
      }
      <form
        onSubmit={addBudget}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Add your budget e.g. 100"
          onChange={defineBudget}
        ></input>
        <input
          type="submit"
          className="button-primary u-full-width"
          placeholder="Define budget"
          value = 'add budget'
        ></input>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemainingBudget: PropTypes.func.isRequired,
  updateForm: PropTypes.func.isRequired,
}

export default Form;
