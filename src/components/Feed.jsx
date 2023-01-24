import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from './index';

const Feed = () => {
  return (
    <Stack
      sx={{ flexDirection: { sx: 'column', md: 'row' }}}
    >
      <Box
        sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '2px solid #A51C30', px: {sx: 0, md: 2}, p:1 }}
      >
        <Sidebar />
      {/* Copyright */}
        <Typography 
          className="copyright"
            variant='body2'
            sx={{ mt: 1.5, color: '#fff' }}
          >
          Copyright © 2023 Min.K 
        </Typography>
      </Box>
    {/* Videos Feed */}
      <Box 
        p={2}
        sx={{
          overflow: 'auto',
          height: '90vh',
          flex: 2,
        }}
      >
        <Typography 
          variant="h4"
          fontWeight='bold'
          mb={2}
          sx={{
            color: 'white'
          }}
        >
          NEW
          <span 
            style={{ color: '#A51C30'}}
          >
            Videos
          </span>
        </Typography>
      {/* VIDEOS */}
        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed