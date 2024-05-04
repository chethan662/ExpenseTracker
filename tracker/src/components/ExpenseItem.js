// ExpenseItem.js
import React, { useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import './ExpenseItem.css';

const ExpenseItem = ({ expense, deleteExpense, editExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(expense.title);
  const [editedAmount, setEditedAmount] = useState(expense.amount);
  const [editedCategory, setEditedCategory] = useState(expense.category);
  const [editedDate, setEditedDate] = useState(expense.date);

  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const editedExpense = {
      ...expense,
      title: editedTitle,
      amount: editedAmount,
      category: editedCategory,
      date: editedDate,
    };
    editExpense(editedExpense);
    setIsEditing(false);
  };

  return (
    <div className="expense-item">
      {isEditing ? (
        <div className="expense-edit">
          <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <input type="number" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
          <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
          <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="expense-info">
          <p><strong>Title:</strong> {expense.title}</p>
          <p><strong>Amount:</strong> ${expense.amount}</p>
          <p><strong>Category:</strong> {expense.category}</p>
          <p><strong>Date:</strong> {expense.date.toDateString()}</p>
        </div>
      )}
      <div className="expense-actions">
        <button onClick={handleEdit}><MdEdit /></button>
        <button onClick={handleDelete}><MdDelete /></button>
      </div>
    </div>
  );
};

export default ExpenseItem;
