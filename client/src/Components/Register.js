import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Input from '@mui/joy/Input';
import RegisterBackground1 from '../Assets/register-background1.png';
import RegisterBackground2 from '../Assets/register-background2.png';


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const paperStyle={padding:'30px 20px', width:300, margin:'20px auto'};

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      password: password
    };

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        // Clear the input fields after successful registration
        setUsername('');
        setPassword('');
      } else {
        // Registration failed
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Grid>
      <div className='register-banner-container'>
    <div className='register-bannerImage-container'>
      <img src={RegisterBackground2} alt=''/>
    </div>
    </div>
    <div className='register-section-container'>
      <div className='register-background-image-container'>
        <img src={RegisterBackground1} alt=""></img>
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '0vh' }}>
      <Paper elevation={5} style={paperStyle}>
        <Grid align='center'>
          <h2 style={{ marginBottom: '20px', marginTop: '10px' }}>Register</h2>
          <Typography variant='caption'>Please fill this form to create an account</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <div>
          <Input
            disabled={false}
            placeholder="Username"
            size="md"
            variant="outlined"
            style={{ marginBottom: '10px', marginTop: '20px'}}
            type="text" value={username} onChange={handleUsernameChange}
          />
          </div>
          <div>
          <Input
            disabled={false}
            placeholder="Password"
            size="md"
            variant="outlined"
            style={{ marginBottom: '20px' }}
            type="text" value={password} onChange={handlePasswordChange}
          />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" className='register-button'>Sign Up</button>
          </div> 
        </form>
      </Paper>
      </div>
    </Grid>
  );
};

export default Register;

