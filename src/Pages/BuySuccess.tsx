import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface BuySuccessProps {
  balance: number;
}

const BuySuccess: React.FC<BuySuccessProps> = ({ balance }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount } = location.state as { amount: number };

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBackToTransactions = () => {
    navigate('/transactions');
  }

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Transaction Successful</h1>
      <p className="text-lg mb-4">You have successfully bought {amount} BTC.</p>
      <p className="text-lg mb-4">Your new balance is {balance} BTC.</p>
      <div className='flex justify-between space-x-4'>
        <button
          className=" w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
        <button
          className=" w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleBackToTransactions}
        >
          Follow Transactions
        </button>
      </div>
    </div>
  );
};

export default BuySuccess;
