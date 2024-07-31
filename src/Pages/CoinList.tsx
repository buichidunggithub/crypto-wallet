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

  return (
    <div className="w-full mx-auto">
      {/* <h1 className="text-2xl font-bold mb-4 text-center">Crypto Wallet</h1> */}

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
