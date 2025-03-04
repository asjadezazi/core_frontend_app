import React from 'react'
import {Stack} from '@mui/material';
import Inputpost from '../../components/home/InputPost'
import Post from '../../components/home/Post'


const Home = () => {
  return (
    <>
    <Inputpost/>
    <Stack
    flexDirection={"column"}
    gap={2}
    mb={10}
    >

<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>

    </Stack>
    </>
  )
}

export default Home