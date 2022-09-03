import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";



const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
    contentDetails,
    statistics
  },
}) => {
  


  return (
  <Card
    sx={{
      display:"flex",
      flexDirection: { xs:"column", sm: "row", md: "column"  },
      height:{xs: "100%", sm: "166px", md: "295px"},
      width: { xs: "100%", sm: "100%", md: "295px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "295px" }, height: "166px" }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height:{xs: "100%", sm: "166px", md: "295px"}, width:{xs:"100%", sm:"100%", md:'100%'} }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
          {snippet?.title.slice(0, 55) || demoVideoTitle.slice(0, 60)}...
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
        <Typography color="gray">
        {snippet?.publishedAt}
        </Typography>
      </Link>
    </CardContent>
  </Card>
)};

export default VideoCard;
