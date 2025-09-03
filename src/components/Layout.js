'use client';

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        {/* Single Header applied here only */}
        <Header />
        <main className="content-area">{children}</main>
      </div>
    </div>
  );
}






