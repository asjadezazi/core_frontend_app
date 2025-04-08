import React from 'react'
import { Stack, Typography } from "@mui/material";
import { FaRegHeart , FaRegComment ,FaRetweet } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


const Post2 = () => {
    return (
        <>
            <Stack
                flexDirection={"column"}
                justifyContent={"space-between"}
            >
                <Stack
                    flexDirection={"column"}
                    gap={2}
                >
                    <Stack
                        flexDirection={"column"}
                    >
                        <Typography
                            variant="h6"
                            fontSize={"1rem"}
                            fontWeight={"bold"}
                        >
                            hello
                        </Typography>


                        <Typography
                            variant="h5"
                            fontSize={"1.2rem"}

                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, est.
                        </Typography>


                    </Stack>

<img src="/w.jpeg" alt=""  loading="lazy" width={"400px"} height={"auto"} />

                </Stack>

                <Stack
                 flexDirection={"column"}
                 gap={1}

                >
                     <Stack
                        flexDirection={"row"}
                        gap={2}
                        m={1}
                     >
<FaRegHeart size={30}/>
<FaRegComment size={30}/>
<FaRetweet size={30}/>
<IoIosSend size={30}/>
                     </Stack>

                     <Stack
                      flexDirection={"row"}
                     
                      position={"relative"}
                     >
                        <Typography
                        variant="caption"
                        color="GrayText"
                        fontSize={"1.1rem"}
                        >
5 likes .
                        </Typography>

                        <Typography
                        variant="caption"
                        color="GrayText"
                        fontSize={"1.1rem"}
                        >
 5 comments 
                        </Typography>


                     </Stack>

                </Stack>

            </Stack>
        </>
    )
}

export default Post2