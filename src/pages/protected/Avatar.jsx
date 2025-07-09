import { Stack } from '@mui/material';
import ProfileName from '../../components/avatar/ProfileName'
import Photofollower from '../../components/avatar/Photofollower'
import Bio from '../../components/avatar/Bio';
import Highlights from '../../components/avatar/Highlights'
import PostReels from '../../components/avatar/PostReels';
import EditButton from '../../components/avatar/EditButton';
import { useSelector } from 'react-redux';



const Avatar = () => {
      const {darkMode} = useSelector((state)=>state.service)
  
  return (
    <>
    <Stack
    flexDirection={"column"}
    m={"auto"}
    // justifyContent={"space-between"}
    gap={3}
    bgcolor={darkMode?"black":'white'}
    >
    <ProfileName/>
    <Photofollower/>
    <Bio/>
    <EditButton/>
    <Highlights/>
    <PostReels/>
    </Stack>
    </>
  )
}

export default Avatar