import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentChoices from '../components/PaymentChoices';
import { ModalConfirm } from '../components/ModalConfirm';

const WithdrawFunds: React.FC = () => {
  const [amount, setAmount] = useState<number | undefined>();
  const [selectedBank, setSelectedBank] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleWithdraw = () => {
    navigate('/transaction-confirmation', {
      state: { type: 'deposit', amount, method: selectedBank },
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="p-8 w-full bg-gray-900 text-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => navigate(-1)} className="focus:outline-none">
          <span className="text-yellow-500 text-2xl">&larr;</span>
        </button>
        <h1 className="text-xl font-bold">Chọn phương thức thanh toán</h1>
        <button className="focus:outline-none">
          <span className="text-yellow-500 text-xl">?</span>
        </button>
      </div>

      <div className="my-10 justify-center">
        <div className='flex justify-center'>
          <span className="text-gray-400 mb-2">Bạn sẽ nhận được</span>
        </div>
        <div className='flex justify-center'>
          <span className="text-gray-400 mb-2 text-5xl"> 999,220 </span>
        </div>
      </div>

      <div className='mb-2'>
        <PaymentChoices />
      </div>

      <div className='mt-10'>
        <hr className="border-t border-gray-700 my-2" />
        <div className='flex justify-between'>
          <div className='px-2'>
            <span>Bạn sẽ trả</span>
            <p className="text-yellow-500 text-2xl"> 999,220 BTC</p>
          </div>
          <div className='flex justify-center p-4'>
            <button onClick={() => setIsModalOpen(true)} className="bg-yellow-200 hover:bg-yellow-400 text-black font-semibold py-2 px-8 rounded-full">
              Confirm
            </button>
          </div>
        </div>
        <ModalConfirm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default WithdrawFunds;
