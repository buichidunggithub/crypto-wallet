import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

export function ModalConfirm ({isModalOpen, setIsModalOpen}: { isModalOpen: boolean, setIsModalOpen: (isOpen: boolean) => void }) {

  const navigate = useNavigate();

  const handleConfirmSend = () => {
    setIsModalOpen(false);
    navigate('/buy-success', { state: { status: `Sending 999 BTC to recipient...` } });
  };

  return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-gray-900 text-white p-4 rounded-lg max-w-md mx-auto mt-20 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Transaction</h2>
        <p>Are you sure? Once confirmed, you will be sending 0,23241 BTC to the recipient.</p>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleConfirmSend}
          >
            Confirm
          </button>
        </div>
      </Modal>
  );
};
