import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { Stack} from '@mui/material';
import Navbar from './Navbar'

const Header = () => {
  return (
   <>
   <Stack direction="row" spacing={2}>
    <Stack 
    flexDirection={"row"}
    height={52}
    justifyContent={"center"}
    justifyContent={"space-around"}
    position={'sticky'}
    top={0}
    py={1}
    bgcolor={"black"}
    >
        <img src="/Instagram_logo.png" alt="" />
    </Stack>
    <Stack justifyContent={"center"}
    width={"550px"}
    bgcolor={"aliceblue"}
    height={96}
    zIndex={2}


    
    >

    <Navbar/></Stack>
    <Stack><RxHamburgerMenu /></Stack>

    </Stack>

   </>
  )
}

export default Header