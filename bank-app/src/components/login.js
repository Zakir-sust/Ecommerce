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
    if(localStorage.getItem('token')){
      
      // navigate('/home')
    }
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = {
      user:data.get('username'),
      password:data.get('password')
    }
    console.log('login data ',obj);
    axios.post('http://localhost:5001/users/login',obj)
      .then(res=>{
        console.log('logged in')
        localStorage.setItem('btoken',res.data.token)
        console.log('res.data = ',res.data.userr._id)
        localStorage.setItem('bid',res.data.userr._id)
        localStorage.setItem('bamount',res.data.userr.amount)
        localStorage.setItem('bemail',res.data.userr.email)
        localStorage.setItem('buser',res.data.userr.user)
        
        console.log('token',localStorage.getItem('token'))
        window.location.href='/info';
        navigate('/home');
      })
      .catch(res=>{
        console.log('wrong username or password')
        return
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
} 