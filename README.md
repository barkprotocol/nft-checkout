# BarkAid Application

BarkAid is a web application designed to manage and track blood donations. It allows users to view their donation history, upcoming events, and update their profile information. The application is built with Next.js and TypeScript, using modern React components and a backend API integrated with Prisma.

## Features

- **User Dashboard**: View donation history and upcoming events.
- **Profile Management**: View and edit user profile information.
- **Donation Listings**: Create and manage donation listings.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Typed superset of JavaScript for better development experience.
- **Prisma**: ORM for database management.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/barkprotocol/barkaid.git
    cd barkaid
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and configure the following environment variables:

    ```env
    DATABASE_URL=your_database_connection_string
    NEXT_PUBLIC_API_URL=http://localhost:3000/api
    ```

4. Set up the database:

    Run Prisma migrations to set up the database schema:

    ```bash
    npx prisma migrate dev
    ```

5. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:3000`.

## Usage

- **User Dashboard**: After logging in, you can access your dashboard to view donation history and upcoming events.
- **Profile Management**: Update your profile information by navigating to the profile page.
- **Donation Listings**: Create and manage donation listings via the provided interface.

## API Endpoints

- **GET /api/donations**: Fetches the list of donations.
- **GET /api/events**: Fetches upcoming events.
- **GET /api/profile**: Fetches user profile information based on the public key.
- **POST /api/donations**: Creates a new donation listing.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. Ensure that your changes are well-tested and adhere to the project's coding standards.

## License

MIT License. See the [LICENSE](LICENSE) file for details.

