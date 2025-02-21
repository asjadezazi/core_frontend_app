import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Stack } from '@mui/material';
import Navbar from './Navbar'

const Header = () => {
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
       <RxHamburgerMenu size={36} color='gray' cursor={"pointer"} className='img-icon'/> 
        </Stack>
      {/* </Stack> */}
    </>
  )
}

export default Header