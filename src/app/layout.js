import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Header />
            <main className="content-area">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}