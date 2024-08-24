// types/participant.ts

export interface ParticipantInput {
    id: string;                      // Unique identifier for the participant
    name: string;                   // Name of the participant
    email?: string;                 // Optional email address for contact purposes
    phoneNumber?: string;           // Optional phone number for contact purposes
    age?: number;                   // Optional age of the participant
    donationAmount?: number;        // Optional amount of donation made by the participant
    registrationDate: Date;         // Date when the participant registered
  }
  