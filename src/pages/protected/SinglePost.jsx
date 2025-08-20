import React from "react";
import Post from "../../components/home/Post";
import { Stack, TextField } from "@mui/material";

const SinglePost = () => {
  return (
    <>
      <Stack flexDirection={"column"} my={5} gap={2}>
        <Post />

        <Stack flexDirection={"column"} width={"80%"} mx={"auto"}>
          Comment
        </Stack>

        <TextField
          variant="outlined"
          autoFocus
          placeholder="Comment here..."
          id="comment"
          sx={{
            width: "50%",
            mx: "auto",
            my: 5,
            p: 1,
          }}
        ></TextField>
      </Stack>
    </>
  );
};

export default SinglePost;
