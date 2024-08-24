'use client';

import React from 'react';
import { Card } from '@/components/ui/card'; // Ensure this import path is correct
import { Button } from '@/components/ui/button'; // Ensure this import path is correct

const Dashboard: React.FC = () => {
  return (
    <div className='flex flex-col p-4 sm:p-8 lg:p-16 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6 text-gray-900'>Dashboard</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {/* Metric Card 1 */}
        <Card title="Total Donations" className="bg-blue-50 border-blue-200">
          <p className='text-2xl font-semibold text-gray-800'>124</p>
        </Card>

        {/* Metric Card 2 */}
        <Card title="Upcoming Events" className="bg-green-50 border-green-200">
          <p className='text-2xl font-semibold text-gray-800'>5</p>
        </Card>

        {/* Metric Card 3 */}
        <Card title="Pending Requests" className="bg-yellow-50 border-yellow-200">
          <p className='text-2xl font-semibold text-gray-800'>8</p>
        </Card>
      </div>

      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl'>
        <h2 className='text-xl font-semibold mb-4 text-gray-900'>Recent Activities</h2>
        <ul className='space-y-4'>
          {/* Activity Item 1 */}
          <li className='p-4 bg-gray-50 rounded-md shadow-sm'>
            <p className='text-sm text-gray-600'>Donated blood on August 15, 2024</p>
          </li>

          {/* Activity Item 2 */}
          <li className='p-4 bg-gray-50 rounded-md shadow-sm'>
            <p className='text-sm text-gray-600'>Registered for a new event on August 20, 2024</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
