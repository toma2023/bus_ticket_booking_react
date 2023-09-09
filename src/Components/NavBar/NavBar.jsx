import React from "react";
import { Link } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Container } from "@mui/material";
import logo from "../../../public/logo.png";

const pages = ["Home", "About", "FAQs", "Blogs", "Contact", "SignUp"];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="sticky" className="bg-white py-2 shadow-[0_0_5px_rgba(0,0,0,.15)] ">
        <Container className="max-w-screen-xl mx-auto px-7 md:px-0">
          <Toolbar disableGutters>
            <div>
              <Link to="/"><img className="hidden md:block w-[200px]   " src={logo} alt="" /></Link>
            </div>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* <Box className="mx-auto" sx={{  display: { xs: "none", md: "flex" } }} >
              {pages.map((page) => (
                <Link key={page} to={`/${page.toLowerCase()}`}>
                  <Button sx={{ my: 2, color: "black", display: "block" }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box> */}

<Box className="mx-auto" sx={{  display: { xs: "none", md: "flex" } }} >
              {/* Add links here */}
              <Link to="/">
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Home
                </Button>
              </Link>
              <Link to="/about">
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  About
                </Button>
              </Link>
              <Link to="/contact">
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Contact
                </Button>
              </Link>
              <Link to="/faqs">
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  FAQs
                </Button>
              </Link>
              <Link to="/signUp">
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                Sign Up
                </Button>
              </Link>
            </Box>





            <Box sx={{ flexGrow: 0 }}>
              <Tooltip >
                <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0 }} >
                  <div >
                    <button className="bg-[#26A85E] text-black px-5 py-2 rounded-md text-sm uppercase">
                      Buy Tickets
                    </button>
                  </div>
                </IconButton>
              </Tooltip>
             
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavBar;
