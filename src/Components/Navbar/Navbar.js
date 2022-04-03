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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link } from 'react-router-dom';
import { Divider, Hidden, List, ListItem, ListItemText } from '@mui/material';
import './Navbar.css'
import { ChevronRight, Clear } from '@material-ui/icons';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const Navbar = () => {
  const [open, setOpen] =useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

   

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

          {/* mobile/laptop_____________________ */}

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
                    <ListItem className='navbar_li' sx={{display: 'flex', justifyContent: 'center', py: 0, px: '2px',fontSize: 20}}>
                      
                        <Link className='navbar_link' to="/">Home</Link>
                      
                    </ListItem>
                    <ListItem className='navbar_li' sx={{display: 'flex', justifyContent: 'center', py: 0, px: '2px',fontSize: 20}}>
                      
                        <Link className='navbar_link' to="/about">Rooms</Link>
                      
                    </ListItem>
                    <ListItem className='navbar_li' sx={{display: 'flex', justifyContent: 'center', py: 0, px: '2px',fontSize: 20}}>
                      
                        <Link className='navbar_link' to="/contact">About US</Link>
                      
                    </ListItem>
                    <ListItem className='navbar_li' sx={{display: 'flex', justifyContent: 'center', py: 0, px: '2px',fontSize: 20}}>
                      
                        <Link className='navbar_link' to="/about">News</Link>
                    </ListItem>
                </List>
            </Box>

              <Hidden mdUp>
                <IconButton  sx={{color: '#A97155'}}>
                  <MenuIcon fontSize="large" onClick={()=> setOpen(true)}/>
                </IconButton>
              </Hidden>
          
                <Box >
                    <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    </Tooltip>
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                
          </Box>
          
          

          
        </Toolbar>
      </Container>
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