import { Box, Button, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A97155',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#A97155',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: '#A97155',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#A97155',
      },
    },
  });

const CustomButton = styled(Button)({
    textTransform: 'none',
    fontFamily: 'Nunito',
    fontWeight: 'medium',
    fontSize: 20,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#A97155',
    '&:hover': {
        backgroundColor: '#c08162',
        boxShadow: 'none',
        fontWeight: 'bold',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
})



const Registration = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [bio,setBio] = useState('')

    const handleSubmit = e => {
      e.preventDefault();
      console.log(email, password,name,number,bio);
    };
    return (
        <Box sx={{
            width: 500,maxWidth: '100%',mx: 'auto',border: '1px solid gray',px: 2,py: 3,mt: 2
          }}
        >
            <Typography sx={{
                textAlign: 'left', bgcolor: '#A97155',width: '175px', px:'8px', color: 'white',mb: '6px'
              }}
            > 
                 I don't have an account
            </Typography>

            <Typography variant= 'h5' sx={{textAlign: 'left', width: '160px', px:'8px', fontFamily: 'Nunito', mb: 3, fontWeight: 'medium'}}> Registration</Typography>

            <form onSubmit={handleSubmit}>
              <CssTextField required fullWidth label="UserName" sx={{mb: 2}} onChange={e => setName(e.target.value)} id="username" />

              <CssTextField required fullWidth label="Email"  id="email" onChange={e => setEmail(e.target.value)} sx={{mb: 2}} />

              <CssTextField required fullWidth label="Password"  id="password" onChange={e => setPassword(e.target.value)} sx={{mb: 2}} />

              <CssTextField required fullWidth label="Number"  id="number"  InputLabelProps={{ shrink: true }} type="number" shrink  onChange={e => setNumber(e.target.value)} sx={{mb: 2}} />

              <CssTextField required fullWidth label="About/Bio"  id="bio" type="text"  onChange={e => setBio(e.target.value)} sx={{mb: 2}} />

              
              <CustomButton fullWidth type="submit" variant="contained" sx ={{mb:2}}>Register</CustomButton>
            </form>
            <Typography sx={{textAlign: 'left', px:'8px', fontFamily: 'Nunito', fontWeight: 'bold',fontSize: '16px'}}> Have an account? <Link to='/login'>Login</Link></Typography>
            
        </Box>
    );
};

export default Registration;