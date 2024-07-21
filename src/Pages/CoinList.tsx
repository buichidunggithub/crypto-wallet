import React from 'react';
import { Coin } from '../types';
import { useNavigate } from 'react-router-dom';

interface CoinListProps {
  coins: Coin[];
  balance: number;
}

const CoinList: React.FC<CoinListProps> = ({ coins, balance }) => {
  const navigate = useNavigate();

  const handleBuy = (coin: Coin) => {
    navigate('/deposit', { state: { coin } });
  };
  
  const handleSell = (coin: Coin) => {
    navigate('/withdraw', { state: { coin } });
  };

  const handleDeposit = () => {
    navigate('/deposit-funds');
  };

  const handleWithdraw = () => {
    navigate('/withdraw-funds');
  };

  return (
    <div className="w-full mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4 text-center">Crypto Wallet</h1> */}

      <div className="bg-gray-900 text-white p-4 mb-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Tổng số dư</h2>
            <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeposit}
          >
            Nạp tiền
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleWithdraw}
          >
            Rút tiền
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-3 px-4 bg-gray-200 font-semibold text-sm text-gray-600">Coin</th>
              <th className="py-3 px-4 bg-gray-200 font-semibold text-sm text-gray-600">Price</th>
              <th className="py-3 px-4 bg-gray-200 font-semibold text-sm text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.name} className="text-center">
                <td className="border-t py-3 px-4">{coin.name}</td>
                <td className="border-t py-3 px-4">${coin.price}</td>
                <td className="border-t py-3 px-4 flex justify-center space-x-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                    onClick={() => handleBuy(coin)}
                  >
                    Buy
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    onClick={() => handleSell(coin)}
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinList;
