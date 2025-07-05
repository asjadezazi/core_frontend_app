import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Stack } from '@mui/material';
import Navbar from './Navbar'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/* <Stack direction="row" spacing={2}> */}
        <Stack
          flexDirection={"row"}
          height={52}
          justifyContent={"space-around"}
          alignItems={"center"}
          position={'sticky'}
          top={0}
          py={1}
        >
          <img src="/Instagram_logo.png" alt="" width={60} height={35}/>
       
        <Stack 
        justifyContent={"center"}
          width={"550px"}
          bgcolor={"aliceblue"}
          height={96}
          zIndex={2}
        >
        <Navbar />
  </Stack>
  <Stack flexDirection={"column"}>
       <RxHamburgerMenu size={36} color='gray' cursor={"pointer"} className='img-icon'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       /> 
       <Menu
      
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Dark Mode</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      </Stack>
        </Stack>
      {/* </Stack> */}
    </>
  )
}

export default Header