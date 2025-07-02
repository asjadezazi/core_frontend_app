import React from "react"
import { Stack, Avatar, Typography, Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from "react-redux";
import { addPostModal } from "../../redux/slice";


const Inputpost = () => {
    const dispatch = useDispatch()
    const abc = () =>{
     dispatch(addPostModal(true))
    }
  const _700 = useMediaQuery('(min-width:700px)');
    return (
        <>
            <Stack
                flexDirection={"row"}
                alignItems={"center"}
                width={_700 ? "75%" : "90%"}
                height={28}
                justifyContent={"space-between"}
                padding={3}
                my={5}
                mx={"auto"}
                borderBottom={"solid 2px gray"}

            >
                <Stack
                    flexDirection={"row"}
                    gap={2}
                    alignItems={"center"}

                >
                    <Avatar />
                    <Typography color="black" fontSize={_700 ? "1.2rem" : "1rem"} onClick={abc} sx={{cursor:"pointer"}}> Start your post </Typography>
                </Stack>
                <Button size="medium" sx={{ bgcolor: "gray", color: "aliceblue", ":hover": { bgcolor: "black", cursor: "pointer" } }}>Post</Button>
            </Stack>
        </>
    )
}

export default Inputpost