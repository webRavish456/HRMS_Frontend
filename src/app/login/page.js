"use client"
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  InputAdornment,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  BusinessCenter
} from '@mui/icons-material';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', form);
    router.push('/dashboard');
  };


  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            border: '1px solid #e0e0e0'
          }}
        >
          <CardContent sx={{ p: 4 }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: '#1976d2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}
              >
                <BusinessCenter sx={{ color: 'white', fontSize: 30 }} />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  color: '#333',
                  mb: 1
                }}
              >
                Welcome
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666',
                  fontSize: '1rem'
                }}
              >
                Sign in to your HRMS account
              </Typography>
            </Box>

            {/* Login Form */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={3}>
                <Grid size={{xs:12}}>
                  <TextField
                    fullWidth
                    required
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: '#999' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                        },
                      },
                    }}
                  />
                </Grid>

                <Grid size={{xs:12}}>
                  <TextField
                    fullWidth
                    required
                    id="password"
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={handleChange}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock sx={{ color: '#999' }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            onClick={() => setShowPassword(!showPassword)}
                            sx={{ minWidth: 'auto', p: 1, color: '#666' }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1976d2',
                        },
                      },
                    }}
                  />
                </Grid>


                <Grid size={{xs:12}}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      height: 48,
                      backgroundColor: '#1976d2',
                      fontSize: '1rem',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#1565c0',
                      },
                    }}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {/* Footer */}
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#999',
                  fontSize: '0.875rem'
                }}
              >
                © {new Date().getFullYear()} HRMS. All rights reserved.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
