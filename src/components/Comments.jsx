import React from "react";
import { Stack, Box } from "@mui/material";
import { CommentCard, LoadingScreen } from "./";

const Comments = ({ videoComments }) => {
  console.log("videoComments", videoComments);
  if(!videoComments?.length) return <LoadingScreen />
  return (
    <Stack direction="column" justifyContent="start" gap={3}>
      {videoComments.map((comment, idx) => (
        <Box key={idx}>
          <CommentCard comment={comment} />
        </Box>
      ))}
    </Stack>
  );
};

export default Comments;
