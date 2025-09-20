'use client';

import Sidebar from "./sidebar";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="content-area">{children}</main>
      </div>
    </div>
  );
}






