import React from 'react';

const SuccessModal = ({ message, onClose, onNavigate }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <svg
            className="w-6 h-6 text-green-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-lg font-bold text-green-600">Success!</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onNavigate}
          >
            Sign In Now
          </button>
          <button
            className="ml-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
