import React, { useState } from 'react';
import Form from './components/Form';
import FormBudget from './components/FormBudget';

function App() {

  const [ budget, saveBudget ] = useState(0);
  const [ remainingBudget, saveRemainingBudget ] = useState(0); 

  return (
    <div className='container'>
      <header>
        <h1>WEEKLY BUDGET</h1>
        
        <div className='contenido-principal contenido'>
          <Form 
            saveBudget = {saveBudget}
            saveRemainingBudget = {saveRemainingBudget}
          />
          

          <div className='row'>
            <div className='one-half column'>
            <FormBudget
            />
            </div>
            <div className='one-half column'>
              2
            </div>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
