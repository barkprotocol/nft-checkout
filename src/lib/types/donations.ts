export interface DonationInput {
    address: string;                // Address where the donation is made
    donationDate: Date;            // Date of the donation
    totalParticipants: number;     // Number of participants in the donation
    bountyAmount: number;          // Amount of bounty associated with the donation
  }
  
  export interface ParticipantInput {
    name: string;                  // Name of the participant
  }
  