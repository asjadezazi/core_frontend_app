import React from 'react'
import { Stack, Typography, TextField, Button, Avatar } from "@mui/material";
import { useSelector } from 'react-redux';


const Profilebar = () => {
        const {darkMode} = useSelector((state)=>state.service)
    
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
                            color={darkMode?"white":"black"}
                        >
                            Samad
                        </Typography>

                        <Typography
                            variant="caption"
                            fontSize={"1.1rem"}
                            color={darkMode?"white":"black"}
                        >
                         this is bio.....
                        </Typography>

                        <Typography
                            variant="caption"
                            fontSize={"1rem"}
                            color={darkMode?"white":"black"}
                            
                        >
                            10 followers
                        </Typography>

                    </Stack>
                </Stack>
                <Button size="medium" sx={{
                    border:"1px solid gray",
                    color:"gray",
                    borderRadius:"8px",
                    height:40,
                    p:2,
                            // bgcolor={darkMode ? "white" : "black"}
                    }} >Follow</Button>
            </Stack>
        </>
    )
}

export default Profilebar