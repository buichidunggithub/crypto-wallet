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

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <h1 className="text-2xl font-bold mb-4">Transaction Successful</h1>
      <p className="text-lg mb-4">You have successfully bought {amount} BTC.</p>
      <p className="text-lg mb-4">Your new balance is {balance} BTC.</p>
      <button
        className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none"
        onClick={handleBackToHome}
      >
        Back to Home
      </button>
    </div>
  );
};

export default BuySuccess;
