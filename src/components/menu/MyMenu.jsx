import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { toggleMyMenu } from "../../redux/slice";
import { useSelector, useDispatch } from "react-redux";

const MyMenu = () => {
  const dispatch = useDispatch();
  const { anchorE2 } = useSelector((state) => state.service);
  const handleClose = () => {
    dispatch(toggleMyMenu(null));
  };
  const handleDelete = () => {
    handleClose();
  };
  return (
    <>
      <Menu
        anchorEl={anchorE2}
        open={anchorE2 !== null ? true : false}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default MyMenu;
