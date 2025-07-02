import React from 'react'
import {Outlet} from 'react-router-dom'
import {Stack} from '@mui/material';
import Header from  '../../components/common/Header'
import AddPost from '../../components/modals/AddPost';


const Protectedlayout = () => {
  return (
    <>
    <Stack 
    flexDirection={"column"}
    minWidth={"100%"}
    mx={"auto"}
    overflow={"hidden"}
    >
        <Header/>
        <AddPost/>
        <Outlet/>
    
    </Stack>
    </>
  )
}

export default Protectedlayout