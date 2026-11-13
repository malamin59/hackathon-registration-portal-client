import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navLinks from "./NavbarLinks";

const MobileNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
        {navLinks.map((link) => (
          <MenuItem
            key={link.path}
            component={Link}
            to={link.path}
            onClick={handleCloseMenu}
            selected={location.pathname === link.path}
            sx={{
              fontWeight: 600,
              "&.Mui-selected": {
                bgcolor: "rgba(139,92,246,0.18)",
                color: "#C4B5FD",
              },
              "&:hover": {
                bgcolor: "rgba(139,92,246,0.12)",
              },
            }}
          >
            {link.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNav;