import React from "react";
import { Stack, Typography } from "@mui/material";
import { LuGrip } from "react-icons/lu";
import { GoVideo } from "react-icons/go";
import { LuContactRound } from "react-icons/lu";

const PostReels = () => {
  return (
    <>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Typography sx={{ ":hover": { borderBottom: "3px solid black" } }}>
          <LuGrip size={36} cursor={"pointer"} />
        </Typography>
        <Typography sx={{ ":hover": { borderBottom: "3px solid black" } }}>
        <GoVideo size={36} cursor={"pointer"} />
        </Typography>
        <Typography sx={{ ":hover": { borderBottom: "3px solid black" } }}>
        <LuContactRound size={36} cursor={"pointer"} />
        </Typography>

      </Stack>
      
    </>
  );
};

export default PostReels;
