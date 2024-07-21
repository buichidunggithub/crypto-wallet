import React, { useState } from 'react';

const Account: React.FC = () => {
  const [bankName, setBankName] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');

  const handleChangePassword = () => {
    // Logic để thay đổi mật khẩu
    alert('Password change feature coming soon');
  };

  const handleDeleteAccount = () => {
    // Logic để xóa tài khoản
    alert('Account deletion feature coming soon');
  };

  return (
    <div className="p-4 w-full h-full bg-gray-100 text-black shadow-md rounded-lg md:max-w-xl md:mx-auto lg:max-w-2xl lg:p-6">
      <h1 className="text-2xl font-bold mb-6">Account</h1>
      
      {/* Personal Info Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Personal Info</h2>
        <div className="flex items-center mb-4">
          <img src="profile-photo-url" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <p className="text-lg">Name: John Doe</p>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        </div>
      </div>

      {/* Bank Info Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Bank Info</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Bank Name</label>
          <input
            type="text"
            className="w-full p-2 bg-white rounded-md border border-gray-300"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">IFSC</label>
          <input
            type="text"
            className="w-full p-2 bg-white rounded-md border border-gray-300"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Account Holder Name</label>
          <input
            type="text"
            className="w-full p-2 bg-white rounded-md border border-gray-300"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
          />
        </div>
      </div>

      {/* Other Options Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Other Options</h2>
        <div className='flex justify-between'>
          <button
            className="bg-yellow-500 text-black font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
          <button
            className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
