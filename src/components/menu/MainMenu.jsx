import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleMainMenu , toggleColorMode } from "../../redux/slice";
// import {useLogoutMutation} from "../../redux/service"

const MainMenu = () => {
  // const [logoutUser , logoutUserData] = useLogoutMutation()
  const dispatch = useDispatch();
  const { anchorE1 } = useSelector((state) => state.service);
  const handleClose = () => {
    dispatch(toggleMainMenu(null));
  };
  const logout =  () => {
    // await logoutUser();
    handleClose();
  };
  // console.log(logoutUser)
  const account = () => {
    handleClose();
  };
  const toggleTheme = () => {
    dispatch(toggleColorMode())
    // console.log("hello")
    handleClose();

  };
  return (
    <>
      <Menu
        anchorEl={anchorE1}
        open={anchorE1 !== null ? true : false}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
      >
        <MenuItem onClick={account}>My account</MenuItem>
        <MenuItem onClick={toggleTheme}>Toggle Theme</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MainMenu;
