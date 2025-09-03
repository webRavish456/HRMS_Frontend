"use client";
import {
  Drawer, List, ListItemButton, ListItemText, Collapse,
  IconButton, AppBar, Toolbar, Typography, Box
} from "@mui/material";
import {
  Users, Calendar, ChevronDown, ChevronRight,
   UserCheck, Clipboard, DollarSign, BarChart, Menu,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [activeModule, setActiveModule] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const toggleModule = (module) =>
    setActiveModule(activeModule === module ? null : module);

  const drawerContent = (
    <List
      id="mysidebar"
      sx={{ bgcolor: "black", color: "white", height: "auto", width: "270px" }}
    >
      {/* Logo */}
      <Image
        src="/ved-logo.jpg"
        alt="VED VENTURING DIGITALLY"
        width={180}
        height={40}
        style={{ width: "170px", height: "auto", padding: "15px", paddingLeft: "43px" ,paddingTop:"0px"}}
      />

      <ListItemButton component={Link} href="/">
        <LayoutDashboard style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
      </ListItemButton>
 
      <ListItemButton component={Link} href="/branch">
        <LayoutDashboard style={{ marginRight: 8 }} /> <ListItemText primary="Branch" />
      </ListItemButton>

      <ListItemButton component={Link} href="/employee/add">
        <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
      </ListItemButton>

      <ListItemButton component={Link} href="/staffs">
        <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
      </ListItemButton>

      <ListItemButton component={Link} href="/recruitment">
        <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Recruitment" />
      </ListItemButton>

      <ListItemButton component={Link} href="/task">
        <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Task" />
      </ListItemButton>

      
      {/* Attendance */}
      <ListItemButton onClick={() => toggleModule("attendance")}>
        <Calendar style={{ marginRight: 8 }} />
        <ListItemText primary="Attendance" />
        {activeModule === "attendance" ? <ChevronDown /> : <ChevronRight />}
      </ListItemButton>
      <Collapse in={activeModule === "attendance"}>
        <List disablePadding>
          <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
            <ListItemText primary="Punch In/Out" />
          </ListItemButton>
          <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
            <ListItemText primary="Daily Log" />
          </ListItemButton>
          <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
            <ListItemText primary="Attendance Request" />
          </ListItemButton>
          <ListItemButton component={Link} href="/attendance/details" sx={{ pl: 4 }}>
            <ListItemText primary="Attendance Details" />
          </ListItemButton>
        </List>
      </Collapse>
       
      <ListItemButton component={Link} href="/leave">
        <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
      </ListItemButton>
      
      {/* Payroll */}
      <ListItemButton onClick={() => toggleModule("payroll")}>
        <DollarSign style={{ marginRight: 8 }} />
        <ListItemText primary="Payroll" />
        {activeModule === "payroll" ? <ChevronDown /> : <ChevronRight />}
      </ListItemButton>
      <Collapse in={activeModule === "payroll"}>
        <List disablePadding>
          <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
            <ListItemText primary="Create Payroll" />
          </ListItemButton>
          <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
            <ListItemText primary="Expense" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton component={Link} href="/performance">
        <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Performance" />
      </ListItemButton>


      {/* Tickets */}
      <ListItemButton onClick={() => toggleModule("ticket")}>
        <Calendar style={{ marginRight: 8 }} />
        <ListItemText primary="Tickets" />
        {activeModule === "ticket" ? <ChevronDown /> : <ChevronRight />}
      </ListItemButton>
      <Collapse in={activeModule === "ticket"}>
        <List disablePadding>
          <ListItemButton component={Link} href="/ticket/allTickets" sx={{ pl: 4 }}>
            <ListItemText primary="All Tickets" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton component={Link} href="/exit">
        <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Exit" />
      </ListItemButton>

      <ListItemButton component={Link} href="/announcement">
        <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Announcement" />
      </ListItemButton>

      <ListItemButton component={Link} href="/finance">
        <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Finance" />
      </ListItemButton>

      <ListItemButton component={Link} href="/reports">
        <BarChart style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
      </ListItemButton>

      <ListItemButton component={Link} href="/rewards">
        <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Rewards" />
      </ListItemButton>

      <ListItemButton component={Link} href="/settings">
        <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Settings" />
      </ListItemButton>

    </List>
    
  );

  return (
    <>
      {/* Fixed Hamburger Button (top-left corner on mobile) */}
      <Box sx={{ position: "fixed", top: 10, left: 10, display: { xs: "block", sm: "none" }, zIndex: 2000 }}>
        <IconButton color="inherit" onClick={handleDrawerToggle} sx={{ bgcolor: "black", color: "white" }}>
          <Menu />
        </IconButton>
      </Box>

      {/* Header */}
      <AppBar position="fixed" sx={{ bgcolor: "black", left: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            MY HRMS
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{ display: { xs: "none", sm: "block" }, width: 270 }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}


































// "use client";
// import {
//   Drawer, List, ListItemButton, ListItemText, Collapse, IconButton, AppBar, Toolbar, Typography
// } from "@mui/material";
// import {
//   Users, Calendar, ChevronDown, ChevronRight,
//   Home, UserCheck, Clipboard, DollarSign, BarChart, Menu
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function Sidebar() {
//   const [activeModule, setActiveModule] = useState(null); // "payroll" | "attendance" | null
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

//   const toggleModule = (module) => {
//     setActiveModule(activeModule === module ? null : module);
//   };

//   const drawerContent = (
//     <List id="mysidebar" sx={{ bgcolor: "black", color: "white", height: "100vh", width: "270px" }}>
//       <Image
//         src="/ved-logo.jpg"
//         alt="VED VENTURING DIGITALLY"
//         width={180}
//         height={40}
//         style={{ width: "185px", height: "auto", padding: "15px", paddingLeft: "43px" }}
//       />

//       <ListItemButton component={Link} href="/">
//         <Home style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/employee/add">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/staffs">
//         <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//       </ListItemButton>

//       {/* Payroll */}
//       <ListItemButton onClick={() => toggleModule("payroll")}>
//         <DollarSign style={{ marginRight: 8 }} />
//         <ListItemText primary="Payroll" />
//         {activeModule === "payroll" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "payroll"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//             <ListItemText primary="Create Payroll" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//             <ListItemText primary="Expense" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Attendance */}
//       <ListItemButton onClick={() => toggleModule("attendance")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Attendance" />
//         {activeModule === "attendance" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "attendance"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//             <ListItemText primary="Punch In/Out" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//             <ListItemText primary="Daily Log" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Request" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/details" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Details" />
//           </ListItemButton>
//         </List>
//       </Collapse>
 
//        {/* Tickets */}
//       <ListItemButton onClick={() => toggleModule("ticket")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Tickets" />
//         {activeModule === "ticket" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "ticket"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/ticket/allTickets" sx={{ pl: 4 }}>
//             <ListItemText primary="All Tickets" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       <ListItemButton component={Link} href="/leave">
//         <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/reports">
//         <BarChart style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//       </ListItemButton>
//     </List>
//   );

//   return (
//     <>
//       {/* Top AppBar with Hamburger */}
//       <AppBar position="fixed" sx={{ display: { xs: "flex", sm: "none" }, bgcolor: "black" }}>
//         <Toolbar>
//           <IconButton color="inherit" edge="start" sx={{zIndex:"2"}} onClick={handleDrawerToggle}>
//             <Menu />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
//             MY HRMS
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{ display: { xs: "block", sm: "none" } }}
//       >
//         {drawerContent}
//       </Drawer>

//       {/* Desktop Drawer */}
//       <Drawer
//         variant="permanent"
//         sx={{ display: { xs: "none", sm: "block" }, width: 240 }}
//         open
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// }













































// "use client";
// import {
//   Drawer, List, ListItemButton, ListItemText, Collapse
// } from "@mui/material";
// import {
//   Users, Calendar, ChevronDown, ChevronRight,
//   Home, UserCheck, Clipboard, DollarSign, BarChart
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function Sidebar({ mobileOpen, onClose }) {
//   const [activeModule, setActiveModule] = useState(null);

//   const toggleModule = (module) => {
//     setActiveModule(activeModule === module ? null : module);
//   };

//   const drawerContent = (
//     <List sx={{ bgcolor: "black", color: "white", height: "100vh", width: "270px" }}>
//       <Image
//         src="/ved-logo.jpg"
//         alt="VED VENTURING DIGITALLY"
//         width={180}
//         height={40}
//         style={{ width: "185px", height: "auto", padding: "15px", paddingLeft: "43px" }}
//       />

//       <ListItemButton component={Link} href="/">
//         <Home style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/employee/add">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/staffs">
//         <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//       </ListItemButton>

//       {/* Payroll */}
//       <ListItemButton onClick={() => toggleModule("payroll")}>
//         <DollarSign style={{ marginRight: 8 }} />
//         <ListItemText primary="Payroll" />
//         {activeModule === "payroll" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "payroll"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//             <ListItemText primary="Create Payroll" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//             <ListItemText primary="Expense" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Attendance */}
//       <ListItemButton onClick={() => toggleModule("attendance")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Attendance" />
//         {activeModule === "attendance" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "attendance"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//             <ListItemText primary="Punch In/Out" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//             <ListItemText primary="Daily Log" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Request" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/details" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Details" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Tickets */}
//       <ListItemButton onClick={() => toggleModule("ticket")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Tickets" />
//         {activeModule === "ticket" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "ticket"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/ticket/allTickets" sx={{ pl: 4 }}>
//             <ListItemText primary="All Tickets" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       <ListItemButton component={Link} href="/leave">
//         <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/reports">
//         <BarChart style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//       </ListItemButton>
//     </List>
//   );

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{ display: { xs: "none", sm: "block" }, width: 270 }}
//         open
//       >
//         {drawerContent}
//       </Drawer>

//       {/* Mobile Sidebar */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}   // controlled by parent
//         onClose={onClose}  // closes on outside click
//         sx={{ display: { xs: "block", sm: "none" }, width: 270 }}
//         ModalProps={{ keepMounted: true }}
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// }



































// "use client";
// import {
//   Drawer, List, ListItemButton, ListItemText, Collapse
// } from "@mui/material";
// import {
//   Users, Calendar, ChevronDown, ChevronRight,
//   Home, UserCheck, Clipboard, DollarSign, BarChart
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function Sidebar({ mobileOpen, onClose }) {
//   const [activeModule, setActiveModule] = useState(null);

//   const toggleModule = (module) => {
//     setActiveModule(activeModule === module ? null : module);
//   };

//   const drawerContent = (
//     <List sx={{ bgcolor: "black", color: "white", height: "100vh", width: "270px" }}>
//       <Image
//         src="/ved-logo.jpg"
//         alt="VED VENTURING DIGITALLY"
//         width={180}
//         height={40}
//         style={{ width: "185px", height: "auto", padding: "15px", paddingLeft: "43px" }}
//       />

//       <ListItemButton component={Link} href="/">
//         <Home style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/employee/add">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/staffs">
//         <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//       </ListItemButton>

//       {/* Payroll */}
//       <ListItemButton onClick={() => toggleModule("payroll")}>
//         <DollarSign style={{ marginRight: 8 }} />
//         <ListItemText primary="Payroll" />
//         {activeModule === "payroll" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "payroll"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//             <ListItemText primary="Create Payroll" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//             <ListItemText primary="Expense" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Attendance */}
//       <ListItemButton onClick={() => toggleModule("attendance")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Attendance" />
//         {activeModule === "attendance" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "attendance"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//             <ListItemText primary="Punch In/Out" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//             <ListItemText primary="Daily Log" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Request" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/details" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Details" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Tickets */}
//       <ListItemButton onClick={() => toggleModule("ticket")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Tickets" />
//         {activeModule === "ticket" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "ticket"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/ticket/allTickets" sx={{ pl: 4 }}>
//             <ListItemText primary="All Tickets" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       <ListItemButton component={Link} href="/leave">
//         <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/reports">
//         <BarChart style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//       </ListItemButton>
//     </List>
//   );

//   return (
//     <>
//       {/* Permanent sidebar (desktop) */}
//       <Drawer
//         variant="permanent"
//         sx={{ display: { xs: "none", sm: "block" }, width: 270 }}
//         open
//       >
//         {drawerContent}
//       </Drawer>

//       {/* Temporary sidebar (mobile) */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={onClose}
//         sx={{ display: { xs: "block", sm: "none" }, width: 270 }}
//         ModalProps={{ keepMounted: true }} // better mobile performance
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// }




































// "use client";
// import {
//   Drawer, List, ListItemButton, ListItemText, Collapse
// } from "@mui/material";
// import {
//   Users, Calendar, ChevronDown, ChevronRight,
//   Home, UserCheck, Clipboard, DollarSign, BarChart
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function Sidebar() {
//   const [activeModule, setActiveModule] = useState(null);

//   const toggleModule = (module) => {
//     setActiveModule(activeModule === module ? null : module);
//   };

//   const drawerContent = (
//     <List id="mysidebar" sx={{ bgcolor: "black", color: "white", height: "100vh", width: "270px" }}>
//       <Image
//         src="/ved-logo.jpg"
//         alt="VED VENTURING DIGITALLY"
//         width={180}
//         height={40}
//         style={{ width: "185px", height: "auto", padding: "15px", paddingLeft: "43px" }}
//       />

//       <ListItemButton component={Link} href="/">
//         <Home style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/employee/add">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/staffs">
//         <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//       </ListItemButton>

//       {/* Payroll */}
//       <ListItemButton onClick={() => toggleModule("payroll")}>
//         <DollarSign style={{ marginRight: 8 }} />
//         <ListItemText primary="Payroll" />
//         {activeModule === "payroll" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "payroll"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//             <ListItemText primary="Create Payroll" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//             <ListItemText primary="Expense" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Attendance */}
//       <ListItemButton onClick={() => toggleModule("attendance")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Attendance" />
//         {activeModule === "attendance" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "attendance"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//             <ListItemText primary="Punch In/Out" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//             <ListItemText primary="Daily Log" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Request" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/details" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Details" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Tickets */}
//       <ListItemButton onClick={() => toggleModule("ticket")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Tickets" />
//         {activeModule === "ticket" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "ticket"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/ticket/allTickets" sx={{ pl: 4 }}>
//             <ListItemText primary="All Tickets" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       <ListItemButton component={Link} href="/leave">
//         <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/reports">
//         <BarChart style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//       </ListItemButton>
//     </List>
//   );

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{ display: "block", width: 270 }}
//       open
//     >
//       {drawerContent}
//     </Drawer>
//   );
// }


































































































// "use client";
// import {
//   Drawer, List, ListItemButton, ListItemText, Collapse,
//   IconButton, AppBar, Toolbar, Typography, useMediaQuery
// } from "@mui/material";
// import {
//   Users, Calendar, ChevronDown, ChevronRight,
//   Home, UserCheck, Clipboard, DollarSign, BarChart, Menu
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";
// import { useTheme } from "@mui/material/styles";

// export default function Sidebar() {
//   const [activeModule, setActiveModule] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // <=768px

//   const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

//   const toggleModule = (module) => {
//     setActiveModule(activeModule === module ? null : module);
//   };

//   const drawerContent = (
//     <List
//       id="mysidebar"
//       sx={{
//         bgcolor: "#111",
//         color: "white",
//         height: "100%",
//         width: 270,
//         paddingTop: "10px",
//       }}
//     >
//       <Image
//         src="/ved-logo.jpg"
//         alt="VED VENTURING DIGITALLY"
//         width={180}
//         height={40}
//         style={{
//           width: "185px",
//           height: "auto",
//           padding: "15px",
//           paddingLeft: "43px",
//         }}
//       />

//       <ListItemButton component={Link} href="/">
//         <Home style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/employee/add">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/staffs">
//         <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//       </ListItemButton>

//       {/* Payroll */}
//       <ListItemButton onClick={() => toggleModule("payroll")}>
//         <DollarSign style={{ marginRight: 8 }} />
//         <ListItemText primary="Payroll" />
//         {activeModule === "payroll" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "payroll"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//             <ListItemText primary="Create Payroll" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//             <ListItemText primary="Expense" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Attendance */}
//       <ListItemButton onClick={() => toggleModule("attendance")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Attendance" />
//         {activeModule === "attendance" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "attendance"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//             <ListItemText primary="Punch In/Out" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//             <ListItemText primary="Daily Log" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Request" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/details" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Details" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/summary" sx={{ pl: 4 }}>
//             <ListItemText primary="Summary" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Tickets */}
//       <ListItemButton onClick={() => toggleModule("ticket")}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Tickets" />
//         {activeModule === "ticket" ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={activeModule === "ticket"}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/ticket/allTickets" sx={{ pl: 4 }}>
//             <ListItemText primary="All Tickets" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       <ListItemButton component={Link} href="/leave">
//         <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/reports">
//         <BarChart style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//       </ListItemButton>
//     </List>
//   );

//   return (
//     <>
//       {/* Show AppBar with hamburger only on mobile */}
//       {isMobile && (
//         <AppBar position="fixed" sx={{ bgcolor: "black" }}>
//           <Toolbar>
//             <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
//               <Menu />
//             </IconButton>
//             <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
//               HRMS
//             </Typography>
//           </Toolbar>
//         </AppBar>
//       )}

//       {/* Drawer for mobile only */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             width: 270,
//             bgcolor: "#111",
//             color: "white",
//           },
//           display: isMobile ? "block" : "none",
//         }}
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// }






















































// "use client";
// import {
//   Drawer, List, ListItemButton, ListItemText, Collapse
// } from "@mui/material";
// import { Users, FileText, Wallet, Calendar,ChevronDown, ChevronRight , Home, UserCheck, Clipboard, DollarSign, BarChart} from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";

// export default function Sidebar({ open, onClose }) {
//   const [openPayroll, setOpenPayroll] = useState(false);
//   const [openAttendance, setOpenAttendance] = useState(false);

//   const drawerContent = (
//     <List id="side-bar" sx={{bgcolor:"black",color:"white",height:"100vh",width:"270px"}}>
//       <Image 
//             src="/ved-logo.jpg" 
//             alt="VED VENTURING DIGITALLY" 
//             width={180} 
//             height={40}
//             style={{ width: '185px', height: 'auto',padding:"15px",paddingLeft:"43px" }}
//           />

//       <ListItemButton component={Link} href="/"> 
//         <Home style={{ marginRight: 8}} /> <ListItemText primary="Dashboard" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/employee/add">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/staffs">
//         <UserCheck style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//       </ListItemButton>

//       {/* Payroll */}
//       <ListItemButton onClick={() => setOpenPayroll(!openPayroll)}>
//         <DollarSign style={{ marginRight: 8 }} />
//         <ListItemText primary="Payroll" />
//         {openPayroll ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={openPayroll}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//             <ListItemText primary="Create Payroll" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//             <ListItemText primary="Expense" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Attendance */}
//       <ListItemButton onClick={() => setOpenAttendance(!openAttendance)}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Attendance" />
//         {openAttendance ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={openAttendance}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//             <ListItemText primary="Punch In/Out" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//             <ListItemText primary="Daily Log" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Request" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/details" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Details" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/summary" sx={{ pl: 4 }}>
//             <ListItemText primary="Summary" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       <ListItemButton component={Link} href="/leave">
//         <Clipboard style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/reports">
//         <BarChart style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//       </ListItemButton>
//     </List>
//   );

//   return (
//     <>
//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={open}
//         onClose={onClose}
//         sx={{ display: { xs: "block", sm: "none" }}}
//       >
//         {drawerContent}
//       </Drawer>

//       {/* Desktop Drawer */}
//       <Drawer
//         variant="permanent"
//         sx={{ display: { xs: "none", sm: "block" }, width: 240 }}
//         open
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// }





























// // Sidebar.js
// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, ChevronDown, ChevronRight } from "lucide-react";
// import MenuItem from "./MenuItem";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (label) =>
//     setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));

//   return (
//     <>
//       <button
//         className="menu-btn"
//         onClick={() => setIsOpen((s) => !s)}
//         aria-label="Toggle sidebar"
//       >
//         <Menu />
//       </button>

//       <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <div className="logo-wrap">
//           <Image src="/ved-logo.jpg" alt="VED" width={120} height={40} />
//         </div>

//         <nav>
//           {MenuItem.map((item) => {
//             const Icon = item.icon; // icon is a component reference
//             return (
//               <div key={item.label} className="menu-item">
//                 {item.children ? (
//                   <>
//                     <button
//                       type="button"
//                       className="sidebar-link"
//                       onClick={() => toggleMenu(item.label)}
//                     >
//                       {/* <Icon size={18} /> */}
//                       <span className="menu-label">{item.label}</span>
//                       {openMenus[item.label] ? (
//                         <ChevronDown />
//                       ) : (
//                         <ChevronRight />
//                       )}
//                     </button>

//                     {openMenus[item.label] && (
//                       <div className="submenu">
//                         {item.children.map((child) => (
//                           <Link
//                             key={child.label}
//                             href={child.href}
//                             className="submenu-link"
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <Link href={item.href} className="sidebar-link">
//                     {/* <Icon size={18} /> */}
//                     <span className="menu-label">{item.label}</span>
//                   </Link>
//                 )}
//               </div>
//             );
//           })}
//         </nav>
//       </aside>
//     </>
//   );
// }





























































// "use client";
// import {
//   Drawer, List, ListItemButton, ListItemText, Collapse
// } from "@mui/material";
// import {
//   Users, FileText, Wallet, Calendar,
//   ChevronDown, ChevronRight
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Sidebar({ open, onClose }) {
//   const [openPayroll, setOpenPayroll] = useState(false);
//   const [openAttendance, setOpenAttendance] = useState(false);

//   const drawerContent = (
//     <List>
//       <ListItemButton component={Link} href="/"> 
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/employee/add">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/staffs">
//         <Users style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//       </ListItemButton>

//       {/* Payroll */}
//       <ListItemButton onClick={() => setOpenPayroll(!openPayroll)}>
//         <Wallet style={{ marginRight: 8 }} />
//         <ListItemText primary="Payroll" />
//         {openPayroll ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={openPayroll}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//             <ListItemText primary="Create Payroll" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//             <ListItemText primary="Expense" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       {/* Attendance */}
//       <ListItemButton onClick={() => setOpenAttendance(!openAttendance)}>
//         <Calendar style={{ marginRight: 8 }} />
//         <ListItemText primary="Attendance" />
//         {openAttendance ? <ChevronDown /> : <ChevronRight />}
//       </ListItemButton>
//       <Collapse in={openAttendance}>
//         <List disablePadding>
//           <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//             <ListItemText primary="Punch In/Out" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//             <ListItemText primary="Daily Log" />
//           </ListItemButton>
//           <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//             <ListItemText primary="Attendance Request" />
//           </ListItemButton>
//         </List>
//       </Collapse>

//       <ListItemButton component={Link} href="/leave">
//         <FileText style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//       </ListItemButton>
//       <ListItemButton component={Link} href="/reports">
//         <FileText style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//       </ListItemButton>
//     </List>
//   );

//   return (
//     <>
//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={open}
//         onClose={onClose}
//         sx={{ display: { xs: "block", sm: "none" } }}
//       >
//         {drawerContent}
//       </Drawer>

//       {/* Desktop Drawer */}
//       <Drawer
//         variant="permanent"
//         sx={{ display: { xs: "none", sm: "block" }, width: 240 }}
//         open
//       >
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// }








// "use client";
// import { Drawer, List, ListItemButton, ListItemText, Collapse } from "@mui/material";
// import { Users, FileText, Wallet, Calendar, ChevronDown, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Sidebar({ open }) {
//   const [openPayroll, setOpenPayroll] = useState(false);
//   const [openAttendance, setOpenAttendance] = useState(false);

//   return (
//     <Drawer variant="permanent" open={open} className="sidebar">
//       <List>
//         <ListItemButton component={Link} href="/"> 
//           <Users style={{ marginRight: 8 }} /> <ListItemText primary="Dashboard" />
//         </ListItemButton>

//         <ListItemButton component={Link} href="/employee/add">
//           <Users style={{ marginRight: 8 }} /> <ListItemText primary="Employee" />
//         </ListItemButton>

//         <ListItemButton component={Link} href="/staffs">
//           <Users style={{ marginRight: 8 }} /> <ListItemText primary="Staffs" />
//         </ListItemButton>

//         {/* Payroll with Submodules */}
//         <ListItemButton onClick={() => setOpenPayroll(!openPayroll)}>
//           <Wallet style={{ marginRight: 8 }} /> 
//           <ListItemText primary="Payroll" />
//           {openPayroll ? <ChevronDown /> : <ChevronRight />}
//         </ListItemButton>
//         <Collapse in={openPayroll}>
//           <List disablePadding>
//             <ListItemButton component={Link} href="/payroll/create" sx={{ pl: 4 }}>
//               <ListItemText primary="Create Payroll" />
//             </ListItemButton>
//             <ListItemButton component={Link} href="/payroll/expense" sx={{ pl: 4 }}>
//               <ListItemText primary="Expense" />
//             </ListItemButton>
//           </List>
//         </Collapse>

//         {/* Attendance with Submodules */}
//         <ListItemButton onClick={() => setOpenAttendance(!openAttendance)}>
//           <Calendar style={{ marginRight: 8 }} /> 
//           <ListItemText primary="Attendance" />
//           {openAttendance ? <ChevronDown /> : <ChevronRight />}
//         </ListItemButton>
//         <Collapse in={openAttendance}>
//           <List disablePadding>
//             <ListItemButton component={Link} href="/attendance/punch" sx={{ pl: 4 }}>
//               <ListItemText primary="Punch In/Out" />
//             </ListItemButton>
//             <ListItemButton component={Link} href="/attendance/daily" sx={{ pl: 4 }}>
//               <ListItemText primary="Daily Log" />
//             </ListItemButton>
//             <ListItemButton component={Link} href="/attendance/request" sx={{ pl: 4 }}>
//               <ListItemText primary="Attendance Request" />
//             </ListItemButton>
//           </List>
//         </Collapse>

//         <ListItemButton component={Link} href="/leave">
//           <FileText style={{ marginRight: 8 }} /> <ListItemText primary="Leave" />
//         </ListItemButton>

//         <ListItemButton component={Link} href="/reports">
//           <FileText style={{ marginRight: 8 }} /> <ListItemText primary="Reports" />
//         </ListItemButton>
//       </List>
//     </Drawer>
//   );
// }












// "use client"
// import {Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton,ListItemButton } from "@mui/material"
// import { Menu } from "lucide-react"
// import MenuItem from "./MenuItem"
// import { useState } from "react"

// export default function Sidebar({ open, setOpen }) {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const drawer = (
//     <List>
//       <div id="company-logo-div">
//         <img src="ved-logo.jpg" id="company-logo"alt="VED LOGO"/>
//       </div>
//       {MenuItem.map((item, i) => (
//         <ListItem key={i} disablePadding>
//             <ListItemButton component="a" href={item.path}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.title} />
//             </ListItemButton>
//         </ListItem>
//       ))}
//     </List>
//   )

//   return (
//     <>
//       {/* Mobile Sidebar */}
//       <IconButton id="mymenu"
//         onClick={() => setMobileOpen(!mobileOpen)}
//         sx={{ display: { md: "none", xs: "block" }, m: 1 }}
//       >
//         <Menu />
//       </IconButton>

//       <Drawer
//         variant="permanent"
//         sx={{
//           width: { md: "25%", xs: 0 },
//           flexShrink: 0,
//           display: { xs: "none", md: "block" },
//           "& .MuiDrawer-paper": { width: "25%" }
//         }}
//         open={open}
//       >
//         {drawer}
//       </Drawer>

//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//         sx={{ "& .MuiDrawer-paper": { width: "60%"}}}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   )
// }