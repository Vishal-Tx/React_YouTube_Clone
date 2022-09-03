import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CardMedia } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  // console.log("channelDetail", channelDetail);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
      // console.log("channelvideos",data.items)
    );
  }, [id]);
  // console.log(id);
  if(!channelDetail?.brandingSettings?.image?.bannerExternalUrl) return "Loading..."

  const {brandingSettings:{image:{bannerExternalUrl}}} = channelDetail;

  return (
    <Box minHeight="95vh" sx={{}}>
      <Box>
        <div style={{
            backgroundColor:"#11120f",
            width:"auto"}}>
        <CardMedia
          image={
            bannerExternalUrl
          }
          sx={{
            backgroundColor:"#fff",
          height:"230px",
          width:{sm:"auto", md:"1000px"},
          margin:"auto",}}
        />
        </div>
        {/* <div
          style={{
            background:
              "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 52%, rgba(252,176,69,1) 100%)",
            zIndex: 10,
            height: "300px",
          }} /> */}
        <ChannelCard channelDetail={channelDetail} marginTop="-99px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos} />
      </Box>

      
    </Box>
  );
}

export default ChannelDetail;
