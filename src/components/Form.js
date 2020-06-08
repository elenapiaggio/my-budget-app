import React, { Fragment } from 'react';

const Form = () => {
    return ( 
        <Fragment>
            <h2>Write your budget</h2>
            <form>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Add your budget'
                >
                </input>
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    placeholder='Define budget'
                >
                </input>
            </form>
        </Fragment>
     );
}
 
export default Form;