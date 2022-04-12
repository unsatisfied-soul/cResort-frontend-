import { Box, Button, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';


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
<<<<<<< HEAD


  
=======
>>>>>>> ed193c6e375dc847e7b161e6d7690f32045fadf0
  

const Login = () => {
    const [email,setEmail] = useState('')
<<<<<<< HEAD
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
=======
    const [password,setpassword] = useState('')
    return (
        <Box
            sx={{
            width: 500,
            maxWidth: '100%',
            mx: 'auto',
            border: '1px solid gray',
            px: 2,
            py: 3,
            mt: 2
            }}
        >
            <Typography 
            sx={{
                textAlign: 'left', 
                bgcolor: '#A97155', 
                width: '140px', 
                px:'8px', 
                color: 'white',
                 mb: '6px'
                }}> 
>>>>>>> ed193c6e375dc847e7b161e6d7690f32045fadf0
                 Already a Member
            </Typography>

            <Typography variant= 'h5' sx={{textAlign: 'left', width: '160px', px:'8px', fontFamily: 'Nunito', mb: 3, fontWeight: 'medium'}}> Log In</Typography>

<<<<<<< HEAD
            <form onSubmit={handleSubmit}>
              <CssTextField fullWidth label="email" sx={{mb: 2}} onChange={e => setEmail(e.target.value)} id="email" />

              <CssTextField fullWidth label="password"  id="password" onChange={e => setPassword(e.target.value)} sx={{mb: 2}} />

              <Button fullWidth type="submit" variant="contained" sx ={{bgcolor: '#A97155', py:1}}>Log In</Button>
            </form>

            
=======
            <CssTextField fullWidth label="email" sx={{mb: 2}} id="email" />
            <CssTextField fullWidth label="password"  id="password" sx={{mb: 2}} />

            <Button fullWidth variant="contained" sx ={{bgcolor: '#A97155', py:1}}>Log In</Button>
>>>>>>> ed193c6e375dc847e7b161e6d7690f32045fadf0
        </Box>
    );
};

export default Login;