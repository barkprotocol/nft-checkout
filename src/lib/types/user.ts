export type UserType = {
    id: string;                  // Unique identifier for the user
    username: string;            // Username or display name
    email: string;               // User's email address
    firstName?: string;          // Optional first name
    lastName?: string;           // Optional last name
    createdAt: Date;             // When the user was created
    updatedAt: Date;             // Last update time of the user record
    isActive: boolean;           // Whether the user account is active
    role?: 'admin' | 'user' | 'guest'; // User role or permissions
    profilePicture?: string;     // URL to the user's profile picture
    address?: {                  // Optional address information
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    phoneNumber?: string;        // Optional phone number
    dateOfBirth?: Date;          // Optional date of birth
    preferences?: {              // Optional user preferences
      theme: 'light' | 'dark';   // Preferred theme
      notifications: boolean;   // Whether notifications are enabled
    };
    socialLinks?: {              // Optional social media links
      twitter?: string;
      facebook?: string;
      linkedin?: string;
      instagram?: string;
    };
  }
  