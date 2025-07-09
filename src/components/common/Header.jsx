import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Stack } from "@mui/material";
import Navbar from "./Navbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainMenu } from "../../redux/slice";
import { TbBackground } from "react-icons/tb";

const Header = () => {
  const { darkMode } = useSelector((state) => state.service);
  const dispatch = useDispatch();
  const handleOpenMenu = (event) => {
    dispatch(toggleMainMenu(event.currentTarget));
  };
  return (
    <>
      <Stack
        flexDirection={"row"}
        height={100}
        justifyContent={"space-around"}
        alignItems={"center"}
        position={"sticky"}
        top={0}
        py={1}
        bgcolor={darkMode ? "black" : "white"}
      >
        {darkMode ? (
          <img
            src="/Instagram_logo.png"
            alt=""
            width={50}
            height={50}
            color="black"
          />
        ) : (
          <img src="/images.png" alt="" height={80} />
        )}

        <Stack
          justifyContent={"center"}
          width={"550px"}
          bgcolor={"aliceblue"}
          height={96}
          zIndex={2}
        >
          <Navbar />
        </Stack>
        <Stack flexDirection={"column"}>
          <RxHamburgerMenu
            size={36}
            color="gray"
            cursor={"pointer"}
            className="img-icon"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpenMenu}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
