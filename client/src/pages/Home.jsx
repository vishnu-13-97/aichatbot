import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Box width="100%" minHeight="100vh" sx={{ backgroundColor: "#050505", color: "white" }}>
      
      {/* Hero Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        textAlign={{ xs: "center", md: "left" }}
        padding={6}
      >
        <Box flex={1} mb={{ xs: 4, md: 0 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Your AI Chat Assistant
          </Typography>
          <Typography variant="h6" color="gray" gutterBottom>
            Chat with AI, get instant answers, and boost productivity.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/chats"
            sx={{ mt: 2 }}
          >
            Start Chatting
          </Button>
        </Box>
        <Box flex={1} display="flex" justifyContent="center">
          <img src="chatbot.png" alt="Chatbot" style={{ width: "100%", maxWidth: "400px" , height:'350px',borderRadius:"10px" }} />
        </Box>
      </Box>


      {/* Features Section */}
      <Box padding={6}>
        <Typography variant="h4" textAlign="center" fontWeight={600} gutterBottom>
          Why Use Our Chatbot?
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Fast", desc: "Get instant AI-powered responses." },
            { title: "Reliable", desc: "Accurate and useful answers anytime." },
            { title: "Secure", desc: "Your conversations are private." },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  background: "#121212",
                  borderRadius: "12px",
                  textAlign: "center",
                  padding: 2,
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="gray">{feature.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
    
    </Box>
  );
};

export default Home;
