import React, { useState } from 'react';
import { FaArrowLeft, FaCopy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Transaction {
  id: string;
  amount: number;
  timestamp: string;
}

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', amount: 100, timestamp: '2023-07-01 10:00:00' },
    { id: '2', amount: -50, timestamp: '2023-07-02 12:30:00' },
    { id: '3', amount: 200, timestamp: '2023-07-03 14:45:00' },
    { id: '4', amount: -150, timestamp: '2023-07-04 09:20:00' },
  ]);

  const handleSearch = () => {
    // Implement search logic here
  };

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    alert('Transaction ID copied to clipboard!');
  };

  const filteredTransactions = transactions.filter(transaction => {
    const date = new Date(transaction.timestamp);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
    return (
      (!from || date >= from) &&
      (!to || date <= to) &&
      (!searchTerm || transaction.id.includes(searchTerm))
    );
  });

  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/'); // Quay lại trang trước đó
  };

  return (
    <div className="p-4 bg-gray-900 text-white shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-4">
          {/* <button onClick={handleBack} className="focus:outline-none">
            <FaArrowLeft className="text-yellow-500" size={24} />
          </button> */}
          <h2 className="text-xl font-bold mb-2">Transactions</h2>
          {/* <button className="focus:outline-none">
            <FaCog className="text-yellow-500" size={24} />
          </button> */}
        </div>
        
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by ID"
            className="flex-grow p-2 bg-gray-800 rounded-md text-white mr-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="date"
            className="p-2 bg-gray-800 rounded-md text-white mr-2"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <input
            type="date"
            className="p-2 bg-gray-800 rounded-md text-white mr-2"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {filteredTransactions.map(transaction => (
          <div key={transaction.id} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md">
            <div>
              <div className={`font-bold ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.amount > 0 ? `Deposit: +${transaction.amount}` : `Withdraw: ${transaction.amount}`}
              </div>
              <div className="text-gray-400">{transaction.timestamp}</div>
            </div>
            <button
              className="focus:outline-none"
              onClick={() => handleCopy(transaction.id)}
            >
              <FaCopy className="text-yellow-500" size={24} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
