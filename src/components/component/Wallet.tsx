'use client';

import {
  WalletProvider,
  ConnectionProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  SolflareWalletAdapter,
  // AlphaWalletAdapter,
  // LedgerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { FC, useMemo } from 'react';

import '@solana/wallet-adapter-react-ui/styles.css';

type Props = {
  children?: React.ReactNode;
};

export const Wallet: FC<Props> = ({ children }) => {
  // Define your RPC endpoint
  const endpoint = process.env.NEXT_PUBLIC_SOLANA_ENDPOINT || 'https://api.testnet.solana.com'; // Use environment variable

  // Define the list of wallets
  const wallets = useMemo(
    () => [
      new SolflareWalletAdapter(),
      // new AlphaWalletAdapter(), // Uncomment and configure if needed
      // new LedgerWalletAdapter(), // Uncomment and configure if needed
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
