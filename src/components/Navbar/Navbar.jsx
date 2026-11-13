import { AppBar, Toolbar, Container, Box } from "@mui/material";
import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "transparent",
        pt: 1,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            px: { xs: 2, md: 3 },
            borderRadius: "20px",
            bgcolor: "rgba(18, 18, 32, 0.92)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 60, md: 64 },
              gap: 2,
              position: "relative",
            }}
          >
            <NavbarLogo />
            <DesktopNav />
            <MobileNav />
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
