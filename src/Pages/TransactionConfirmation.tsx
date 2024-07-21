import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransactionConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, amount, method, bank } = location.state as {
    type: 'deposit' | 'withdraw';
    amount: number;
    method?: string;
    bank?: string;
  };

  const handleConfirm = () => {
    // Logic to process the transaction
    if (type === 'deposit') {
      alert(`Đã nạp ${amount} thành công!`);
    } else {
      alert(`Đã rút ${amount} thành công!`);
    }
    navigate('/transaction-details', { state: { type, amount, method, bank } });
  };

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <h1 className="text-xl font-bold mb-6">Xác nhận giao dịch</h1>
      <p className="mb-4">Loại giao dịch: {type === 'deposit' ? 'Nạp tiền' : 'Rút tiền'}</p>
      <p className="mb-4">Số tiền: {amount}</p>
      {method && <p className="mb-4">Phương thức thanh toán: {method}</p>}
      {bank && <p className="mb-4">Ngân hàng: {bank}</p>}
      <button
        className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
        onClick={handleConfirm}
      >
        Xác nhận
      </button>
    </div>
  );
};

export default TransactionConfirmation;
