import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'nav';
  className?: string;
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseClass = 'button w-inline-block';
  const variantClass = variant === 'nav' ? 'for-nav' : '';
  
  return (
    <Link 
      href={href}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      <div className="text-style-1line">{children}</div>
      <div className="play_video_icon w-embed">
        <svg width="11" height="11" viewBox="0 0 13 12" fill="none">
          <path
            d="M6.50002 0.166687C3.28352 0.166687 0.666687 2.78352 0.666687 6.00002C0.666687 9.21652 3.28352 11.8334 6.50002 11.8334C9.71652 11.8334 12.3334 9.21652 12.3334 6.00002C12.3334 2.78352 9.71652 0.166687 6.50002 0.166687ZM6.50002 10.6667C3.92694 10.6667 1.83335 8.5731 1.83335 6.00002C1.83335 3.42694 3.92694 1.33335 6.50002 1.33335C9.0731 1.33335 11.1667 3.42694 11.1667 6.00002C11.1667 8.5731 9.0731 10.6667 6.50002 10.6667Z"
            fill="#181818"
          />
          <path
            d="M6.50002 0.166687C3.28352 0.166687 0.666687 2.78352 0.666687 6.00002C0.666687 9.21652 3.28352 11.8334 6.50002 11.8334C9.71652 11.8334 12.3334 9.21652 12.3334 6.00002C12.3334 2.78352 9.71652 0.166687 6.50002 0.166687ZM6.50002 10.6667C3.92694 10.6667 1.83335 8.5731 1.83335 6.00002C1.83335 3.42694 3.92694 1.33335 6.50002 1.33335C9.0731 1.33335 11.1667 3.42694 11.1667 6.00002C11.1667 8.5731 9.0731 10.6667 6.50002 10.6667Z"
            fill="black"
            fillOpacity="0.2"
          />
          <path d="M4.75002 8.91669L9.41669 6.00002L4.75002 3.08335V8.91669Z" fill="#181818" />
          <path d="M4.75002 8.91669L9.41669 6.00002L4.75002 3.08335V8.91669Z" fill="black" fillOpacity="0.2" />
        </svg>
      </div>
    </Link>
  );
}