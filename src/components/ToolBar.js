import React, { useState } from "react";

import { Link } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import FadeLogo from "../assets/fade-logo.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const routes = [
  {
    id: 0,
    routeName: "ABOUT",
    route: "/about",
  },
  {
    id: 1,
    routeName: "HOW IT WORKS",
    route: "/howitworks",
  },
  {
    id: 2,
    routeName: "PRICING",
    route: "/pricing",
  },
  {
    id: 3,
    routeName: "DOWNLOAD",
    route: "/download",
  },
  {
    id: 4,
    routeName: "SUBSCRIBE",
    route: "/subscribe",
  },
  {
    id: 5,
    routeName: "SIGN UP",
    route: "/signup",
  },
];

const ITEM_HEIGHT = 48;

export default function ToolBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        color="transparent"
        sx={{ boxShadow: "none", zIndex: 20 }}
      >
        <Toolbar sx={{ boxShadow: "none", zIndex: 20 }}>
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.06) 94%)",
                  color: "white",
                  backdropFilter: "blur(12px)",
                  height: "80vh",
                  width: "20ch",
                  marginTop:"3vh"
                },
              }}
            >
              {routes.map((route) => (
                <MenuItem key={route.id} onClick={handleClose}>
                  <a href={route.route} style={{ textDecoration: "none", color:"white" }}>
                    {route.routeName}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <img
                src={FadeLogo}
                alt="fade"
                style={{ width: 100, clipPath: "inset(0% 0% 15% 0%)" }}
              />
            </Link>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ boxShadow: "inset 0px 1.5px 4px rgba(26,9,13,0.3)" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
