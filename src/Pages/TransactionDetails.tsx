import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransactionDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, amount, method, bank } = location.state as {
    type: 'deposit' | 'withdraw';
    amount: number;
    method?: string;
    bank?: string;
  };

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => navigate('/')} className="focus:outline-none">
          <span className="text-yellow-500 text-2xl">&larr;</span>
        </button>
        <h1 className="text-xl font-bold">Chi tiết giao dịch</h1>
        <button className="focus:outline-none">
          <span className="text-yellow-500 text-xl">?</span>
        </button>
      </div>

      <div className="mb-6">
        <p className="mb-2">Loại giao dịch: {type === 'deposit' ? 'Nạp tiền' : 'Rút tiền'}</p>
        <p className="mb-2">Số tiền: {amount}</p>
        {method && <p className="mb-2">Phương thức thanh toán: {method}</p>}
        {bank && <p className="mb-2">Ngân hàng: {bank}</p>}
      </div>

      <button
        className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
        onClick={() => navigate('/')}
      >
        Về trang chủ
      </button>
    </div>
  );
};

export default TransactionDetails;
