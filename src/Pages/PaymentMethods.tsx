import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentMethods: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectDeposit = () => {
    navigate('/deposit-funds');
  };

  const handleSelectWithdraw = () => {
    navigate('/withdraw-funds');
  };

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <h1 className="text-2xl font-bold mb-6">Chọn Phương Thức Thanh Toán</h1>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Nạp Tiền</h2>
        <button
          className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none mb-4"
          onClick={handleSelectDeposit}
        >
          Nạp từ Ngân Hàng
        </button>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Rút Tiền</h2>
        <button
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={handleSelectWithdraw}
        >
          Rút về Ngân Hàng
        </button>
      </div>
    </div>
  );
};

export default PaymentMethods;
