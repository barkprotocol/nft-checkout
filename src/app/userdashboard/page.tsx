'use client';

import { usePublicKey } from '@/components/context/PublicKeyContext';
import React from 'react';

const UserDashboard = () => {
  // Retrieve the public key from the context
  const publicKey = usePublicKey();

  return (
    <div>
      {/* Navigation Header */}
      <nav className='flex flex-row justify-between px-16 py-5 items-center'>
        <h4 className='text-4xl font-bold'>
          <span className='text-red-600'>Bark</span>AID
        </h4>
        {/* Conditional rendering for public key */}
        <h3>{publicKey ? publicKey : 'Public Key not available'}</h3>
      </nav>
    </div>
  );
}

export default UserDashboard;
