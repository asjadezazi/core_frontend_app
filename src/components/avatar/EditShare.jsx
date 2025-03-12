import React from "react";
import { Stack, Button } from "@mui/material";
import { MdOutlinePersonAdd } from "react-icons/md";

const EditShare = () => {
  return (
    <>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        <Button
          size="medium"
          sx={{
            border: "1px solid gray",
            color: "black",
            borderRadius: "8px",
            height: 40,
            pr:9,
            pl:9
            
          }}
        >
          Edit profile
        </Button>

        <Button
          size="medium"
          sx={{
            border: "1px solid gray",
            color: "black",
            borderRadius: "8px",
            height: 40,
            pr:9,
            pl:9
          }}
        >
          Share profile
        </Button>
        <Button
          size="medium"
          sx={{
            border: "1px solid gray",
            color: "black",
            borderRadius: "8px",
            height: 40,
            p: 2,
          }}
        >
          <MdOutlinePersonAdd size={30} />
        </Button>
      </Stack>
    </>
  );
};

export default EditShare;
