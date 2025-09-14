"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push("/dashboard")   // Redirects to dashboard/page.js because it is our home page...
  }, [router])

  return null
}












// export default function Page() {
//   return <h2>Welcome to HRMS Dashboard</h2>;
// }










// import Layout from "@/components/Layout";
// export default function Home(){
//   return(
//     <Layout>
//       <div >
//         {/* Empty Dashboard */}
//         This is an empty dashboard...<br/>
//         I will update it later...<br/>
//       </div>
//     </Layout>
//   )
// }










// 'use client';

// import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// export default function HomePage() {
//   return (
//     <AppBar position="static">
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography variant="h5">Dashboard</Typography>
//         <Box>
//           {/* <IconButton color="inherit"><MenuIcon /></IconButton> */}
//           <IconButton color="inherit"><AccountCircle /></IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }



/* 
Also add a sidebar in this code which is opens when the menu button is clicked
the sidebar includes the follwing things(Dashboard,Branch,Recruitment,Task Management,
Ticket management,Employee,Staff,Attendance Management,Leave Management)
*/




// import {AppBar,Toolbar,Typography, Button } from '@mui/material';

// export default function page() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           HRMS Dashboard
//         </Typography>
//         <Button >Login</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }








// 'use client' //(Simple Login page.js)
// import { Box, TextField, Button } from '@mui/material';
// import { IconMail,IconEye } from '@tabler/icons-react';

// export default function Loginpage.js() {
//   return (
//     <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Box id="mybox" sx={{ p: 4, borderRadius: 2, width: 400 }}>
//         <h1>Log In</h1>
//         <TextField fullWidth label="Enter Email Id" type="email" margin="normal" variant="outlined" InputProps={{ startAdornment: <IconMail size={20} /> }}/>
//         <TextField fullWidth label="Enter Password" type="password" margin="normal" variant="outlined" InputProps={{ startAdornment: <IconEye size={20} /> }}/>
//         <Button id='forgot'>Forgot Password?</Button>
//         <Button fullWidth variant="contained" sx={{ mt: 2,textTransform:'none',bgcolor:'navy'}}>Log In</Button>
//       </Box>
//     </Box>
//   );
// }






// 'use client' //(GlassMorphism)
// import { Box, TextField, Button, Typography } from '@mui/material';
// import { IconLock, IconMail } from '@tabler/icons-react';
// import { useRef } from 'react';

// export default function Login() {
//   const emailRef = useRef(), passRef = useRef();
//   const handleLogin = () => console.log('Login clicked');

//   return (
//     <Box sx={{ minHeight: '100vh', backgroundImage: 'url(/myWallpaper.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <Box sx={{ p: 4, backdropFilter: 'blur(10px)', bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 4, boxShadow: 3, width: 300 }}>
//         <Typography variant="h5" textAlign="center" mb={2}>Log In</Typography>
//         <TextField fullWidth label="Email" type='email' inputRef={emailRef} margin="normal" InputProps={{ startAdornment: <IconMail size={20} /> }} />
//         <TextField fullWidth label="Password" type="password" inputRef={passRef} margin="normal" InputProps={{ startAdornment: <IconLock size={20} /> }} />
//         <Box display="flex" justifyContent="flex-end"><Button size="small" sx={{ mt: 0.5, fontSize: 11,textTransform:'none',color:'#333',fontWeight:'500' }}>Forgot Password?</Button></Box>
//         <Button fullWidth variant="contained" sx={{ mt: 2,textTransform:'none' }} onClick={handleLogin}>Log In</Button>
//       </Box>
//     </Box>
//   );
// }

/*
Write a code in next.js to make a modern glassmorphism login page.js
using material UI and tablericons having email and password as 
input,forgot password button of the bottom right corner of the
password textfield and finally a login button.User should get a 
pop up of successfully logined when the button is clicked.
Also add a validation code to validate the form.And make this
under 30 line of codes.
*/
