
"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import { Bell, User } from "lucide-react";

export default function Header() {
  const [notifAnchor, setNotifAnchor] = useState(null);
  const [profileAnchor, setProfileAnchor] = useState(null);

  const openNotif = (e) => setNotifAnchor(e.currentTarget);
  const closeNotif = () => setNotifAnchor(null);

  const openProfile = (e) => setProfileAnchor(e.currentTarget);
  const closeProfile = () => setProfileAnchor(null);

  return (
    <AppBar position="fixed" sx={{backgroundColor:"#000",color:"#fff",padding:"10px"}}>  {/* sx={{ background: "linear-gradient(90deg,#1e3c72,#2a5298)", boxShadow: "0 3px 6px rgba(0,0,0,0.2)",}} */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Typography
          variant="h6"
          id="main-header"
          sx={{ fontWeight: "bold", letterSpacing: 1,marginLeft:"270px",zIndex:"1"}}
        >
          HRMS
        </Typography>

        {/* Icons */}
        <div>
          {/* Notification */}
          <IconButton color="inherit" onClick={openNotif}>
            <Badge> {/*  badgeContent={3} color="error" */}
              <Bell size={20} />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notifAnchor}
            open={Boolean(notifAnchor)}
            onClose={closeNotif}
          >
            <MenuItem onClick={closeNotif}>New leave request</MenuItem>
            <MenuItem onClick={closeNotif}>Your report is ready</MenuItem>
            <MenuItem onClick={closeNotif}>System update available</MenuItem>
          </Menu>

          {/* Profile */}
          <IconButton color="inherit" onClick={openProfile}>
            <User size={20} />
          </IconButton>
          <Menu
            anchorEl={profileAnchor}
            open={Boolean(profileAnchor)}
            onClose={closeProfile}
          >
            <MenuItem onClick={closeProfile}>My Profile</MenuItem>
            <MenuItem
              onClick={() => {
                closeProfile();
                alert("Logging out...");
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}



























// "use client";
// import { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Badge,
//   Box,
// } from "@mui/material";
// import { Bell, User } from "lucide-react";

// export default function Header() {
//   const [notifAnchor, setNotifAnchor] = useState(null);
//   const [profileAnchor, setProfileAnchor] = useState(null);

//   const openNotif = (e) => setNotifAnchor(e.currentTarget);
//   const closeNotif = () => setNotifAnchor(null);

//   const openProfile = (e) => setProfileAnchor(e.currentTarget);
//   const closeProfile = () => setProfileAnchor(null);

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: "#000",
//         color: "#fff",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.6)",
//         zIndex: 1201, // keeps header above drawer/sidebar
//       }}
//     >
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Logo / Title */}
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: "bold",
//             letterSpacing: 1,marginLeft:"270px",
//             fontSize: { xs: "16px", sm: "20px" }, // responsive font
//           }}
//         >
//           HRMS
//         </Typography>

//         {/* Icons (right side) */}
//         <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//           {/* Notifications */}
//           <IconButton color="inherit" onClick={openNotif}>
//             <Badge>
//               <Bell size={20} />
//             </Badge>
//           </IconButton>
//           <Menu
//             anchorEl={notifAnchor}
//             open={Boolean(notifAnchor)}
//             onClose={closeNotif}
//             PaperProps={{
//               sx: { mt: 1, minWidth: 200 },
//             }}
//           >
//             <MenuItem onClick={closeNotif}>New leave request</MenuItem>
//             <MenuItem onClick={closeNotif}>Your report is ready</MenuItem>
//             <MenuItem onClick={closeNotif}>System update available</MenuItem>
//           </Menu>

//           {/* Profile */}
//           <IconButton color="inherit" onClick={openProfile}>
//             <User size={20} />
//           </IconButton>
//           <Menu
//             anchorEl={profileAnchor}
//             open={Boolean(profileAnchor)}
//             onClose={closeProfile}
//             PaperProps={{
//               sx: { mt: 1, minWidth: 150 },
//             }}
//           >
//             <MenuItem onClick={closeProfile}>My Profile</MenuItem>
//             <MenuItem
//               onClick={() => {
//                 closeProfile();
//                 alert("Logging out...");
//               }}
//             >
//               Logout
//             </MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }























































































































































































































// "use client";
// import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// import { Bell, User } from "lucide-react";

// export default function Header() {
  //   return (
//     <AppBar position="static" className="header">
//       <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h6">HRMS Dashboard</Typography>
//         <div>
//           <IconButton>
//             <Bell />
//           </IconButton>
//           <IconButton>
//             <User />
//           </IconButton>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }


// "use client";
// import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// import { Bell, User, Menu } from "lucide-react";

// export default function Header({ toggleSidebar }) {
//   return (
  //     <AppBar position="static" color="default" className="header">
  //       <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
  //         <div style={{ display: "flex", alignItems: "center" }}>
  //           {/* Hamburger button (only on mobile) */}
//           <IconButton
//             edge="start"
//             sx={{ display: { sm: "none" } }}  // show only on small screens
//             onClick={toggleSidebar}
//           >
//             <Menu />
//           </IconButton>
//           <Typography variant="h6" sx={{ ml: 1 }}>
//             HRMS Dashboard
//           </Typography>
//         </div>
//         <div>
//           <IconButton><Bell /></IconButton>
//           <IconButton><User /></IconButton>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }















// "use client"
// import { AppBar, Toolbar, Typography, IconButton } from "@mui/material"
// import { Bell, User } from "lucide-react"

// export default function Header({ setOpen }) {
//   return (
//     <AppBar position="static" color="default" elevation={0} sx={{ width: "100%" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between",backgroundColor:"lightskyblue",borderRadius:"7px",boxShadow:"2px 2px 4px #888" }}>
//         <Typography variant="h6">Dashboard</Typography>
//         <div>
//           <IconButton><Bell size={20} /></IconButton>
//           <IconButton><User size={20} /></IconButton>
//         </div>
//       </Toolbar>
//     </AppBar>
//   )
// }