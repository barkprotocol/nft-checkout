import { usePublicKey } from '@/components/context/PublicKeyContext';
import React from 'react';

const UserDonation: React.FC = () => {
    const publicKey = usePublicKey();

    // Display a loading state if publicKey is being fetched
    if (publicKey === undefined) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <h1 className='text-lg'>Loading...</h1>
            </div>
        );
    }

    // Display a message if the publicKey is not available
    if (!publicKey) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <h1 className='text-lg'>No Public Key Available</h1>
            </div>
        );
    }

    // Display the publicKey
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <h1 className='text-lg'>{publicKey}</h1>
        </div>
    );
}

export default UserDonation;
