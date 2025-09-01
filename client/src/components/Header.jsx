import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";
import { useAuth } from "../context.jsx/Usercontext";
import NavigationLink from "./shared/NavigationLink";
import {  useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, logOut } = useAuth();
  const location = useLocation();

const navigate = useNavigate();
  const handleLogout = () => {
  logOut();
  navigate("/");
};

  return (
    <AppBar sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <div>
          {isLoggedIn ? (
            <>
              <NavigationLink
                bg="#00fffc"
                to="/chats"
                text="Go to Chat"
                textcolor="black"
              />
              <NavigationLink
                bg="#51538f"
                text="LogOut"
                textcolor="white"
                onClick={handleLogout}
              />
            </>
          ) : (
            <>
              {location.pathname === "/" && (
                <>
                  <NavigationLink
                    bg="#00fffc"
                    to="/login"
                    text="Login"
                    textcolor="black"
                  />
                  <NavigationLink
                    bg="#51538f"
                    to="/signup"
                    text="SignUp"
                    textcolor="white"
                  />
                </>
              )}

              {location.pathname === "/login" && (
                <>
                  <NavigationLink
                    bg="#51538f"
                    to="/"
                    text="Home"
                    textcolor="black"
                  />
                  <NavigationLink
                    bg="#00fffc"
                    to="/signup"
                    text="SignUp"
                    textcolor="white"
                  />
                </>
              )}

              {location.pathname === "/signup" && (
                <>
                  <NavigationLink
                    bg="#51538f"
                    to="/"
                    text="Home"
                    textcolor="black"
                  />
                  <NavigationLink
                    bg="#00fffc"
                    to="/login"
                    text="Login"
                    textcolor="white"
                  />
                </>
              )}
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
