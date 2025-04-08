import React from "react";
import { Stack, Badge, Avatar, Typography } from "@mui/material";

const Photofollower = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        //  justifyContent={"space-evenly"}
        // m={"auto"}
        gap={2}
      >
        <Badge
          overlap="circular"
          
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
            
            
          }}
          badgeContent={
            
            <Avatar
              sx={{
                width: 30,
                height: 30,
                bgcolor: "green",
                position: "relative",
                right: 4,
                bottom: 4,
                
              }}
            >
              +
            </Avatar>
          }
        >
          <Avatar
          
            sx={{
              width: 100,
              height: 100,
              
            }}
          >
            
          </Avatar>
        </Badge>
        <Stack
          flexDirection={"column"}
          gap={2}
          alignItems={"center"}
          height={"100%"}
        ></Stack>
        <Stack flexDirection={"column"}>
          <Typography variant="h6" 
          sx={{
            fontSize:17,
            fontWeight:"bold"
          }}
          >
            Asjad Gaur Ezazi
          </Typography>

         <Stack
         flexDirection={"row"}
        gap={10}
        justifyContent={"space-between"}
         >
<Typography

sx={{
    fontSize:25,
    fontWeight:"bold"
   
}}
>
    0
    <br />
    posts
</Typography>

<Typography

sx={{
    fontSize:25,
    fontWeight:"bold"
   
}}
>
   457
   <br />
   followers    
</Typography>

<Typography

sx={{
    fontSize:25,
    fontWeight:"bold"
   
}}
>
    402
    <br />
    following
</Typography>



         </Stack>





        </Stack>
      </Stack>
    </>
  );
};

export default Photofollower;
