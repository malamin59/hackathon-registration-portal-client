
import { Link, useLocation } from "react-router-dom";
import { Box, Button } from "@mui/material";
import navLinks from "./NavbarLinks";

const DesktopNav = () => {
  const location = useLocation();

  const mainLinks = navLinks.filter(
    (link) => !link.isButton && link.path !== "/login"
  );

  const loginLink = navLinks.find(
    (link) => link.path === "/login"
  );

  const signupLink = navLinks.find(
    (link) => link.isButton
  );

  const getLinkStyle = (link) => ({
    px: 2,
    py: 1,
    borderRadius: 3,
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "none",
    color:
      location.pathname === link.path ? "#FFFFFF" : "#A1A1AA",
    bgcolor:
      location.pathname === link.path
        ? "rgba(59,130,246,0.2)"
        : "transparent",
    "&:hover": {
      color: "#FFFFFF",
      bgcolor: "rgba(139,92,246,0.15)",
    },
  });

  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      {/* Center Navigation */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          gap: 1,
          pointerEvents: "auto",
        }}
      >
        {mainLinks.map((link) => (
          <Button
            key={link.path}
            component={Link}
            to={link.path}
            sx={getLinkStyle(link)}
          >
            {link.name}
          </Button>
        ))}
      </Box>

      {/* Right Navigation */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: 1,
          pointerEvents: "auto",
        }}
      >
        {loginLink && (
          <Button
            component={Link}
            to={loginLink.path}
            sx={getLinkStyle(loginLink)}
          >
            {loginLink.name}
          </Button>
        )}

        {signupLink && (
          <Button
            component={Link}
            to={signupLink.path}
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: 3,
              color: "#FFFFFF",
              fontWeight: 700,
              textTransform: "none",
              background: "linear-gradient(90deg, #7C3AED, #EC4899)",
              "&:hover": {
                background: "linear-gradient(90deg, #6D28D9, #DB2777)",
              },
            }}
          >
            {signupLink.name}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DesktopNav;
