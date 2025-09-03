'use client';

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}