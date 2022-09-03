import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideoDetail, setRelatedVideoDetail] = useState([]);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      console.log("videoData", data.items[0]);
      setVideoDetail(data.items[0]);
    });

    fetchFromAPI(`search?relatedToVideoId=${id}&part=id,snippet&type=video`).then(data=>{
      console.log("RelatedVideoData", data.items);
      setRelatedVideoDetail(data.items);
    })
  }, [id]);

  // useEffect(() => {
  //   fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((channeldata) =>{
  //     setChannelDetail(channeldata?.items[0]);
  //     console.log("channeldata",channeldata?.items[0]);}
  //   );
  // }, [channelId])

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: {
      title,
      channelId,
      channelTitle,
      thumbnails: { high },
    },
    statistics: { likeCount, viewCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px"}}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap={3} alignItems="center">
                <Typography variant="body" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        
        <Box px={2} py={{md:1, xs:9}} justifyContent="center" alighItems="center">
      <Videos videos={relatedVideoDetail} direction="column" />
      </Box>
      </Stack>
      
    </Box>
  );
};

export default VideoDetail;
