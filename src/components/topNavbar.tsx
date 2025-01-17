'use client';

import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UserProfile: React.FC<{ userName: string }> = ({ userName }) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-background px-4 py-2 shadow-md dark:border-gray-700 md:border md:border-gray-300 md:shadow-none">
      {/* User Name */}
      <span className="truncate text-lg font-bold text-foreground">{userName || 'Guest'}</span>

      {/* User Icon */}
      <div
        className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-purple-200 dark:bg-purple-800"
        title="User Profile"
        onClick={() => console.log('Profile Clicked')} // Replace with actual handler
      >
        <FontAwesomeIcon
          icon={faCircleUser}
          className="size-5 text-purple-800 dark:text-purple-200"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default UserProfile;
