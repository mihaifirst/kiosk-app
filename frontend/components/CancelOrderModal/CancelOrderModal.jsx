import React, { useState } from "react";
import "./CancelOrderModal.css";

const CancelOrderModal = ({ onConfirm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <>
      <button onClick={openModal} className="openModal">
        Cancel Order
      </button>
      {isOpen && (
        <div className="modal-background">
          <div className="modal">
            <p>Are you sure you want to cancel your order?</p>
            <button onClick={handleConfirm} className="cancel">
              Yes, Cancel
            </button>
            <button onClick={closeModal} className="back">
              No, Go Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CancelOrderModal;
