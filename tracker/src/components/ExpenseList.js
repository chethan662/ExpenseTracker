// ExpenseList.js
import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} editExpense={editExpense} />
      ))}
    </div>
  );
};

export default ExpenseList;
