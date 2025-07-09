import React from 'react'
import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


const Bio = () => {
      const {darkMode} = useSelector((state)=>state.service)
  
  return (
    <>
<Stack
flexDirection={"column"
  
}
color={darkMode?"white":"black"}
>
<Typography
 fontWeight={"bold "}
 
>
    JHU <br />
    ERROR 404 <br />
    Oops, User not found..... <br />

</Typography>

</Stack>
    </>
  )
}

export default Bio