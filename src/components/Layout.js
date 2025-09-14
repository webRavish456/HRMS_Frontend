
"use client";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../app/globals.css";

export default function RootLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <div className="layout">
          <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
          <div className="main-content">
            <Header toggleSidebar={() => setMobileOpen(!mobileOpen)} />
            <div className="page-content">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}




























// "use client";
// import { useState } from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// export default function Layout({ children }) {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       <Header onMenuClick={() => setMobileOpen(true)} />
//       <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

//       <main
//         style={{
//           marginLeft: "270px",
//           padding: "80px 20px",
//         }}
//       >
//         {children}
//       </main>
//     </>
//   );
// }






























// "use client"
// import { Box } from "@mui/material"
// import Sidebar from "./Sidebar"
// import Header from "./Header"
// import { useState } from "react"

// export default function Layout({ children }) {
//   const [open, setOpen] = useState(true)

//   return (
//     <Box sx={{ display: "flex" }}>
//       <Sidebar open={open} setOpen={setOpen} />
//       <Box sx={{ flex: 1, p: 2 }}>
//         <Header setOpen={setOpen} />
//         <Box id="main-content" sx={{ mt: 2 }}>{children}</Box>
//       </Box>
//     </Box>
//   )
// }


















// "use client";
// import * as React from "react";
// import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
// import Sidebar from "@/components/Sidebar";
// import Header from "@/components/Header";


// const theme = createTheme({
// palette: {
// primary: { main: "#0b5cff" },
// background: { default: "#F5F7FB", paper: "#fff" },
// },
// shape: { borderRadius: 14 },
// });


// export default function AppLayout({ children }){
// const [mobileOpen, setMobileOpen] = React.useState(false);
// return (
// <ThemeProvider theme={theme}>
// <CssBaseline />
// <Box className="hrms-shell" sx={{ minHeight: "100vh" }}>
// <Sidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />
// <Box className="hrms-content" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
// <Header onMenu={() => setMobileOpen(true)} />
// <Box component="main" sx={{ p: 2, flex: 1 }}>{children}</Box>
// </Box>
// </Box>
// </ThemeProvider>
// );
// }






