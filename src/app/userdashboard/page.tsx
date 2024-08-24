'use client';

import React from 'react';
import { usePublicKey } from '@/components/context/PublicKeyContext';
import Card from '@/components/ui/card';
import Link from 'next/link';

const UserDashboard: React.FC = () => {
  // Retrieve the public key from the context
  const publicKey = usePublicKey();

  return (
    <div className='p-4 sm:p-8 lg:p-16 bg-gray-100 min-h-screen'>
      {/* Navigation Header */}
      <nav className='flex flex-col md:flex-row md:justify-between mb-8 items-center'>
        {/* Logo and Navigation Links */}
        <div className='flex items-center mb-4 md:mb-0'>
          <h4 className='text-4xl font-bold'>
            <span className='text-red-600'>Bark</span>AID
          </h4>
          <ul className='flex space-x-4 md:ml-8'>
            <li>
              <Link href="/dashboard" className='text-lg font-medium hover:text-red-600'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/donate" className='text-lg font-medium hover:text-red-600'>
                Donate
              </Link>
            </li>
            <li>
              <Link href="/profile" className='text-lg font-medium hover:text-red-600'>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/settings" className='text-lg font-medium hover:text-red-600'>
                Settings
              </Link>
            </li>
          </ul>
        </div>
        {/* Conditional rendering for public key */}
        <h3 className='text-lg font-medium'>
          {publicKey ? `Public Key: ${publicKey}` : 'Public Key not available'}
        </h3>
      </nav>

      {/* User Info Card */}
      <Card 
        title="User Information" 
        content={
          <div className='space-y-2'>
            <p><strong>Public Key:</strong> {publicKey || 'Not available'}</p>
            {/* Add more user-related details here */}
            {/* Example: */}
            {/* <p><strong>Username:</strong> John Doe</p> */}
            {/* <p><strong>Email:</strong> john.doe@example.com</p> */}
          </div>
        } 
      />

      {/* Additional Cards */}
      <div className='mt-8 space-y-4'>
        <Card 
          title="Donation History" 
          content={
            <div className='space-y-2'>
              {/* Replace with real donation history data */}
              {/* Example: */}
              {/* <ul>
                <li>Donation on April 15, 2023 - 500ml</li>
                <li>Donation on June 10, 2023 - 300ml</li>
              </ul> */}
              <p>No donation history available.</p>
            </div>
          } 
        />
        
        <Card 
          title="Upcoming Events" 
          content={
            <div className='space-y-2'>
              {/* Replace with real event data */}
              {/* Example: */}
              {/* <ul>
                <li>Blood Drive at Central Park - August 10, 2024</li>
                <li>Charity Gala at City Hall - September 15, 2024</li>
              </ul> */}
              <p>No upcoming events.</p>
            </div>
          } 
        />
      </div>
    </div>
  );
};

export default UserDashboard;
