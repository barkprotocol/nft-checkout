'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/card';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    theme: 'light', // Example setting
    notifications: true, // Example setting
    solanaWalletAddress: '', // New setting for Solana wallet address
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle settings update
    console.log('Updated Settings:', settings);
    // Example: Send settings to an API or update context
  };

  return (
    <div className='p-4 sm:p-8 lg:p-16 bg-gray-100 min-h-screen'>
      {/* Navigation Header */}
      <nav className='flex flex-row justify-between mb-8 items-center'>
        <h4 className='text-4xl font-bold'>
          <span className='text-red-600'>Bark</span>AID
        </h4>
      </nav>

      {/* Settings Form Card */}
      <Card title="Settings" className="bg-white shadow-md">
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor="theme" className='block text-sm font-medium text-gray-700'>Theme</label>
            <select
              id="theme"
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div className='flex items-center'>
            <input
              id="notifications"
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
              className='mr-2'
            />
            <label htmlFor="notifications" className='text-sm font-medium text-gray-700'>
              Enable Notifications
            </label>
          </div>
          <div>
            <label htmlFor="solanaWalletAddress" className='block text-sm font-medium text-gray-700'>Solana Wallet Address</label>
            <input
              id="solanaWalletAddress"
              type="text"
              name="solanaWalletAddress"
              value={settings.solanaWalletAddress}
              onChange={handleChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              placeholder="Enter your Solana wallet address"
              required
            />
          </div>
          <button
            type="submit"
            className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Save Settings
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Settings;
