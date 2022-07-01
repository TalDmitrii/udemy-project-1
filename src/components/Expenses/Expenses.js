import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");
    const filteredItems = [...props.items].filter(item => item.date.getFullYear() === +filteredYear);
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear.target.value);
    }

    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredItems} />
                <ExpensesList items={filteredItems} />
            </Card>
        </>
    );
}

export default Expenses;