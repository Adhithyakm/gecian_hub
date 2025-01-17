'use client';
import React from 'react';

export default function CollegeRedirect() {
  const handleRedirect = () => {
    // Redirects to the college website in a new tab
    window.open('https://gecskp.etlab.in/', '_blank');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <button
        onClick={handleRedirect}
        className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition duration-200 hover:bg-blue-700"
      >
        Visit College Website
      </button>
    </div>
  );
}
