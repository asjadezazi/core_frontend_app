import { useState, useRef } from "react";
import {
  Dialog,
  useMediaQuery,
  DialogTitle,
  Box,
  DialogContent,
  Stack,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaImages } from "react-icons/fa";

const AddPost = () => {
  const _700 = useMediaQuery("(min-width : 700px)");
  const _500 = useMediaQuery("(min-width : 500px)");
  const _300 = useMediaQuery("(min-width : 300px)");
  const [text, setText] = useState();
  const [media, setMedia] = useState();
  const mediaRef = useRef();
  const handleClose = () => {};

  const handleMedia = () => {
    mediaRef.current.click();
  };
  const handlePost = () => {};

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        fullScreen={_700 ? false : true}
      >
        <Box position={"absolute"} top={20} right={20} onClick={handleClose}>
          <RxCross2 size={28} className="image-icon" />
        </Box>
        <DialogTitle textAlign={"center"} mb={5}>
          New post
        </DialogTitle>
        <DialogContent>
          <Stack flexDirection={"row"} gap={2} mb={5}>
            <Avatar></Avatar>
            <Stack>
              <Typography variant="h5" fontWeight={"bold"} fontSize={"1rem"}>
                Samad_Malik
              </Typography>

              <textarea
                cols={_500 ? 40 : 25}
                rows={2}
                className="text-area"
                placeholder="Start a insta post"
                autoFocus
                onChange={(e) => setText(e.target.value)}
              />
              {media ? (
                <img
                  id="url-img"
                  src={URL.createObjectURL(media)}
                  width={_500 ? 300 : _300 ? 200 : 100}
                  height={_500 ? 300 : _300 ? 200 : 100}
                />
              ) : null}
              <FaImages
                size={28}
                className="image-icon"
                onClick={handleMedia}
              />

              <input
                type="file"
                accept="image/*"
                className="file-input"
                ref={mediaRef}
                onChange={(e) => setMedia(e.target.files[0])}
              />
            </Stack>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6" fontSize={"1rem"} color="gray">
              Anyone can reply
            </Typography>

            <Button
              size={"large"}
              sx={{
                color: "white",
                bgcolor: "black",
                ":hover": {
                  bgcolor: "gray",
                  color: "black",
                },
              }}
              onClick={handlePost}
            >
              Post
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPost;
