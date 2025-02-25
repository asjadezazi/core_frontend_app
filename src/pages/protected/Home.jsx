import React from 'react'
import {Stack} from '@mui/material';
import Inputpost from '../../components/home/InputPost'

const Home = () => {
  return (
    <>
    <Inputpost/>
    <Stack
    flexDirection={"column"}
    gap={2}
    mb={10}
    >
<p>post</p>
<p>post</p>
<p>post</p>
<p>post</p>
<p>post</p>
<p>post</p>
<p>post</p>
<p>post</p>
<p>post</p>

    </Stack>
    </>
  )
}

export default Home