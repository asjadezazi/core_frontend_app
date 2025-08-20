import React from "react";
import { Stack, Typography } from "@mui/material";

const Profilelayout = () => {
  return (
    <>
      <Stack
        flexDirection={"column"}
        gap={2}
        p={2}
        m={2}
        width={"800px"}
        mx={"auto"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack flexDirection={"column"} gap={2}>
            <Typography variant="h2" fontWeight={"bold"} fontSize={"1rem"}>
              Samad
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Profilelayout;
