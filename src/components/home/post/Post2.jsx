import React from "react";
import { Stack, Typography } from "@mui/material";
import { FaRegHeart, FaRegComment, FaRetweet } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";

const Post2 = () => {
  const { darkMode } = useSelector((state) => state.service);
  return (
    <>
      <Stack
        flexDirection={"column"}
        justifyContent={"space-between"}
        bgcolor={darkMode ? "black" : "white"}
      >
        <Stack flexDirection={"column"} gap={2}>
          <Stack flexDirection={"column"} color={darkMode ? "white" : "black"}>
            <Typography variant="h6" fontSize={"1rem"} fontWeight={"bold"}>
              hello
            </Typography>

            <Typography
              variant="h5"
              fontSize={"1.2rem"}
              color={darkMode ? "white" : "black"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              est.
            </Typography>
          </Stack>

          <img
            src="/w.jpeg"
            alt=""
            loading="lazy"
            width={"400px"}
            height={"auto"}
          />
        </Stack>

        <Stack
          flexDirection={"column"}
          gap={1}
          color={darkMode ? "white" : "black"}
        >
          <Stack flexDirection={"row"} gap={2} m={1}>
            <FaRegHeart size={30} />
            <FaRegComment size={30} />
            <FaRetweet size={30} />
            <IoIosSend size={30} />
          </Stack>

          <Stack flexDirection={"row"} position={"relative"}>
            <Typography
              variant="caption"
            //   color="black"
              fontSize={"1.1rem"}
              color={darkMode ? "white" : "black"}
            >
              5 likes .
            </Typography>

            <Typography
              variant="caption"
            //   color="black"
              fontSize={"1.1rem"}
              color={darkMode ? "white" : "black"}
            >
              5 comments
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Post2;
