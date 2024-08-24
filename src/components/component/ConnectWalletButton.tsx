'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation';

const WalletMultiButtonDynamic = dynamic(() =>
    import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
    { ssr: false }
);

const ConnectWalletButton = () => {
  const [hasPublicKey, setHasPublicKey] = useState(false);
  const router = useRouter();
  const { connected, publicKey } = useWallet(); // Use destructuring here

  useEffect(() => {
    if (connected && publicKey) {
      setHasPublicKey(true);
      router.push('/userdashboard');
    } else {
      setHasPublicKey(false);
    }
  }, [connected, publicKey, router]); // Ensure `publicKey` is included

  return (
    <div className='w-72'>
      <WalletMultiButtonDynamic className='w-full'>
        {hasPublicKey ? `${publicKey.toBase58().substring(0, 8)}...` : "Connect Wallet"}
      </WalletMultiButtonDynamic>
    </div>
  );
};

export default ConnectWalletButton;
