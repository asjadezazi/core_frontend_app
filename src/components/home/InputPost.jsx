import React from "react"
import { Stack, Avatar, Typography , Button } from "@mui/material";

const InputPost = () => {
    return (
        <>
            <Stack
                flexDirection={"row"}
                alignItems={"center"}
                width={"75%"}
                height={28}
                justifyContent={"space-between"}
                padding={3}
                borderBottom={"2px soid gray"}
                my={5}
                mx={"auto"}
            >
                <Stack
                    flexDirection={"row"}
                    gap={2}
                    alignItems={"center"}
                >
                    <Avatar />
                    <Typography color="black" > Start your post </Typography>
                </Stack>
                <Button size="medium" sx={{ bgcolor:"gray", color:"aliceblue" , ":hover":{bgcolor:"black" , cursor:"pointer"}}}>Post</Button>
            </Stack>
        </>
    )
}

export default InputPost