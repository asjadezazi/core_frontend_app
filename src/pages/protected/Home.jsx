import React from 'react'
import {Stack} from '@mui/material';
import Inputpost from '../../components/home/InputPost'
import Post from '../../components/home/Post'
import { useSelector } from 'react-redux';


const Home = () => {
  const {darkMode} = useSelector((state)=>state.service)
  return (
    <>
    <Stack
    bgcolor={darkMode?'black':"white"}
    >
    <Inputpost/>
    <Stack
    flexDirection={"column"}
    gap={2}
    mb={10}
    // bgcolor={'black'}
    >

<Post/>
<Post/>
<Post/>
<Post/>
<Post/>
<Post/>

    </Stack>
    </Stack>
    </>
  )
}

export default Home