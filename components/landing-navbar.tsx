// Indicates that this is a client-side component in Next.js
"use client";

// Importing the Montserrat font from Google Fonts
import { Montserrat } from "next/font/google";

// Importing necessary components and hooks from Next.js and other libraries
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

// Importing utility functions and components from your local files
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Loading the Montserrat font with specific weight and subset options
const font = Montserrat({ weight: '600', subsets: ['latin'] });

// LandingNavbar component definition
export const LandingNavbar = () => {
  // Destructuring isSignedIn from useAuth hook to check authentication status
  const { isSignedIn } = useAuth();

  return (
    // Navigation bar with padding, transparent background, and flexbox layout
    <nav className="p-4 bg-transparent flex items-center justify-between">
      
      {/* Link to the home page with a logo and site name */}
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          {/* Image component for the logo */}
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-Black", font.className)}>
          AIExpress
        </h1>
      </Link>
      
      {/* Container for navigation links and buttons */}
      <div className="flex items-center gap-x-2">
        
        {/* Navigation links */}
        <div className="text-Black">
          <Link className="mx-4" href="">Home</Link>
          <Link className="mx-4" href="">About</Link>
          <Link className="mx-4" href="">Service</Link>
          <Link className="mx-4" href="">Features</Link>
        </div>
        
        {/* Link to an external documentation page */}
        <a href="https://documation.vercel.app" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="rounded-full">
            Get Documentation
          </Button>
        </a>

        {/* Conditional rendering of the "Get Started" button based on authentication status */}
        <Link className="mx-7" href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
