import React from 'react';
import useConfirm from './hooks/useConfirm';
import CustomModal from './components/CustomModal';
import './App.css';

const App = () => {
  const [confirm, ConfirmationDialog] = useConfirm(CustomModal);

  const handleDeleteItem = async () => {
    try {
      await confirm({
        title: 'Delete Item',
        message: 'Are you sure you want to delete this item?',
      });
      console.log('Item deleted');
    } catch {
      console.log('Delete canceled');
    }
  };

  const handleSubmitForm = async () => {
    try {
      await confirm({
        title: 'Submit Form',
        message: 'Are you sure you want to submit this form?',
      });
      console.log('Form submitted');
    } catch {
      console.log('Submit canceled');
    }
  };

  const handleLogout = async () => {
    try {
      await confirm({
        title: 'Logout',
        message: 'Are you sure you want to logout?',
      });
      console.log('User logged out');
    } catch {
      console.log('Logout canceled');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">useConfirm Hook Demo</h1>
      <div className="space-y-4">
        <button
          onClick={handleDeleteItem}
          className="w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Delete Item
        </button>
        <button
          onClick={handleSubmitForm}
          className="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Submit Form
        </button>
        <button
          onClick={handleLogout}
          className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
        >
          Logout
        </button>
      </div>
      <ConfirmationDialog />
    </div>
  );
};

export default App;
