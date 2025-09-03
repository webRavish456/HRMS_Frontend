

import "./globals.css";


export const metadata = {
  title: "HRMS",
  description: "Human Resource management",
};

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </>
  );
}

