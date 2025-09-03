



'use client';

import React, { useState } from 'react';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
        <main className="content-area">
          {children}
        </main>
      </div>
    // </div>
  );
};

export default Layout;
