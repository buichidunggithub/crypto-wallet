import React from 'react';
import { useLocation } from 'react-router-dom';

const TransactionStatus: React.FC = () => {
  const location = useLocation();
  const { status } = location.state as { status: string };

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <h1 className="text-2xl font-bold mb-4">Transaction Status</h1>
      <p className="text-lg">{status}</p>
    </div>
  );
};

export default TransactionStatus;
