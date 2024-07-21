import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DepositFunds: React.FC = () => {
  const [amount, setAmount] = useState<number | undefined>();
  const [selectedMethod, setSelectedMethod] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleDeposit = () => {
    navigate('/transaction-confirmation', {
      state: { type: 'deposit', amount, method: selectedMethod },
    });
  };

  return (
    <div className="p-4 w-full h-full bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => navigate(-1)} className="focus:outline-none">
          <span className="text-yellow-500 text-2xl">&larr;</span>
        </button>
        <h1 className="text-xl font-bold">Nạp tiền</h1>
        <button className="focus:outline-none">
          <span className="text-yellow-500 text-xl">?</span>
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Số tiền cần nạp</label>
        <input
          type="number"
          className="w-full p-2 bg-gray-800 rounded-md text-white mb-4"
          value={amount !== undefined ? amount : ''}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          placeholder="₫ Số tiền cần nạp"
        />
        <p className="text-gray-500 text-sm">Giới hạn: ₫100 - ₫1,000,000</p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 mb-2">Chọn phương thức thanh toán</label>
        <div className="bg-gray-800 rounded-md p-2 mb-4 border border-gray-700">
          <input
            type="radio"
            name="paymentMethod"
            value="Net Banking"
            className="mr-2 transform scale-150"
            checked={selectedMethod === 'Net Banking'}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <span className="text-white">Ngân hàng trực tuyến <span className="text-yellow-500">₫ 7/giao dịch</span></span>
        </div>
        <div className="bg-gray-800 rounded-md p-2 mb-4 border border-gray-700">
          <input
            type="radio"
            name="paymentMethod"
            value="UPI"
            className="mr-2 transform scale-150"
            checked={selectedMethod === 'UPI'}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <label className="text-white">UPI <span className="text-green-500">Không phí</span></label>
        </div>
        <div className="bg-gray-800 rounded-md p-2 mb-4 border border-gray-700">
          <input
            type="radio"
            name="paymentMethod"
            value="Momo"
            className="mr-2 transform scale-150"
            checked={selectedMethod === 'Momo'}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <label className="text-white">Momo <span className="text-green-500">Không phí</span></label>
        </div>
        <div className="bg-gray-800 rounded-md p-2 mb-4 border border-gray-700">
          <input
            type="radio"
            name="paymentMethod"
            value="ZaloPay"
            className="mr-2 transform scale-150"
            checked={selectedMethod === 'ZaloPay'}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <label className="text-white">ZaloPay <span className="text-green-500">Không phí</span></label>
        </div>
        <div className="bg-gray-800 rounded-md p-2 border border-gray-700">
          <input
            type="radio"
            name="paymentMethod"
            value="NEFT/IMPS/RTGS"
            className="mr-2 transform scale-150"
            checked={selectedMethod === 'NEFT/IMPS/RTGS'}
            onChange={(e) => setSelectedMethod(e.target.value)}
          />
          <label className="text-white">NEFT/IMPS/RTGS <span className="text-orange-500">Phí tùy thuộc vào ngân hàng</span></label>
        </div>
      </div>

      <button
        className={`w-full text-white font-bold py-2 px-4 rounded focus:outline-none ${amount && selectedMethod ? 'bg-green-500' : 'bg-gray-500 cursor-not-allowed'}`} disabled={!amount || !selectedMethod}
        onClick={handleDeposit}
      >
        Xác nhận thanh toán
      </button>
    </div>
  );
};

export default DepositFunds;
