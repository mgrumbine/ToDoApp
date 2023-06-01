import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import Input from '@mui/joy/Input';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import RegisterBackground1 from '../Assets/register-background1.png';
import RegisterBackground2 from '../Assets/register-background2.png';


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [password, setPassword] = useState('');
  const paperStyle={padding:'30px 20px', width:300, margin:'20px auto'};

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      dateOfBirth: dateOfBirth,
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
        setEmail('');
        setPhoneNumber('');
        setDateOfBirth('');
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            placeholder="Email"
            size="md"
            variant="outlined"
            style={{ marginBottom: '10px', marginTop: '10px'}}
            type="email" value={email} onChange={handleEmailChange}
          />
          </div>
          <div>
          <Input
            disabled={false}
            placeholder="Phone Number"
            size="md"
            variant="outlined"
            style={{ marginBottom: '10px', marginTop: '10px'}}
            type="text" value={phoneNumber} onChange={handlePhoneNumberChange}
          />
          </div>
          <div>
          <DatePicker 
            label="Date of Birth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
          </div>
          <div>
          <Input
            disabled={false}
            placeholder="Password"
            size="md"
            variant="outlined"
            style={{ marginBottom: '20px' }}
            type="password" value={password} onChange={handlePasswordChange}
          />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" className='register-button'>Sign Up</button>
          </div>
        </form>
      </Paper>
      </div>
    </Grid>
    </LocalizationProvider>
  );
};

export default Register;

