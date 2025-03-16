import { Stack, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

const Register = () => {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLogin = () => {
    setLogin((pre) => !pre);
  };
  

  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
      >
        <Stack width={"40%"} gap={2} flexDirection={"column"}>
          <Typography
            variant="h5"
            fontSize={"1.5rem"}
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
          >
            {login ? "login" : "sign up"}
          </Button>

          <Typography
            fontSize={"1.2rem"}
            alignSelf={"center"}
            variant="subtitle2"
          >
            {login ? "Don't have an account ?" : "Already have an account ? "}

            <span className="login-link" onClick={toggleLogin} >
              {login ? "sign up " : "login" }
              
            </span>
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
