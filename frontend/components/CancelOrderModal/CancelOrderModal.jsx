import React, { useState } from "react";
import Modal from "./CancelOrderModal.module.css";

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
      <button onClick={openModal} className={Modal.openModal}>
        Cancel Order
      </button>
      {isOpen && (
        <div className={Modal.modalBackground}>
          <div className={Modal.modal}>
            <p>Are you sure you want to cancel your order?</p>
            <button onClick={handleConfirm} className={Modal.cancel}>
              Yes, Cancel
            </button>
            <button onClick={closeModal} className={Modal.back}>
              No, Go Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CancelOrderModal;
