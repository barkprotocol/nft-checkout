'use client'

import React from 'react';
import { format } from 'date-fns';

export interface DLCProps {
  id: string;
  address: string;
  donationDate: Date;
  totalParticipants: string;
  bountyAmount: string;
}

export interface DonationListCardProps {
  donations: DLCProps[];
}

const DonationListCard: React.FC<DonationListCardProps> = ({ donations }) => {
  if (donations.length === 0) {
    return <p className="text-center text-gray-500">No donations available.</p>;
  }

  return (
    <div className="donation-list">
      {donations.map((donation) => (
        <div key={donation.id} className="donation-card">
          <h3 className="text-xl font-semibold">Donation ID: {donation.id}</h3>
          <p><strong>Address:</strong> {donation.address}</p>
          <p><strong>Donation Date:</strong> {format(new Date(donation.donationDate), 'MMMM d, yyyy')}</p>
          <p><strong>Total Participants:</strong> {donation.totalParticipants}</p>
          <p><strong>Bounty Amount:</strong> {donation.bountyAmount}</p>
        </div>
      ))}
    </div>
  );
}

export default DonationListCard;
