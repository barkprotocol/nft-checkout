'use client';

import Link from 'next/link';
import ConnectWalletButton from './ConnectWalletButton';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '../../../public/logo.png';
import Image from 'next/image';

export function HomePage() {
  const [healthCode, setHealthCode] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const getHealthCode = process.env.NEXT_PUBLIC_OFFICER_CODE;
    if (getHealthCode && healthCode === getHealthCode) {
      router.push('/healthofficer');
    }
  }, [healthCode, router]);

  const handleDialogClose = () => {
    setHealthCode(''); // Clear the health code when dialog closes
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-md space-y-4 text-center flex flex-col items-center">
          <Image src={Logo} width={150} height={150} alt="BarkAID Logo" />
          <h1 className="text-4xl lg:text-7xl font-bold tracking-tighter">
            Welcome to <span className="text-red-600">Bark</span>AID
          </h1>
          <p className="text-muted-foreground">Donate blood and gain bounties.</p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <ConnectWalletButton />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-56">Health Officer</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Input Health Officer Code</DialogTitle>
                  <DialogDescription>
                    Only authorized persons can access this.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Label htmlFor="health-code" className="block text-left">
                    Health Code
                  </Label>
                  <Input
                    id="health-code"
                    value={healthCode}
                    onChange={(e) => setHealthCode(e.target.value)}
                    placeholder="Enter health code"
                    aria-labelledby="health-code"
                    className="w-full"
                  />
                </div>
                <DialogFooter className="sm:justify-start mt-4">
                  <DialogClose asChild>
                    <Button
                      variant="secondary"
                      className="w-full bg-red-600 text-white hover:bg-red-700 border-2 border-red-600"
                      onClick={handleDialogClose}
                    >
                      Proceed
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 BARK Protocol. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
