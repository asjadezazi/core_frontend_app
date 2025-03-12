import React from "react";
import { Stack, Typography, Avatar } from "@mui/material";
import { FaPlus } from "react-icons/fa6";

const Highlights = () => {
  return (
    <>
      <Stack flexDirection={"column"}>
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
