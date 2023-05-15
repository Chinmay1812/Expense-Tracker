import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';


const NewExpense = (props)=> {

    const [flag,setFlag]=useState(false);
    
    function display(){
        setFlag(true);
    }

    function hide(){
        setFlag(false);
    }

    const saveExpenseDataHandler=enteredExpense=>{
        const expenseData={
            ...enteredExpense,
            id:Math.random().toString()
        };
        props.onSaveData(expenseData);
        setFlag(false)
    }

    return (<div className="new-expense">
        
        {!flag && <button onClick={display}>Add New Expense</button>}
        
        {flag && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
         onHide={hide}
        />}
        
    </div>)

};
export default NewExpense;