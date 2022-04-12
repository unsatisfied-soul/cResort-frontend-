import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link } from 'react-router-dom';
import { Button, Divider, Hidden, List, ListItem } from '@mui/material';
import './Navbar.css'
import { Clear } from '@material-ui/icons';




const Navbar = () => {
  const [open, setOpen] =useState(false);

  const navigationLinks = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Rooms',
      href: '/rooms'
    },
    {
      name: 'About US',
      href: '/about'
    },
    {
      name: 'News',
      href: '/news'
    }
  ]

 
   

  return (
    <AppBar position="static" sx={{bgcolor: 'transparent',boxShadow: 0, borderBottom: 1, borderColor:'#A97155' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'column'}}>


          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2,py:2,mb: 2, color: 'black', display: { xs: 'none', md: 'flex', flexDirection:'column',lineHeight:0.6,textAlign: 'center',fontFamily: 'Nunito', fontWeight: 'bold' } }}
          >
            <Typography variant="h3" sx={{fontFamily: 'Lavishly Yours',fontWeight: 'bold', color: '#A97155'}}>C</Typography>
            Resort
          </Typography>

          {/* mobile _____________________ */}

          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1,fontFamily: 'Nunito', fontWeight: 'bold', color: 'black', display: { xs: 'flex', md: 'none' } }}
          >
           <Typography variant="h3" sx={{fontFamily: 'Lavishly Yours',fontWeight: 'bold', color: '#A97155'}}>C</Typography>
            Resort
          </Typography>


          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between'}}>


            <Box sx={{ flexGrow: 1,color: '#000', display: { xs: 'none', md: 'flex' } }}>
              
              <List className='navbar' sx={{textDecoration:'none',width: 450, display: 'flex',  fontSize: 18}}>
                    
                    {
                      navigationLinks.map(singlenav => (
                        <ListItem key={singlenav.name} className='navbar_li' sx={{display: 'flex', justifyContent: 'center', py: 0, px: '2px',fontSize: 20}}>
                      
                        <Link className='navbar_link' to={singlenav.href}>{singlenav.name}</Link>
                      
                        </ListItem>
                      ))
                    }
                </List>
            </Box>

              <Hidden mdUp>
                <IconButton  sx={{color: '#A97155'}}>
                  <MenuIcon fontSize="large" onClick={()=> setOpen(true)}/>
                </IconButton>
              </Hidden>
          
                <Box>
                    <Button sx={{bgcolor: '#A97155',fontWeight: 'bold', px: 4,py:'12px', mr:2,display: { xs: 'none', md: 'flex' }}} variant = "contained" href="/login">Book your Room</Button>
                    <Button sx={{bgcolor: '#A97155',fontWeight: 'bold', px: 4,py:'12px', mr:2,display: { xs: 'flex', md: 'none' }}} variant = "contained" href="/login">Book now</Button>
                </Box>
                
          </Box>
          
          

          
        </Toolbar>
      </Container>

      {/* mobile nav ________________ */}
      <SwipeableDrawer  sx={{display: { xs: 'flex', md: 'none' }}} anchor="left" 
      open={open} onOpen={()=> setOpen(true)} 
      onClose={()=> setOpen(false)
      }>
        <div className='navtabMenu'>
        <div>
          <IconButton className="navIcon"   sx={{color: '#A97155',display: 'flex', justifyContent: 'end',width: '100%'}}>
            <Clear fontSize="large"  onClick={()=> setOpen(false)}/>
            </IconButton>
        </div>
        <Divider />
        <List>
          {
            navigationLinks.map(item => (
              <ListItem key = {item.name} className="navbar_li">
                <Link 
                className= "navbar_link"
                to={item.href}
                >
                  {item.name}
                </Link>
              </ListItem>
              
            ))
          }
        </List>
        </div>
      </SwipeableDrawer>
    </AppBar>
  );
};
export default Navbar;