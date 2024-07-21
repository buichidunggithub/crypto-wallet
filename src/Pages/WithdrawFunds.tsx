import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WithdrawFunds: React.FC = () => {
  const [amount, setAmount] = useState<number | undefined>();
  const [selectedBank, setSelectedBank] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleWithdraw = () => {
    navigate('/transaction-confirmation', {
      state: { type: 'deposit', amount, method: selectedBank },
    });
  };

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => navigate(-1)} className="focus:outline-none">
          <span className="text-yellow-500 text-2xl">&larr;</span>
        </button>
        <h1 className="text-xl font-bold">Rút tiền</h1>
        <button className="focus:outline-none">
          <span className="text-yellow-500 text-xl">?</span>
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Số tiền cần rút</label>
        <input
          type="number"
          className="w-full p-2 bg-gray-800 rounded-md text-white mb-4"
          value={amount !== undefined ? amount : ''}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="$ Số tiền cần rút"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Chọn tài khoản ngân hàng</label>
        <div className="bg-gray-800 rounded-md p-2 border border-yellow-500">
          <select
            className="w-full bg-gray-800 text-white focus:outline-none"
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
          >
            <option value="">Chọn ngân hàng</option>
            <option value="Vietcombank">Vietcombank - XXXX-XXXXXX-VCB</option>
            <option value="Techcombank">Techcombank - XXXX-XXXXXX-TCB</option>
            <option value="ACB">ACB - XXXX-XXXXXX-ACB</option>
            {/* Thêm các tùy chọn ngân hàng khác tại đây */}
          </select>
        </div>
      </div>

      <button
        className={`w-full text-white font-bold py-2 px-4 rounded focus:outline-none ${amount ? 'bg-orange-500' : 'bg-gray-500 cursor-not-allowed'}`} disabled={!amount}
        onClick={handleWithdraw}
      >
        Gửi yêu cầu rút tiền
      </button>
    </div>
  );
};

export default WithdrawFunds;
