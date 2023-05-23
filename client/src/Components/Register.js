import React, { useState } from 'react';
import { Avatar, Grid, Paper, Typography, TextField } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

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
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2>Register</h2>
          <Typography variant='caption'>Please fill this form to create an account</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Username" variant="standard" type="text" value={username} onChange={handlePasswordChange}/>
        <TextField id="standard-basic" label="Password" variant="standard" type="password" value={password} onChange={handleUsernameChange}  />
          {/* <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div> */}
            <button type="submit" className='register-button'>Register</button>
        </form>
      </Paper>
      
    </Grid>
  );
};

export default Register;

