import React from 'react';
import Form from './components/Form';

function App() {
  return (
    <div className='container'>
      <header>
        <h1>WEEKLY BUDGET</h1>
        
        <div className='contenido-principal contenido'>
          <Form />
        </div>
        
      </header>
    </div>
  );
}

export default App;
