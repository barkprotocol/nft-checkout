'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

// Create a context for the public key
const PublicKeyContext = createContext<string | null>(null);

export function PublicKeyProvider({ children }: { children: React.ReactNode }) {
    const { publicKey } = useWallet();
    const [storedPublicKey, setStoredPublicKey] = useState<string | null>(null);

    useEffect(() => {
        if (publicKey) {
            setStoredPublicKey(publicKey.toString());
        } else {
            setStoredPublicKey(null); // Clear the public key when it's not available
        }
    }, [publicKey]);

    return (
        <PublicKeyContext.Provider value={storedPublicKey}>
            {children}
        </PublicKeyContext.Provider>
    );
}

// Custom hook to use the public key context
export function usePublicKey() {
    return useContext(PublicKeyContext);
}
