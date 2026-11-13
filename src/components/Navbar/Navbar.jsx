import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NavbarLogo from "./NavbarLogo";
import navLinks from "./NavbarLinks";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              gap: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.path}
                component={Link}
                to={link.path}
                variant={link.isButton ? "contained" : "text"}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
            <IconButton
              color="inherit"
              onClick={handleOpenMenu}
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {navLinks.map((link) => (
                <MenuItem
                  key={link.path}
                  component={Link}
                  to={link.path}
                  onClick={handleCloseMenu}
                >
                  {link.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
