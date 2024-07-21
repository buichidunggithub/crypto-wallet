import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CoinList from './Pages/CoinList';
import Deposit from './Pages/Deposit';
import Withdraw from './Pages/Withdraw';
import { Coin } from './types';
import Transactions from './Pages/Transactions';
import TransactionStatus from './Pages/TransactionStatus';
import BuySuccess from './Pages/BuySuccess';
import Account from './Pages/Account';
import DepositFunds from './Pages/DepositFunds';
import WithdrawFunds from './Pages/WithdrawFunds';
import Header from './components/Header';
import PaymentMethods from './Pages/PaymentMethods';
import TransactionConfirmation from './Pages/TransactionConfirmation';
import TransactionDetails from './Pages/TransactionDetails';

const App: React.FC = () => {
  const [coins] = React.useState<Coin[]>([
    { name: 'Bitcoin', price: 30000, logo: '' },
    {
      name: 'Ethereum', price: 2000,
      logo: ''
    },
    {
      name: 'Ripple', price: 0.5,
      logo: ''
    },
    {
      name: 'Litecoin', price: 150,
      logo: ''
    },
    {
      name: 'Bitcoin Cash', price: 500,
      logo: ''
    },
    {
      name: 'Cardano', price: 1.2,
      logo: ''
    },
    {
      name: 'Polkadot', price: 15,
      logo: ''
    },
    {
      name: 'Binance Coin', price: 300,
      logo: ''
    },
    {
      name: 'Chainlink', price: 25,
      logo: ''
    },
    {
      name: 'Stellar', price: 0.3,
      logo: ''
    },
    {
      name: 'Dogecoin', price: 0.05,
      logo: ''
    },
    {
      name: 'Uniswap', price: 20,
      logo: ''
    },
    {
      name: 'VeChain', price: 0.1,
      logo: ''
    },
    {
      name: 'Theta', price: 8,
      logo: ''
    },
    {
      name: 'TRON', price: 0.07,
      logo: ''
    },
    {
      name: 'EOS', price: 4,
      logo: ''
    },
    {
      name: 'Monero', price: 250,
      logo: ''
    },
    {
      name: 'Tezos', price: 4,
      logo: ''
    },
    {
      name: 'Cosmos', price: 20,
      logo: ''
    },
    {
      name: 'Aave', price: 300,
      logo: ''
    },
  ]);

  const [balance, setBalance] = useState<number>(1000); // Giả sử số dư ban đầu là 1000 BTC

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="p-4 flex justify-center items-center py-2">
          <Routes>
            <Route path="/" element={<CoinList coins={coins} balance={balance} />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transaction-status" element={<TransactionStatus />} />
            <Route path="/transaction-confirmation" element={<TransactionConfirmation />} />
            <Route path="/transaction-details" element={<TransactionDetails />} />
            <Route path="/buy-success" element={<BuySuccess balance={balance}/>} />
            <Route path="/account" element={<Account />} />
            <Route path="/deposit-funds" element={<DepositFunds />} />
            <Route path="/withdraw-funds" element={<WithdrawFunds />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
          </Routes>
        </div>
        {/* <div className="flex justify-center mt-4">
          <Link to="/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </Link>
        </div> */}
      </div>
    </Router>
  );
};

export default App;
