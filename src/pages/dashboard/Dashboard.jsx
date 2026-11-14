
import { useState } from "react";

import {
  Box,
  Container,
  Drawer,
  IconButton,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import DashboardSidebar from "./components/DashboardSidebar";
import DashboardHeader from "./components/DashboardHeader";
import WelcomeSection from "./components/WelcomeSection";
import DashboardStats from "./components/DashboardStats";
import ProfileCard from "./components/ProfileCard";
import RegistrationCard from "./components/RegistrationCard";

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#080B12",
        color: "#F8FAFC",
        display: "flex",
      }}
    >
      {/* Desktop Sidebar */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flexShrink: 0,
        }}
      >
        <DashboardSidebar />
      </Box>

      {/* Mobile Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: "#0D111B",
            borderRight: "1px solid rgba(255,255,255,0.07)",
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleMenuClose}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              zIndex: 2,
              color: "#94A3B8",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          <DashboardSidebar />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: { xs: 2, md: 4 },
            px: { xs: 2, md: 4 },
          }}
        >
          <DashboardHeader onMenuClick={handleMenuOpen} />

          <Box sx={{ mt: 4 }}>
            <WelcomeSection />
          </Box>

          <Box sx={{ mt: 4 }}>
            <DashboardStats />
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "0.9fr 1.1fr",
              },
              gap: 3,
            }}
          >
            <ProfileCard />
            <RegistrationCard />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
