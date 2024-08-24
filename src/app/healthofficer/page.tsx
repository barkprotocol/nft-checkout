'use client';

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

const HealthOfficer: React.FC = () => {
  return (
    <div className='flex flex-col items-stretch justify-center p-5 space-y-6'>
      {/* Header Section */}
      <div className='flex flex-row items-center justify-between px-5 py-2'>
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
          <Button 
            className="w-full bg-red-600 text-white border-2 border-transparent hover:border-red-600 hover:bg-white hover:text-red-600 transition-colors duration-300"
            aria-label="Create Donation Listing"
          >
            Create Donation Listing
          </Button>
        </DialogTrigger>
        <DialogContent 
          className="w-full max-w-lg rounded-md border-2 border-red-600 p-4 lg:w-full"
          aria-labelledby="dialog-title"
        >
          <DialogHeader>
            <DialogTitle id="dialog-title">Blood Donation Listing</DialogTitle>
          </DialogHeader>
          <Separator />
          {/* Component for Creating Donation Listing */}
          <CreateDonationList />
          <Separator />
          <DialogDescription>
            This will be an official Blood Donation Listing. Ensure all information is accurate before submission.
          </DialogDescription>
          <DialogFooter>
            {/* Optionally, you can add footer buttons like Cancel or Save here */}
            <Button
              type="button"
              className="mr-2 bg-gray-300 text-black border-transparent hover:bg-gray-400"
              aria-label="Cancel"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-red-600 text-white border-transparent hover:bg-red-700"
              aria-label="Save"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HealthOfficer;
