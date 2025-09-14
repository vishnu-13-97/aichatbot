import React, { useEffect } from 'react';
import { Avatar, Box, Typography, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { useAuth } from '../context.jsx/Usercontext';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" } }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: 'column',
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {user?.name?.split(" ")[0][0]}
            {user?.name?.split(" ")[1]?.[0]}
          </Avatar>

          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a ChatBOT
          </Typography>

          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Knowledge, Business, Advices,
            Education, etc. But avoid sharing personal information
          </Typography>

          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Conversation
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
