import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Box, IconButton, Menu, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import navLinks from "./NavbarLinks";
import useAuth from "../../context/useAuth";

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const { isAuthenticated, logout } = useAuth();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleCloseMenu();
    navigate("/", { replace: true });
  };

  const mainLinks = navLinks.filter(
    (link) => !link.isButton && link.path !== "/login",
  );

  const loginLink = navLinks.find((link) => link.path === "/login");

  const signupLink = navLinks.find((link) => link.isButton);

  const menuItemStyle = (path) => ({
    fontWeight: 600,
    "&.Mui-selected": {
      bgcolor: "rgba(139,92,246,0.18)",
      color: "#C4B5FD",
    },
    "&:hover": {
      bgcolor: "rgba(139,92,246,0.12)",
    },
  });

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto" }}>
      <IconButton
        onClick={handleOpenMenu}
        aria-label="Open navigation menu"
        sx={{ color: "#FFFFFF" }}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 180,
              bgcolor: "#151522",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          },
        }}
      >
        {mainLinks.map((link) => (
          <MenuItem
            key={link.path}
            component={Link}
            to={link.path}
            onClick={handleCloseMenu}
            selected={location.pathname === link.path}
            sx={menuItemStyle(link.path)}
          >
            {link.name}
          </MenuItem>
        ))}

        {isAuthenticated ? (
          <>
            <MenuItem
              component={Link}
              to="/dashboard"
              onClick={handleCloseMenu}
              selected={location.pathname === "/dashboard"}
              sx={menuItemStyle("/dashboard")}
            >
              Dashboard
            </MenuItem>

            <MenuItem onClick={handleLogout} sx={menuItemStyle("/logout")}>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            {loginLink && (
              <MenuItem
                component={Link}
                to={loginLink.path}
                onClick={handleCloseMenu}
                selected={location.pathname === loginLink.path}
                sx={menuItemStyle(loginLink.path)}
              >
                {loginLink.name}
              </MenuItem>
            )}

            {signupLink && (
              <MenuItem
                component={Link}
                to={signupLink.path}
                onClick={handleCloseMenu}
                selected={location.pathname === signupLink.path}
                sx={menuItemStyle(signupLink.path)}
              >
                {signupLink.name}
              </MenuItem>
            )}
          </>
        )}
      </Menu>
    </Box>
  );
};

export default MobileNav;
