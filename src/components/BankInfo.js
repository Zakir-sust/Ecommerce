import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const theme = createTheme();
export default function SignIn() {
  let [loggedIn,setLoggedIn] = useState(0)
  const navigate = useNavigate()
  useEffect(()=>{
    console.log('useEfect at signin fired')
    if(localStorage.getItem('bank')){
      navigate('/home')
    }
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = {
      accountno:data.get('bank_acc_no'),
      address:data.get('address'),
      mobile:data.get('mobile')
    }
    console.log('login data ',obj);
    axios.patch(`http://localhost:5000/users/${localStorage.getItem('id')}`,obj)
    .then(res=>{
      console.log('bank patch success',res.data)
      localStorage.setItem('acc',obj.accountno)
      localStorage.setItem('bank',true)
      localStorage.setItem('address',obj.address)
      localStorage.setItem('mobile',obj.phone)
      navigate('/home')
    })
    .catch(res=>{
      console.log('bank patch failed',res.data)
    })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Typography>Bank Info</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="bank_acc_no"
              label="bank account no"
              name="bank_acc_no"
              autoComplete="bank acc no"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="address"
              type="address"
              id="address"
              autoComplete="current-address"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="mobile no"
              name="mobile"
              autoComplete="mobile no"
              autoFocus
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Proceed
            </Button>
            
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}