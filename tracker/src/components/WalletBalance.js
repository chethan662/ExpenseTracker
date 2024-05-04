// WalletBalance.js
import React, { useState } from 'react';
import AddModal from './AddModal';

const WalletBalance = ({ walletBalance, addIncome }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddIncome = ({ amount }) => {
    addIncome(amount);
  };

  return (
    <div className="wallet-balance">
      <h2>Wallet Balance: ${walletBalance}</h2>
      <button onClick={handleOpenModal}>Add Income</button>
      <AddModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleAddIncome} />
    </div>
  );
};

export default WalletBalance;
