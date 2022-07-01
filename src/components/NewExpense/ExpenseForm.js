import React, { useState } from 'react';

import "./ExpenseForm.css";

function ExpenseForm(props) {
    const [inputsValue, setInputsValue] = useState({
        title: "",
        amount: "",
        date: "",
    });

    const titleChangeHandler = (e) => {
        setInputsValue((prevState) => {
            return {...prevState, title: e.target.value};
        });
    }

    const amountChangeHandler = (e) => {
        setInputsValue((prevState) => {
            return {...prevState, amount: e.target.value};
        });
    }

    const dateChangeHandler = (e) => {
        setInputsValue((prevState) => {
            return {...prevState, date: e.target.value};
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            ...inputsValue,
            date: new Date(inputsValue.date),
        }

        props.onSaveExpenseData(expenseData);
        props.onCancel();

        setInputsValue({
            title: "",
            amount: "",
            date: "",
        });
    }

    return ( 
        <>
            <form action="" onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input value={inputsValue.title} onChange={titleChangeHandler} id="title" type="text" />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="amount">Amount</label>
                        <input value={inputsValue.amount} onChange={amountChangeHandler} id="amount" type="number" min="0.01" step="0.01" />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="date">Date</label>
                        <input value={inputsValue.date} onChange={dateChangeHandler} id="date" type="date" min="2022-01-01" max="2024-01-01" />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel} type="reset">Cancel</button>
                    <button type="submit">Add expense</button>
                </div>
            </form>
        </>
    );
}

export default ExpenseForm;