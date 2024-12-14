"use client"
import React from 'react';
import Link from 'next/link';
import { ModeToggle } from "@/components/theme-toggle";

const NavigationHeader: React.FC = () => {
  
  return (
    <header className="w-full bg-background border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
        Blockchain Ethics
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/environment" className="text-blue-500 hover:underline">Environment</Link>
          </li>
          <li>
            <Link href="/criminal" className="text-blue-500 hover:underline">Criminal Activity</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationHeader;