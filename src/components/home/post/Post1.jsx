import React from 'react'
import { Stack, Badge, Avatar, Stepper, AvatarGroup } from "@mui/material";


const Post1 = () => {
    return (
        <>
<Stack
     flexDirection={"column"}
     alignItems={"center"}
     justifyContent={"space-between"}
            
            >
                
            <Badge 
                overlap="circular"
                anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    badgeContent={
                    <Avatar
                        sx={{
                            width: 20,
                            height: 20,
                            bgcolor: "green",
                            position: "relative",
                            right: 4,
                            bottom: 4
                        }}

                    >+</Avatar >} >

                    <Avatar
                        sx={{
                            width: 40,
                            height: 40,

                        }}
                    > </Avatar>
                </Badge>
                <Stack
                    flexDirection={"column"}
                    gap={2}
                    alignItems={"center"}
                    height={"100%"}

                >
                    <Stepper
                        activeStep={0}
                        orientation="vertical"
                        sx={{
                            border: "0.1rem solid gray",
                            height: "100%",
                            width: "0px"
                        }}
                    >

                    </Stepper >
                    <AvatarGroup
                        total={40}
                        max={3}
                        sx={{
                            width: 20,
                            height: 20,
                            fontSize: 12
                        }}>

                        <Avatar></Avatar>
                        <Avatar></Avatar>
                        <Avatar></Avatar>
                        <Avatar></Avatar>
                        <Avatar></Avatar>
                        <Avatar></Avatar>
                        <Avatar></Avatar>
                        <Avatar></Avatar>
                        <Avatar></Avatar>


                    </AvatarGroup>
                </Stack>

            </Stack>
        </>
    )
}

export default Post1