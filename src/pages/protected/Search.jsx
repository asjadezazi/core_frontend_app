import React from 'react'
import SearchInput from '../../components/search/SearchInput'
import Profilebar from '../../components/search/Profilebar'
import { Stack } from '@mui/material';



const Search = () => {
  return (
    <>
    <SearchInput/>
    <Stack
    flexDirection={"column"}
    gap={1}
    mb={5}
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
    </>
  )
}

export default Search