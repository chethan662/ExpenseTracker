// ExpenseForm.js
import React, { useState } from 'react';
import AddModal from './AddModal';

const ExpenseForm = ({ addExpense }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddExpense = ({ amount, details }) => {
    addExpense({ title: 'Expense', amount, category: 'Other', date: new Date(), details });
  };

  return (
    <div className="expense-form">
      <h2>Add Expense</h2>
      <button onClick={handleOpenModal}>Add Expense</button>
      <AddModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddExpense} />
    </div>
  );
};

export default ExpenseForm;
