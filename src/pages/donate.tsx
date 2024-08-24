'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust import path
import { Button } from '../components/ui/button'; // Adjust import path
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../components/ui/dialog'; // Adjust import path
import { CreateDonationList } from '../components/reusables/CreateDonationList'; // Adjust import path
import { Separator } from '../components/ui/separator'; // Adjust import path

const Donate: React.FC = () => {
  const [donation, setDonation] = useState({
    address: '',
    donationDate: '',
    totalParticipants: 1,
    bountyAmount: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation Details:', donation);
    // Additional logic for submission can be added here
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex flex-col items-center p-4 sm:p-8 lg:p-16 bg-gray-50 flex-1'>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-lg'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-900'>Make a Donation</h2>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="address" className='block text-sm font-medium text-gray-700 mb-2'>Address</label>
              <input
                id="address"
                type="text"
                name="address"
                value={donation.address}
                onChange={(e) => setDonation(prev => ({ ...prev, address: e.target.value }))}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                placeholder='Enter your address'
                required
              />
            </div>
            <div>
              <label htmlFor="donationDate" className='block text-sm font-medium text-gray-700 mb-2'>Donation Date</label>
              <input
                id="donationDate"
                type="date"
                name="donationDate"
                value={donation.donationDate}
                onChange={(e) => setDonation(prev => ({ ...prev, donationDate: e.target.value }))}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
            <div>
              <label htmlFor="totalParticipants" className='block text-sm font-medium text-gray-700 mb-2'>Total Participants</label>
              <input
                id="totalParticipants"
                type="number"
                name="totalParticipants"
                value={donation.totalParticipants}
                onChange={(e) => setDonation(prev => ({ ...prev, totalParticipants: parseInt(e.target.value, 10) }))}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
            <div>
              <label htmlFor="bountyAmount" className='block text-sm font-medium text-gray-700 mb-2'>Bounty Amount</label>
              <input
                id="bountyAmount"
                type="number"
                name="bountyAmount"
                value={donation.bountyAmount}
                onChange={(e) => setDonation(prev => ({ ...prev, bountyAmount: parseFloat(e.target.value) }))}
                className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                required
              />
            </div>
            <Button
              type="submit"
              className='w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all'
            >
              Donate
            </Button>
          </form>

          {/* Example of using Dialog component */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className='mt-4'>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Donation Summary</DialogTitle>
                <DialogDescription>
                  <CreateDonationList donation={donation} />
                </DialogDescription>
              </DialogHeader>
              <Separator />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Donate;
