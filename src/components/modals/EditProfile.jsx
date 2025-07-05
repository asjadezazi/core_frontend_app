import React, { useState, useRef } from "react";
import {
  Dialog,
  useMediaQuery,
  Box,
  DialogTitle,
  DialogContent,
  Stack,
  Avatar,
  Button,
  Typography,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { editProfileModal } from "../../redux/slice";
import { useDispatch , useSelector} from "react-redux";


const EditProfile = () => {
  const {openEditProfileModal} = useSelector((state)=>state.service)
  const dispatch = useDispatch()

  const _700 = useMediaQuery("(min-width : 700px)");
  const [pic, setPic] = useState();
  const [bio, setBio] = useState();
  const imgRef = useRef();

  const handleCloseProfile = () => {
  dispatch(editProfileModal(false))
  };

  const handlePhoto = () => {
    imgRef.current.click();
  };
  return (
    <>
      <Dialog
        open={openEditProfileModal}
        onClose={handleCloseProfile}
        fullWidth
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleCloseProfile}>
          <RxCross2 size={28} onClick={handleCloseProfile} className="image-icon"/>
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          Edit Profile
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"column"} gap={1}>
            <Avatar
              sx={{ width: 96, height: 96, alignSelf: "center" }}
              src={pic ? URL.createObjectURL(pic) : ""}
            />
            <Button
              size="large"
              sx={{
                border: "2px solid gray",
                borderRadius: "10px",
                height: 45,
                width: 96,
                alignSelf: "center",
                my: 2,
              }}
              onClick={handlePhoto}
            >
              Change
            </Button>

            <input
              type="file"
              className="file-input"
              accept="image/*"
              ref={imgRef}
              onChange={(e) => setPic(e.target.files[0])}
            />
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
              variant="subtitle1"
            >
              Username
            </Typography>
            <input type="text" value={"Samad Malik"} readOnly />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
              variant="subtitle1"
            >
              Email
            </Typography>

            <input type="text" value={"samadmalikz123@gmail.com"} readOnly />
          </Stack>
          <Stack flexDirection={"column"} gap={1}>
            <Typography
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              my={2}
              variant="subtitle1"
            >
              Bio
            </Typography>

            <input type="text" value={"Change Bio"} readOnly />
          </Stack>
          <Button
            size="large"
            sx={{
              border: "2px solid gray",
              borderRadius: "10px",
              bgcolor: "GrayText",
              color: "white",
              width: "100%",
              alignSelf: "center",
              my: 2,
              fontSize: "1.2rem",
            }}
          >
            Update
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditProfile;
