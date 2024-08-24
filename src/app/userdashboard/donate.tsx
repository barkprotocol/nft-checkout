'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/card';
import { usePublicKey } from '@/components/context/PublicKeyContext';
import { DonationInput, ParticipantInput } from '@/types/donation';

const Donate: React.FC = () => {
  const publicKey = usePublicKey();
  const [donation, setDonation] = useState<DonationInput>({
    address: '',
    donationDate: new Date(),
    totalParticipants: 1,
    bountyAmount: 0,
  });
  const [participant, setParticipant] = useState<ParticipantInput>({
    name: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleDonationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setDonation((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const handleParticipantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setParticipant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!publicKey) {
      setError('Public key is missing. Please log in again.');
      setLoading(false);
      return;
    }

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...donation, participant, publicKey }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit donation');
      }

      const result = await response.json();
      setSuccess('Donation submitted successfully!');
      
      // Reset form fields
      setDonation({
        address: '',
        donationDate: new Date(),
        totalParticipants: 1,
        bountyAmount: 0,
      });
      setParticipant({ name: '' });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-4 sm:p-8 lg:p-16'>
      {/* Navigation Header */}
      <nav className='flex flex-row justify-between mb-8 items-center'>
        <h4 className='text-4xl font-bold'>
          <span className='text-red-600'>Bark</span>AID
        </h4>
      </nav>

      {/* Donation Form Card */}
      <Card title="Make a Donation" className="mb-8">
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Address</label>
            <input
              type="text"
              name="address"
              value={donation.address}
              onChange={handleDonationChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Donation Date</label>
            <input
              type="date"
              name="donationDate"
              value={donation.donationDate.toISOString().split('T')[0]}
              onChange={(e) => setDonation({ ...donation, donationDate: new Date(e.target.value) })}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Total Participants</label>
            <input
              type="number"
              name="totalParticipants"
              value={donation.totalParticipants}
              onChange={handleDonationChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
              min="1"
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Bounty Amount</label>
            <input
              type="number"
              name="bountyAmount"
              value={donation.bountyAmount}
              onChange={handleDonationChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
              min="0"
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>Participant Name</label>
            <input
              type="text"
              name="name"
              value={participant.name}
              onChange={handleParticipantChange}
              className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              required
            />
          </div>
          <button
            type="submit"
            className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Donation'}
          </button>
          {error && <p className='text-red-600 mt-4'>{error}</p>}
          {success && <p className='text-green-600 mt-4'>{success}</p>}
        </form>
      </Card>
    </div>
  );
};

export default Donate;
