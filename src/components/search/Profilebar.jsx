import React from 'react'
import { Stack, Typography, TextField, Button, Avatar } from "@mui/material";


const Profilebar = () => {
    return (
        <>
            <Stack
                flexDirection={"row"}
                justifyContent={"space-between"}
                px={1}
                py={2}
                mx={"auto"}
                width={"90%"}
                boxShadow={"5px 5px 5px gray"}
                sx={{
                    ":hover": {
                        cursor: "pointer"
                    }
                }}
            >

                <Stack
                    flexDirection={"row"}
                    gap={2}

                >
                    <Avatar />
                    <Stack
                        flexDirection={"column"}
                      
                    >
                        <Typography
                            variant="h6"
                            fontWeight={"bold"}
                            fontSize={"1rem"}
                        >
                            Samad
                        </Typography>

                        <Typography
                            variant="caption"
                            fontSize={"1.1rem"}
                            color="gray"
                        >
                         this is bio.....
                        </Typography>

                        <Typography
                            variant="caption"
                            fontSize={"1rem"}
                            color="gray"
                        >
                            10 followers
                        </Typography>

                    </Stack>
                </Stack>
                <Button size="medium" sx={{
                    border:"1px solid gray",
                    color:"black",
                    borderRadius:"8px",
                    height:40,
                    p:2
                    }}>Follow</Button>
            </Stack>
        </>
    )
}

export default Profilebar