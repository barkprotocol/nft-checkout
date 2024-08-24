import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter for active link styles

const Navbar: React.FC = () => {
  const { pathname } = useRouter(); // Get the current route

  // Helper function to check if the link is active
  const isActive = (path: string) => pathname === path ? 'text-gray-900 font-semibold' : 'text-gray-700 hover:text-gray-900';

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        <h1 className='text-2xl font-bold text-gray-900'>
          <span className='text-red-600'>Bark</span>AID
        </h1>
        <div className='space-x-4'>
          <Link href="/dashboard" className={isActive('/dashboard')}>
            Dashboard
          </Link>
          <Link href="/profile" className={isActive('/profile')}>
            Profile
          </Link>
          <Link href="/settings" className={isActive('/settings')}>
            Settings
          </Link>
          <Link
            href="/donate"
            className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700'
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
