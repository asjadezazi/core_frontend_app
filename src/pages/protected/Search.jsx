import React from 'react'
import SearchInput from '../../components/search/SearchInput'
import Profilebar from '../../components/search/Profilebar'
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';




const Search = () => {
    const {darkMode} = useSelector((state)=>state.service)
  return (
    <>
    <Stack
    bgcolor={darkMode ? "black"  : "white"}
    
    >
    <SearchInput/>
    <Stack
    flexDirection={"column"}
    gap={1}
    mb={16}
    width={"90%"}
    mx={"auto"}
    maxWidth={"750px"}
    
    >
<Profilebar/>
<Profilebar/>
<Profilebar/>
<Profilebar/>
<Profilebar/>

    </Stack>
    </Stack>
    </>
  )
}

export default Search