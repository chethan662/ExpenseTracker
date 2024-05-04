// App.js
import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import Modal from 'react-modal';
import { MdError } from 'react-icons/md';
import WalletBalance from './components/WalletBalance';
import './App.css';

Modal.setAppElement('#root');

const App = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Load expenses from local storage on component mount
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(storedExpenses);
  }, []);

  // Update local storage when expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Function to handle adding a new expense
  const addExpense = (expense) => {
    const newExpenses = [...expenses, expense];
    setExpenses(newExpenses);
    setWalletBalance(walletBalance - expense.amount);
  };

  // Function to handle deleting an expense
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // Function to handle editing an expense
  const editExpense = (editedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === editedExpense.id ? editedExpense : expense
    );
    setExpenses(updatedExpenses);
  };

  // Function to handle adding income to the wallet
  const addIncome = (amount) => {
    setWalletBalance(walletBalance + amount);
  };

  // Function to show error modal
  const showErrorModal = (errorMessage) => {
    setModalContent(errorMessage);
    setModalIsOpen(true);
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <div className="top-section">
        <WalletBalance walletBalance={walletBalance} addIncome={addIncome} />
        <ExpenseForm addExpense={addExpense} showErrorModal={showErrorModal} />
        <ExpenseTrends expenses={expenses} />
      </div>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />
      <ExpenseSummary expenses={expenses} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <MdError className="modal-icon" />
        <p>{modalContent}</p>
      </Modal>
    </div>
  );
};

export default App;
