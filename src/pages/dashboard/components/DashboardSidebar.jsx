import { Link, NavLink } from "react-router-dom";

import { Box, Button, Divider, Stack, Typography } from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const navigationItems = [
  {
    label: "Overview",
    path: "/dashboard",
    icon: <DashboardRoundedIcon />,
  },
  {
    label: "Registration Now",
    path: "/register",
    icon: <AppRegistrationRoundedIcon />,
  },
];

const DashboardSidebar = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 260 },
        minHeight: { md: "100vh" },
        bgcolor: "#0D111B",
        borderRight: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}
    >
      {/* Brand */}
      <Stack direction="row" alignItems="center" spacing={1.5} mb={5}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2.5,
            display: "grid",
            placeItems: "center",
            bgcolor: "rgba(59,130,246,0.15)",
            color: "#60A5FA",
          }}
        >
          <CodeRoundedIcon />
        </Box>

        <Box>
          <Link to={'/'}>
            <Typography fontWeight={800} color="#F8FAFC" fontSize={17}>
              Code-A-Nova{" "}
            </Typography>
          </Link>
        </Box>
      </Stack>

      {/* Navigation */}
      <Typography
        fontSize={11}
        fontWeight={700}
        color="#64748B"
        letterSpacing={1.2}
        mb={2}
      >
        WORKSPACE
      </Typography>

      <Stack spacing={1}>
        {navigationItems.map((item) => (
          <Button
            key={item.path}
            component={NavLink}
            to={item.path}
            startIcon={item.icon}
            fullWidth
            sx={{
              justifyContent: "flex-start",
              px: 2,
              py: 1.4,
              borderRadius: 2,
              textTransform: "none",
              fontSize: 14,
              fontWeight: 600,
              color: "#94A3B8",
              "& .MuiButton-startIcon": {
                color: "inherit",
              },
              "&.active": {
                color: "#60A5FA",
                bgcolor: "rgba(59,130,246,0.13)",
                "&:hover": {
                  bgcolor: "rgba(59,130,246,0.18)",
                },
              },
              "&:hover": {
                color: "#F8FAFC",
                bgcolor: "rgba(255,255,255,0.05)",
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>

      <Box sx={{ flexGrow: 1, minHeight: 50 }} />

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2 }} />

      {/* Logout */}
      <Button
        startIcon={<LogoutRoundedIcon />}
        onClick={() => console.log("Logout clicked")}
        sx={{
          justifyContent: "flex-start",
          px: 2,
          py: 1.4,
          borderRadius: 2,
          color: "#94A3B8",
          textTransform: "none",
          fontWeight: 600,
          "&:hover": {
            color: "#F87171",
            bgcolor: "rgba(248,113,113,0.08)",
          },
        }}
      >
        Logout
      </Button>

      <Typography color="#475569" fontSize={11} textAlign="center" mt={3}>
        © 2026 Code-A-Nova
      </Typography>
    </Box>
  );
};

export default DashboardSidebar;
