'use client';

import React, { useState, useEffect } from 'react';
import Card from '@/components/ui/card';
import { usePublicKey } from '@/components/context/PublicKeyContext';

const Profile: React.FC = () => {
  const publicKey = usePublicKey();
  const [profile, setProfile] = useState<{ username: string; email: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!publicKey) {
        setError('Public key is not available');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/profile?publicKey=${publicKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [publicKey]);

  if (loading) {
    return (
      <div className='p-4 sm:p-8 lg:p-16 flex items-center justify-center min-h-screen'>
        <h1 className='text-lg'>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-4 sm:p-8 lg:p-16 flex items-center justify-center min-h-screen'>
        <h1 className='text-lg text-red-600'>Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className='p-4 sm:p-8 lg:p-16 bg-gray-100 min-h-screen'>
      {/* Profile Header */}
      <nav className='flex flex-row justify-between mb-8 items-center'>
        <h4 className='text-4xl font-bold'>
          <span className='text-red-600'>Bark</span>AID
        </h4>
      </nav>

      {/* Profile Info Card */}
      <Card
        title="Profile Information"
        content={
          <div className='space-y-2'>
            {profile ? (
              <div>
                <p><strong>Username:</strong> {profile.username}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                {/* Add more profile-related details here */}
              </div>
            ) : (
              <p>No profile information available.</p>
            )}
          </div>
        }
      />

      {/* Edit Profile Button */}
      <div className='mt-8'>
        <button
          className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          onClick={() => alert('Edit profile functionality')}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
