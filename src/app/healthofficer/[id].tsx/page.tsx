import React, { useEffect, useState } from 'react';

// Define a type for the donation data
interface Donation {
  id: number;
  address: string;
  donationDate: string;
  totalParticipants: number;
  bountyAmount: number;
}

const DonationListing = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the donation data from the API
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Donation Listings</h1>
      {donations.length === 0 ? (
        <p>No donations found</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Donation Date</th>
              <th>Total Participants</th>
              <th>Bounty Amount</th>
            </tr>
          </thead>
          <tbody>
            {donations.map(donation => (
              <tr key={donation.id}>
                <td>{donation.id}</td>
                <td>{donation.address}</td>
                <td>{new Date(donation.donationDate).toLocaleDateString()}</td>
                <td>{donation.totalParticipants}</td>
                <td>{donation.bountyAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DonationListing;
