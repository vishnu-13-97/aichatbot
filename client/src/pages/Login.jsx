import { Box, Button, Typography } from "@mui/material";
import Custominput from "../components/shared/Custominput";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";
import { useAuth } from "../context.jsx/Usercontext";

const Login = () => {
  const { logIn } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await logIn(formData.email, formData.password);
      console.log("Login successful:", formData);
    } catch (err) {
      console.error("Login error:", err.message);
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            border: "none",
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

            {error && (
              <Typography color="error" textAlign="center" marginTop={2}>
                {error}
              </Typography>
            )}

            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{ marginTop: 2 }}
            >
              {loading ? "Logging in..." : "Login"} <CiLogin />
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
