import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box textAlign="center" py={4} borderTop="1px solid #333" mt={6}>
        <Typography variant="body2">
          © {new Date().getFullYear()} MyChatBot. All Rights Reserved.
        </Typography>
      </Box>
  )
}

export default Footer