"use client"
import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { IconLock } from '@tabler/icons-react';
import{IconMail} from'@tabler/icons-react';
export default function login() {
    const[Form, setForm]=useState({
        email:"",
        password:""
    })

   const handleChange =(e)=>{
    setForm({...Form,[e.target.name]:e.target.value});
   }
  return (
   <>
   
    <center>
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
      noValidate
      autoComplete="off"
      className='box'
    >
        
      <div>
        <h2 id="text" >Log In</h2>
       
        <TextField
         required
          id="email"
          label="Enter Email Id"
          type="email"
          name="email" 
          onChange={handleChange}
            variant="standard"
              InputProps={
                  { endAdornment:<IconMail size={20} style={{marginRight:8 }}/>}
                 }
        />
        <br></br>
        <TextField
          required
          id="password"
          label="Enter Password"
          type="password"
          name="password"
           onChange={handleChange}
          variant="standard"
            InputProps={
                  { endAdornment:<IconLock size={20} style={{marginRight:8}}/>}
                 }
        />
        <br></br><br></br>
        
        </div>
        <div>
            <a id="forgot" href='#'> Forgot Password ? </a>
            <br></br>
        </div>
         <Button  className="button" type="submit" variant="contained">Login</Button>
        </Box>
     </center>
   </>
  )
}
