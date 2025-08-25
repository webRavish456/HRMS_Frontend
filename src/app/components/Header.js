'use client';

import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="page-title">Dashboard</h1>
      </div>

      <div className="header-right">
        <div className="avatar" onClick={() => setIsProfileOpen(!isProfileOpen)}>
          <User />
          
          {isProfileOpen && (
            <div className="avatar-dropdown">
              <a href="#" className="dropdown-item">
                My Profile
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item danger">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
