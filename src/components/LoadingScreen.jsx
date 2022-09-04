import React from 'react'
import { Oval } from 'react-loading-icons'
import { Typography, Box } from "@mui/material";

const LoadingScreen = () => {
  return (
    <Box minHeight ="95vh" display="flex" justifyContent="center" alignItems="center">
    
    <Oval stroke="red" />
    <Typography color="red" pl={1} fontWeight="bold" fontSize="20px">
    Loading...
    </Typography>
    </Box>
  )
}

export default LoadingScreen;