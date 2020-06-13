import React, { useState } from "react";
import Form from "./components/Form";
import FormBudget from "./components/FormBudget";

function App() {
  const [budget, saveBudget] = useState(0);
  const [remainingBudget, saveRemainingBudget] = useState(0);
  const [showForm, updateForm] = useState(true);
  const [expensives, saveExpensives] = useState([]);

  const addNewExpensive = expensive => {
    saveExpensives([
      ...expensives,
      expensive,
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>weekly expense</h1>

        <div className="contenido-principal contenido">
          {showForm ? (
            <Form
              saveBudget={saveBudget}
              saveRemainingBudget={saveRemainingBudget}
              updateForm={updateForm}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <FormBudget 
                  addNewExpensive = {addNewExpensive}
                />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
