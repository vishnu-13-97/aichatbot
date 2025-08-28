import { Box, Button, Typography } from "@mui/material";
import Custominput from "../components/shared/Custominput";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";
import { useAuth } from "../context.jsx/Usercontext";

const Signup = () => {
  const { signUp } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.name) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      await signUp(formData.name, formData.email, formData.password);
      console.log("Signup successful:", formData);
      setFormData({ name: "", email: "", password: "" }); // reset
    } catch (err) {
      console.error("Signup error:", err.message);
      setError(err.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box width="100%" height="100%" display="flex" flex={1}>
      <Box
        padding={8}
        marginTop={8}
        display={{ md: "flex", sm: "none", xs: "none" }}
      >
        <img src="signup.png" alt="SignUp-img" style={{ width: "400px" }} />
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
              Sign Up
            </Typography>

            <Custominput
              type="text"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
            />
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
              fullWidth
              sx={{ marginTop: 2 }}
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"} <CiLogin />
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
