import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import {Link} from "react-router-dom"; 
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';


const PostReels = () => {
  
    const {darkMode} = useSelector((state)=>state.service)

  
  return (
    <>
      <Stack flexDirection={"row"} justifyContent={"space-between"}
      
      >
        <Typography sx={{ ":hover": { borderBottom: "3px solid black", cursor:"pointer"} }} fontSize={20} fontWeight={"bold"} >
         
         <Link 
         to={"insta"}
         >Insta</Link> 
         
        </Typography>
        <Typography sx={{ ":hover": { borderBottom: "3px solid black", cursor:"pointer" } }} fontSize={20} fontWeight={"bold"}>
        
        <Link to={"/replies"}>Replies</Link>
        </Typography>
        <Typography sx={{ ":hover": { borderBottom: "3px solid black", cursor:"pointer" } }} fontSize={20} fontWeight={"bold"}>
       
        <Link to={"/repost"}>Repost</Link>
        
        </Typography>

      </Stack>
      <Outlet/>
      
    </>
  );
};

export default PostReels;
