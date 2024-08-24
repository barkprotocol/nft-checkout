import { NextResponse, NextRequest } from 'next/server';
import { protectedRoutes } from './config/routes';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = url.pathname;

  // Assuming you have a way to check if the user is authenticated
  const isAuthenticated = // Logic to check user authentication

  if (protectedRoutes.includes(path) && !isAuthenticated) {
    url.pathname = '/login'; // Redirect to login page
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'], // Match the protected routes
};
