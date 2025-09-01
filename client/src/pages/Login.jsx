import { Box, Button, Typography, CircularProgress } from "@mui/material";
import Custominput from "../components/shared/Custominput";
import { CiLogin } from "react-icons/ci";
import {  useEffect, useState } from "react";
import { useAuth } from "../context.jsx/Usercontext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { logIn , user} = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      await logIn(formData.email, formData.password);
      toast.success("Signed in successfully");
      setFormData({ email: "", password: "" });
    } catch (err) {
      console.error("Login error:", err.message);
      toast.error(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/chats");
    }
  }, [user, navigate]);

  return (
    <Box width="100%" height="100%" display="flex" flex={1}>
      <Box
        padding={8}
        marginTop={6}
        display={{ md: "flex", sm: "none", xs: "none" }}
      >
        <img
          src="loginimg.png"
          alt="Robot-img"
          style={{ width: "400px", height: "450px" }}
        />
      </Box>

      <Box
        display="flex"
        flex={{ xs: 1, md: 0.5 }}
        justifyContent="center"
        alignItems="center"
        padding={2}
        marginLeft="auto"
        marginTop={16}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "25px",
            boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
            borderRadius: "10px",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
            >
              Login
            </Typography>

            <Custominput
              type="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Custominput
              type="password"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
            />

            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ marginTop: 2, gap: 1 }}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} color="inherit" /> Logging in...
                </>
              ) : (
                <>
                  Login <CiLogin />
                </>
              )}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
