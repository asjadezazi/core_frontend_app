import React from "react";
import { Stack, Typography, Avatar } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';


const Highlights = () => {
      const {darkMode} = useSelector((state)=>state.service)
  
  return (
    <>
      <Stack flexDirection={"column"}
color={darkMode?"white":"black"}
      
      >
        <Stack
         flexDirection={"row"}
         gap={3}
        >
          <Avatar
            sx={{
              width: 50,
              height: 50,
              bgcolor: "gray",
              position: "relative",
              
              right: 4,
              bottom: 4,
            }}
          >
            <FaPlus cursor={"pointer"} />

            
          </Avatar>
          
        </Stack>
        <Stack flexDirection={"row"}
       
        >
          <Typography fontWeight={"bold"}>New</Typography>
          


        </Stack>
      </Stack>
    </>
  );
};

export default Highlights;
