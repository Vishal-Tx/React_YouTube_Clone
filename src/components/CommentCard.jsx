import React from "react";
import { Link } from "react-router-dom";
import { Stack, Box, Card, CardMedia, Typography } from "@mui/material";
import ProfilePicture from "../Images/dp.png";

const CommentCard = ({ comment }) => {
  const {
    snippet: {
      topLevelComment: {
        snippet: { textDisplay, authorProfileImageUrl, authorChannelId },
      },
    },
  } = comment;
  // console.log("commentCard", comment)
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "60px",
        width: "auto",
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "black",
      }}
    >
      <Link to={`/channel/${authorChannelId.value}`}>
        <CardMedia
          image={authorProfileImageUrl}
          alt={ProfilePicture}
          sx={{ minWidth: "60px", height: "60px", borderRadius: "50%", ml: 2 }}
        />
      </Link>

      <Typography variant="subtitle5" color="#fff" ml={3} flexWrap="wrap">
        {textDisplay}
      </Typography>
    </Card>
    // <Box>{textDisplay}</Box>
  );
};

export default CommentCard;
