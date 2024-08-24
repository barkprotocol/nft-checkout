'use client';

import React from 'react';
import { cn } from '@/lib/utils';

// Define prop types for the Card component
interface CardProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

// Define the Card component
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ title, content, className = '', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white shadow-md rounded-lg border border-gray-200 p-4',
          className
        )}
        {...props}
        role="region"
        aria-labelledby={`${title}-title`}
      >
        {/* Title with unique ID for accessibility */}
        <h2 id={`${title}-title`} className='text-xl font-semibold mb-2'>
          {title}
        </h2>
        {/* Content area */}
        <div>{content}</div>
      </div>
    );
  }
);

// Setting displayName for debugging purposes
Card.displayName = 'Card';

export default Card;
