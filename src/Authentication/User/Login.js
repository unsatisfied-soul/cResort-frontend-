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
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#c08162',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
})


  
  

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = e => {
      e.preventDefault();
      console.log(email, password);
    };
    return (
        <Box sx={{
            width: 500,maxWidth: '100%',mx: 'auto',border: '1px solid gray',px: 2,py: 3,mt: 2
          }}
        >
            <Typography sx={{
                textAlign: 'left', bgcolor: '#A97155',width: '140px', px:'8px', color: 'white',mb: '6px'
              }}
            > 
                 Already a Member
            </Typography>

            <Typography variant= 'h5' sx={{textAlign: 'left', width: '160px', px:'8px', fontFamily: 'Nunito', mb: 3, fontWeight: 'medium'}}> Log In</Typography>

            <form onSubmit={handleSubmit}>
              <CssTextField fullWidth label="email" sx={{mb: 2}} onChange={e => setEmail(e.target.value)} id="email" />

              <CssTextField fullWidth label="password"  id="password" onChange={e => setPassword(e.target.value)} sx={{mb: 2}} />

              
              <CustomButton fullWidth type="submit" variant="contained" sx ={{bgcolor: '#A97155', py:1,mb:2}}>Log In</CustomButton>
            </form>
            <Typography sx={{textAlign: 'left', px:'8px', fontFamily: 'Nunito', fontWeight: 'bold',fontSize: '16px'}}> don't have an account? <Link to='/register'>Register</Link></Typography>
            
        </Box>
    );
};

export default Login;