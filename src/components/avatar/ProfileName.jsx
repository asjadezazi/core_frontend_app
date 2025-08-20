import React from 'react'
import { Stack, Typography } from '@mui/material';
import { FaAngleDown ,  FaAt} from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from 'react-redux';




const ProfileName = () => {
  const {darkMode} = useSelector((state)=>state.service)
  return (
    <>
    <Stack
    flexDirection={"row"}
    justifyContent={"space-between"}
    mt={5}
    >
       <Typography
       fontSize={25}
       variant="h2"
   color={darkMode?"white":"black"}
       >
        asjadezazi
        <FaAngleDown cursor={"pointer"} color={darkMode?"white":"black"}/>
       </Typography>
       
       <Stack
       flexDirection={"row"}
       gap={4}
   color={darkMode?"white":"black"}
   
       >
       <FaAt size={36}  cursor={"pointer"} />
       <CiSquarePlus size={36}  cursor={"pointer"} />
       {/* <RxHamburgerMenu size={36}  cursor={"pointer"} /> */}
       
       </Stack>


    </Stack>
    </>
  )
}

export default ProfileName