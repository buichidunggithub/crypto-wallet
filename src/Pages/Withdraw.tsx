import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';
import { FaArrowUp, FaArrowDown, FaClock, FaCopy, FaQrcode, FaCog, FaArrowLeft } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { Coin } from '../types';
import Modal from 'react-modal';
import Transactions from './Transactions';

const Withdraw: React.FC = () => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [isQrScannerVisible, setIsQrScannerVisible] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const transactionFee = 0.0002; // Example transaction fee
  const location = useLocation();

  const handleScan = (data: string | null) => {
    if (data) {
      setRecipientAddress(data);
      setIsQrScannerVisible(false);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
    alert('Error scanning QR code.');
  };

  const handleSend = () => {
    // setIsModalOpen(true);
    navigate('/withdraw-funds');
  };

  const handleReceive = () => {
    navigate('/transaction-status', { state: { status: 'Receiving transaction...' } });
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(recipientAddress);
    alert('Address copied to clipboard!');
  };

  const toggleQrScanner = () => {
    setIsQrScannerVisible(!isQrScannerVisible);
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Quay lại trang trước đó
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirmSend = () => {
    setIsModalOpen(false);
    navigate('/withdraw-funds');
    // navigate('/buy-success', { state: { status: `Sending ${amount} BTC to recipient...`, amount: amount } });
  };
  
  const availableBalance = 0.8458; // Example available balance

  return (
    <div className="p-4 w-full bg-gray-900 text-white shadow-md rounded-lg min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className='flex'>
          <button onClick={handleBack} className="focus:outline-none">
            <FaArrowLeft className="text-yellow-500" size={24} />
          </button>
          <div className='ml-4'>Sell</div>
        </div>
        <h2 className="text-xl font-bold">Bitcoin</h2>
        {/* <button className="focus:outline-none">
          <FaCog className="text-yellow-500" size={24} />
        </button> */}
      </div>
      {/* <div className="flex justify-around mb-4">
        <button onClick={() => handleSell(coin)} className={`flex flex-col items-center focus:outline-none ${location.pathname === '/deposit' ? 'opacity-50' : ''}`}>
          <FaArrowUp className="text-yellow-500" size={32} />
          <span className="mt-2">Send</span>
        </button>
        <button onClick={() => handleBuy(coin)} className={`flex flex-col items-center focus:outline-none ${location.pathname === '/withdraw' ? 'opacity-50' : ''}`}>
          <FaArrowDown className="text-yellow-500" size={32} />
          <span className="mt-2">Receive</span>
        </button>
        <button onClick={() => navigate('/transactions')} className="flex flex-col items-center focus:outline-none opacity-50">
          <FaClock className="text-yellow-500" size={32} />
          <span className="mt-2">Transactions</span>
        </button>
      </div> */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Available Balance</h3>
        <div className="text-4xl font-bold">0.8458 BTC</div>
        <div className="text-gray-400">$12,754.23</div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Recipient Address</h3>
        <div className="flex items-center mt-2">
          <input
            type="text"
            className="flex-grow p-2 bg-gray-800 rounded-md text-white"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
          <button className="ml-2" onClick={handleCopyAddress}>
            <FaCopy className="text-yellow-500" size={24} />
          </button>
          <button className="ml-2" onClick={toggleQrScanner}>
            <FaQrcode className="text-yellow-500" size={24} />
          </button>
        </div>
        {isQrScannerVisible && (
          <div className="mt-4">
            {/* <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            /> */}
            Scan QR Function
          </div>
        )}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Enter Amount</h3>
        <input
          type="number"
          className="w-full p-2 bg-gray-800 rounded-md text-white"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <div className="mb-4 text-lg font-semibold">
        Transaction Fee: <span className="text-yellow-500">{transactionFee} BTC</span>
      </div>
      <div className="mb-4 text-lg font-semibold">
        Total: <span className="text-yellow-500">{amount + transactionFee} BTC</span>
      </div>
      <div className="flex space-x-4">
        <button onClick={handleSend} className={`flex-1 ${amount ? 'bg-yellow-500' : 'bg-gray-500 cursor-not-allowed'} text-black font-bold py-2 px-4 rounded focus:outline-none`} disabled={!amount}>Send</button>
        {/* <button onClick={handleReceive} className="flex-1 bg-gray-800 text-white font-bold py-2 px-4 rounded">Receive</button> */}
      </div>

      <Transactions/>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-gray-900 text-white p-4 rounded-lg max-w-md mx-auto mt-20 shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Confirm Transaction</h2>
        <p>Are you sure? Once confirmed, you will be sending {amount} BTC to the recipient.</p>
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
    </div>
  );
};

export default Withdraw;
