import React from 'react'
import { Stack,Typography } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import Post1 from "./post/Post1"
import Post2 from "./post/Post2"



const Post = () => {
    return (
        <>
            <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                borderBottom={"3px solid gray"}
                p={2}
                mx={"auto"}
                width={"70%"}
                sx={{
                    ":hover": {
                        cursor: "pointer"
                        , boxShadow: "10px 10px 10px gray",
                    },
                    transition: "all ease-in-out 0.2s"
                }}

            >

                <Stack
                    flexDirection={"row"}
                    gap={2}
                >

                    <Post1/>
                    <Post2/>
                    
                </Stack>
<Stack
flexDirection={"row"}
justifyContent={"center"}
gap={1}
fontSize={"1rem"}
>
<Typography
variant="caption"
color="GrayText"
fontSize={"1rem"}
position={"relative"}
top={2}

>
20h
</Typography>
<IoIosMore size={28} />
</Stack>

            </Stack>
        </>
    )
}

export default Post