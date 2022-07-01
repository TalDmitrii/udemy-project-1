import { useState } from 'react';

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
    const [formVisibility, setFormVisibility] = useState(false);

    const showForm = () => {
        setFormVisibility(true);
    }

    const closeForm = () => {
        setFormVisibility(false);
    }

    return ( 
        <div className="new-expense">
            { formVisibility 
                ? <ExpenseForm onSaveExpenseData={props.onAddExpense} onCancel={closeForm} />
                : <button onClick={showForm} type="button">Add new expense</button>
            }
        </div>
    );
}

export default NewExpense;