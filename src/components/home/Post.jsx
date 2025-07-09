import React from 'react'
import { Stack, Typography } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import Post1 from "./post/Post1"
import Post2 from "./post/Post2"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector ,useDispatch} from 'react-redux';
import { toggleMyMenu } from '../../redux/slice';




const Post = () => {
    const dispatch = useDispatch();
    const {darkMode} = useSelector((state)=>state.service)
  const _700 = useMediaQuery('(min-width:700px)');
  const handleOpenMenu = (event) => {
    // console.log("hello")
      dispatch(toggleMyMenu(event.currentTarget));
    };
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
                bgcolor={darkMode? "black" :"white"}

            >

                <Stack
                    flexDirection={"row"}
                    gap={1}
                >

                    <Post1 />
                    <Post2 />
                    


                </Stack>
                <Stack
                    flexDirection={"row"}
                    justifyContent={"center"}
                    gap={1}
                    fontSize={"1rem"}
                    color={darkMode?"white":"black"}
                >
                    <Typography
                        variant="caption"
                        color="gray"
                        fontSize={"1rem"}
                        position={"relative"}
                        top={2}

                    >
                        20h
                    </Typography>
                    <IoIosMore size={28} cursor={"pointer"} onClick={handleOpenMenu}/>     
                </Stack>

            </Stack>
        </>
    )
}

export default Post