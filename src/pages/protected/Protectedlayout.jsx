import React from 'react'
import {Outlet} from 'react-router-dom'
import {Stack} from '@mui/material';
import Header from  '../../components/common/Header'
import AddPost from '../../components/modals/AddPost';
import EditProfile from '../../components/modals/EditProfile';
import MainMenu from '../../components/menu/MainMenu';
import MyMenu from '../../components/menu/MyMenu';
import { useSelector } from 'react-redux';
import SinglePost from './SinglePost';


const Protectedlayout = () => {
    const {darkMode} = useSelector((state)=>state.service)
  
  return (
    <>
    <Stack 
    bgcolor={darkMode?'black':"white"}
    flexDirection={"column"}
    minWidth={"100%"}
    mx={"auto"}
    overflow={"hidden"}
    >
        <Header/>
        <AddPost/>
      <EditProfile/>
      <MyMenu/>
      <MainMenu/>
        <Outlet/>
        {/* <SinglePost/> */}

    
    </Stack>
    </>
  )
}

export default Protectedlayout