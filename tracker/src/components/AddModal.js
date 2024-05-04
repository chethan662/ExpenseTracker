// AddModal.js
import React, { useState } from 'react';
import './AddModal.css';

const AddModal = ({ isOpen, onClose, onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    onSubmit({ amount, details });
    setAmount('');
    setDetails('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add Amount and Details</h2>
        <input type="number" placeholder="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Enter Details" value={details} onChange={(e) => setDetails(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AddModal;
