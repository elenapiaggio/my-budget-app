import React from 'react';

const FormBudget = () => {
    return ( 
        <form>
            <h2>Add your budgets</h2>
            <div className='campo'>
                <label>Name budgets</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='TMB, Supermarket, Coffes ...'
                />
            </div>
            <div className='campo'>
                <label>Quantity budgets</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='100, 200, 1000 ...'
                />
            </div>
            <input
                type='submit'
                className='button-primary u-full-width'
            />
        </form>
     );
}
 
export default FormBudget;