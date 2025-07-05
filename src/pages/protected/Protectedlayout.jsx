import React from 'react'
import {Outlet} from 'react-router-dom'
import {Stack} from '@mui/material';
import Header from  '../../components/common/Header'
import AddPost from '../../components/modals/AddPost';
import EditProfile from '../../components/modals/EditProfile';


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
      <EditProfile/>
        <Outlet/>
    
    </Stack>
    </>
  )
}

export default Protectedlayout