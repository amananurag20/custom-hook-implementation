import React, { useState, useEffect } from 'react';

const Settings = ({ confirm }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggleDarkMode = async () => {
    try {
      await confirm({
        title: 'Toggle Dark Mode',
        message: `Are you sure you want to ${darkMode ? 'disable' : 'enable'} dark mode?`,
      });
      setDarkMode(!darkMode);
      console.log(`Dark mode ${darkMode ? 'disabled' : 'enabled'}`);
    } catch {
      console.log('Toggle canceled');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Settings</h2>
      <div className="flex items-center justify-between">
        <span className="text-gray-800 dark:text-white">Dark Mode</span>
        <button
          onClick={handleToggleDarkMode}
          className={`px-4 py-2 ${
            darkMode ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-800 hover:bg-gray-900'
          } text-white rounded transition-colors`}
        >
          {darkMode ? 'Disable' : 'Enable'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
