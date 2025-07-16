import { Stack, Typography, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSigninMutation, useLoginMutation } from "../redux/service";

const Register = () => {
  const [login, setLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _700 = useMediaQuery("(min-width:700px)");

  const [signinUser, signinUserData] = useSigninMutation();
  const [loginUser, loginUserData] = useLoginMutation();

  const toggleLogin = () => {
    setLogin((pre) => !pre);
  };

  const handleLogin = async () => {
    const data = {
      email,
      password,
    };
    await loginUser(data);
    console.log("handleLogin", data);
  };
  const signupHandle = async () => {
    const data = {
      username,
      email,
      password,
    };
    console.log("signupHandle", data);
    await signinUser(data);
    // console.log("hello");
  };
  // useEffect(() => {
  //   if (signinUserData.isSuccess) {
  //     console.log("signinUserData success>>>>>>>> ", signinUserData.data.msg);
  //   }
  //   if (signinUserData.isError) {
  //     console.log("signinUserData error>>>>>>>>", signinUserData.error.data.msg);
  //   }
  // }, [signinUserData.isSuccess, signinUserData.isError]);

  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Stack width={_700 ? "40%" : "90%"} gap={2} flexDirection={"column"}>
          <Typography
            variant="h5"
            fontSize={_700 ? "1.5rem" : "1rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            {login ? "Login with email" : "Register with email"}
          </Typography>

          {login ? null : (
            <TextField
              variant="outlined"
              placeholder="Enter Your Name"
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          <TextField
            variant="outlined"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            size="large"
            sx={{
              width: "100%",
              height: 52,
              bgcolor: "green",
              color: "white",
              fontSize: "1rem",
              ":hover": { bgcolor: "blue", cursor: "pointer" },
            }}
            onClick={login ? handleLogin : signupHandle}
          >
            {login ? "login" : "sign up"}
          </Button>

          <Typography
            fontSize={_700 ? "1.3rem" : "1rem"}
            alignSelf={"center"}
            variant="subtitle2"
          >
            {login ? "Don't have an account ?" : "Already have an account ? "}

            <span className="login-link" onClick={toggleLogin}>
              {login ? "sign up " : "login"}
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
