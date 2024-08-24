import React, { useEffect, useState } from 'react';

interface Donation {
  id: number;
  address: string;
  donationDate: string;
  totalParticipants: number;
  bountyAmount: number;
}

const DonationListing: React.FC = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch('/api/donations'); // Adjust the endpoint as needed
        if (!response.ok) {
          throw new Error('Failed to fetch donations');
        }
        const data = await response.json();
        setDonations(data.donations);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  if (loading) {
    return (
      <div className='p-4 sm:p-8 lg:p-16'>
        <div className='flex items-center justify-center min-h-screen'>
          <h2 className='text-lg text-gray-600'>Loading donations...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-4 sm:p-8 lg:p-16'>
        <div className='flex items-center justify-center min-h-screen'>
          <h2 className='text-lg text-red-600'>Error: {error}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='p-4 sm:p-8 lg:p-16'>
      <h1 className='text-3xl font-bold mb-6'>Donation Listings</h1>
      {donations.length === 0 ? (
        <div className='flex items-center justify-center min-h-screen'>
          <p className='text-lg text-gray-600'>No donations found</p>
        </div>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' scope="col">ID</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' scope="col">Address</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' scope="col">Donation Date</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' scope="col">Total Participants</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' scope="col">Bounty Amount</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {donations.map(donation => (
                <tr key={donation.id} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{donation.id}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{donation.address}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{new Date(donation.donationDate).toLocaleDateString()}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{donation.totalParticipants}</td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{donation.bountyAmount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DonationListing;
