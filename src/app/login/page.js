"use client"
import { useState } from "react"
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { IconMail,IconEye } from "@tabler/icons-react";
import { TextField } from "@mui/material";


export default function Login(){
    const[user,setUser]=useState({
        email:"",
        password:""
    })
    return (
    <>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
      className="container"
    >
      <div className="login-box">
        <h1>Log In</h1>
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          required
          InputProps={{
            endAdornment:<IconMail size={25} style={{marginRight:8}}/>
          }}
        />
        <br/><br/>
        <TextField 
          id="password"
          label="Password"
          type="password"
          name="password"
          InputProps={{
            endAdornment:<IconEye size={25} style={{marginRight:8}}/>
          }}
        />
        <br/><br/>
        <div className="forget">
        <a href="#" >Forget Password</a>
        </div>
        <br/>
        <Button id="btn" type="submit" variant="contained" color="primary">Log In</Button> 
        </div>
        </Box> 
       </>    
    )
}

