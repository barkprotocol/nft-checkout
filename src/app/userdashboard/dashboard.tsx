'use client';

import React, { useState, useEffect } from 'react';
import Card from '@/components/ui/card';
import { usePublicKey } from '@/components/context/PublicKeyContext';
import { DonationInput, ParticipantInput } from '@/types/donation';

const UserDashboard: React.FC = () => {
  const publicKey = usePublicKey();
  
  const [donationHistory, setDonationHistory] = useState<DonationInput[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<{ name: string; date: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const donationResponse = await fetch('/api/donations');
        const eventResponse = await fetch('/api/events');

        if (!donationResponse.ok || !eventResponse.ok) {
          throw new Error('Failed to fetch data from the server.');
        }

        const donationData: DonationInput[] = await donationResponse.json();
        const eventData: { name: string; date: string }[] = await eventResponse.json();

        setDonationHistory(donationData);
        setUpcomingEvents(eventData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='p-4 sm:p-8 lg:p-16'>
        <div className='flex items-center justify-center min-h-screen'>
          <h1 className='text-lg'>Loading...</h1>
          {/* Consider adding a spinner or loading animation */}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-4 sm:p-8 lg:p-16'>
        <div className='flex items-center justify-center min-h-screen'>
          <h1 className='text-lg text-red-600'>Error: {error}</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='p-4 sm:p-8 lg:p-16'>
      {/* Navigation Header */}
      <nav className='flex flex-row justify-between mb-8 items-center'>
        <h4 className='text-4xl font-bold'>
          <span className='text-red-600'>Bark</span>AID
        </h4>
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
          </div>
        }
      />

      {/* Donation History Card */}
      <Card
        title="Donation History"
        content={
          <div className='space-y-2'>
            {donationHistory.length > 0 ? (
              <ul>
                {donationHistory.map((donation, index) => (
                  <li key={index}>
                    Donation on {new Date(donation.donationDate).toLocaleDateString()} - 
                    {donation.totalParticipants} participants, {donation.bountyAmount} bounty
                  </li>
                ))}
              </ul>
            ) : (
              <p>No donation history available.</p>
            )}
          </div>
        }
      />

      {/* Upcoming Events Card */}
      <Card
        title="Upcoming Events"
        content={
          <div className='space-y-2'>
            {upcomingEvents.length > 0 ? (
              <ul>
                {upcomingEvents.map((event, index) => (
                  <li key={index}>{event.name} - {new Date(event.date).toLocaleDateString()}</li>
                ))}
              </ul>
            ) : (
              <p>No upcoming events.</p>
            )}
          </div>
        }
      />
    </div>
  );
};

export default UserDashboard;
