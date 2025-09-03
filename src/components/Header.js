'use client';

import React, { useState } from 'react';
import { User } from 'lucide-react';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        {/* Keep title generic, not hard-coded "Dashboard" */}
        <h1 className="page-title">Dashboard</h1>
      </div>

      <div className="header-right">
        <div
          className="avatar"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <User size={18} />
          {isProfileOpen && (
            <div className="avatar-dropdown">
              <a href="#" className="dropdown-item">My Profile</a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item danger">Logout</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
