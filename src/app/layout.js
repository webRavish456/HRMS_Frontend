import LayoutWrapper from "@/components/LayoutWrapper";
import "./globals.css";


export const metadata = {
  title: "HR Management System",
  description: "HR Management System Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
