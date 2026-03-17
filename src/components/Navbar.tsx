'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
              AI Vision
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-red-600 transition font-medium">Features</Link>
            <Link href="#services" className="text-gray-600 hover:text-red-600 transition font-medium">Services</Link>
            <Link href="#about" className="text-gray-600 hover:text-red-600 transition font-medium">About</Link>
            <div className="flex items-center space-x-3 ml-4">
              <Link href="/login" className="px-5 py-2 text-red-600 font-medium hover:bg-red-50 rounded-lg transition">
                Login
              </Link>
              <Link href="/register" className="px-5 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 shadow-lg shadow-red-200 transition">
                Register
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="#features" className="block px-3 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md transition">Features</Link>
            <Link href="#services" className="block px-3 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md transition">Services</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md transition">About</Link>
            <div className="pt-4 flex flex-col space-y-2">
              <Link href="/login" className="w-full text-center py-3 text-red-600 font-medium border border-red-600 rounded-lg">
                Login
              </Link>
              <Link href="/register" className="w-full text-center py-3 bg-red-600 text-white font-medium rounded-lg">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
