import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import FormBudget from "./components/FormBudget";
import ListBudget from "./components/ListBudget";
import BudgetControl from "./components/BudgetControl";

function App() {
  // State definition
  const [budget, saveBudget] = useState(0);
  const [remainingBudget, saveRemainingBudget] = useState(0);
  const [showForm, updateForm] = useState(true);
  const [expensives, saveExpensives] = useState([]);
  const [expensive, saveExpensive] = useState({});
  const [createExpensive, saveCreateExpensive] = useState(false);

  // UseEffect for update the remaining
  useEffect(() => {
    if (createExpensive) {
      // add new budget
      saveExpensives([...expensives, expensive]);

      // Subtraction from the current budget
      const budgetRemaining = remainingBudget - expensive.quantity;
      saveRemainingBudget(budgetRemaining);

      // Reset to false
      saveCreateExpensive(false);
    }
  }, [expensive, expensives, createExpensive, remainingBudget]);

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
                  saveExpensive={saveExpensive}
                  saveCreateExpensive={saveCreateExpensive}
                />
              </div>
              <div className="one-half column">
                <ListBudget expensives={expensives} />
                <BudgetControl
                  budget={budget}
                  remainingBudget={remainingBudget}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
