'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateDonationList } from '@/components/reusables/CreateDonationList';
import { Separator } from '@/components/ui/separator';
import HealthOfficerDropdown from '@/components/reusables/HealthOfficerDropdown';

const HealthOfficer = () => {
  return (
    <div className='flex flex-col items-stretch justify-center p-5'>
      {/* Header Section */}
      <div className='flex flex-row items-center justify-between w-full px-5 py-2'>
        <h5 className='text-lg font-bold'>
          <span className='text-red-600'>Bark</span>Aid
        </h5>
        <HealthOfficerDropdown />
      </div>
      
      {/* Content Section */}
      <div className='px-5'>
        {/* Additional content or components can be added here */}
      </div>
      
      {/* Dialog for Creating Donation Listing */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-red-600 text-white border-2 border-transparent hover:border-red-600 hover:bg-white hover:text-red-600">
            Create Donation Listing
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[350px] rounded-md lg:w-full border-2 border-red-600">
          <DialogHeader>
            <DialogTitle>Blood Donation Listing</DialogTitle>
          </DialogHeader>
          <Separator />
          {/* Component for Creating Donation Listing */}
          <CreateDonationList />
          <Separator />
          <DialogDescription>
            This will be an Official Blood Donation Listing.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default HealthOfficer;
