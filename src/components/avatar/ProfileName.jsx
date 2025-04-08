import React from 'react'
import { Stack, Typography } from '@mui/material';
import { FaAngleDown ,  FaAt} from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";




const ProfileName = () => {
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
   
       >
        asjadezazi
        <FaAngleDown cursor={"pointer"}/>
       </Typography>
       
       <Stack
       flexDirection={"row"}
       gap={4}
   
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