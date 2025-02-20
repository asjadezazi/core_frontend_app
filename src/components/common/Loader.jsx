import {CircularProgress , Stack} from '@mui/material';


const Loader = () => {
  return (
    <Stack 
    flexDirection={"row"}
    minHeight={"50vh"}
    width={"100%"}
    height={"100%"}
    justifyContent={"center"}
    alignItems={"center"}
    my={5}>

        <CircularProgress  />
    </Stack>
  )
}

export default Loader