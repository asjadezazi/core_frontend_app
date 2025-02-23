import { Stack,Typography,TextField,Button } from '@mui/material';

const Register = () => {
  return (
    <>
    <Stack
    width={"100%"}
    height={"100vh"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"row"}
    >
<Stack
width={"40%"}
gap={2}
flexDirection={"column"}
>

<Typography variant="h5" 
fontSize={"1.5rem"}
fontWeight={"bold"}
alignSelf={"center"}
>
  Register with email
</Typography>

<TextField variant="outlined" placeholder="Enter Your Name" />
<TextField variant="outlined" placeholder="Enter Your Email"/>
<TextField variant="outlined" placeholder="Enter Your Password" />
<Button size="large" sx={{width:"100%", height:52 , bgcolor:"green" , color:"white" , fontSize: "1rem" , ":hover":{bgcolor:"blue" , cursor:"pointer"}}}>Sign Up</Button>

<Typography fontSize={"1.2rem"} alignSelf={"center"} variant="subtitle2">
  Already have an account ?  <span  className="login-link">  Login </span> 
</Typography>

</Stack>

    </Stack>
    </>
  )
}

export default Register