import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WalletModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const connectMetaMask = async () => {
    // if (window.ethereum) {
    //   try {
    //     const web3 = new Web3(window.ethereum);
    //     await window.ethereum.request({ method: 'eth_requestAccounts' });
    //     // Web3 instance is available for further actions
    //     onClose();
    //   } catch (error) {
    //     console.error("MetaMask connection failed", error);
    //   }
    // } else {
    //   alert('MetaMask is not installed!');
    // }
    alert('Connecting to MetaMask!');
  };

  const connectWalletConnect = async () => {
    // const provider = new WalletConnectProvider({
    //   infuraId: "YOUR_INFURA_ID", // Required
    // });

    // try {
    //   await provider.enable();
    //   const web3 = new Web3(provider);
    //   // Web3 instance is available for further actions
    //   onClose();
    // } catch (error) {
    //   console.error("WalletConnect connection failed", error);
    // }
    alert('Connecting to WalletConnect!');
  };

  // Add similar functions for other wallets if needed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-lg w-11/12 max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          X
        </button>
        <h2 className="text-xl font-bold mb-4">Connect your wallet</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full mb-4"
          onClick={connectMetaMask}
        >
          Connect with MetaMask
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full w-full mb-4"
          onClick={connectWalletConnect}
        >
          Connect with WalletConnect
        </button>
        {/* Add more buttons for other wallets */}
      </div>
    </div>
  );
};

export default WalletModal;
