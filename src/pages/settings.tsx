'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust import path based on your directory structure
import { Button } from '../components/ui/button'; // Adjust import path

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    email: '',
    password: '',
    notifications: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings Updated:', settings);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-col items-center p-4 sm:p-8 lg:p-16 bg-gray-100 flex-1'>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-lg'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-900'>Account Settings</h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Enter your email'
                required
              />
            </div>
            <div>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={settings.password}
                onChange={handleChange}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Enter your new password'
              />
            </div>
            <div className='flex items-center'>
              <input
                id="notifications"
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
                className='mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
              />
              <label htmlFor="notifications" className='text-sm font-medium text-gray-700'>Enable Notifications</label>
            </div>
            <Button
              type="submit"
              className='w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all'
            >
              Save Changes
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
