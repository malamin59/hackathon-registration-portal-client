
import { Box, Stack, Typography } from "@mui/material";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const stats = [
  {
    label: "Hackathon Events",
    value: "01",
    description: "Available event",
    icon: <EmojiEventsRoundedIcon />,
    color: "#60A5FA",
    bg: "rgba(59,130,246,0.12)",
  },
  {
    label: "Registrations",
    value: "00",
    description: "Your registrations",
    icon: <AppRegistrationRoundedIcon />,
    color: "#A78BFA",
    bg: "rgba(139,92,246,0.12)",
  },
  {
    label: "Team Members",
    value: "01",
    description: "Including you",
    icon: <GroupsRoundedIcon />,
    color: "#34D399",
    bg: "rgba(16,185,129,0.12)",
  },
  {
    label: "Profile Completion",
    value: "75%",
    description: "Keep your profile updated",
    icon: <AccountCircleRoundedIcon />,
    color: "#FBBF24",
    bg: "rgba(245,158,11,0.12)",
  },
];

const DashboardStats = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(4, minmax(0, 1fr))",
        },
        gap: 2.5,
        alignItems: "stretch",
      }}
    >
      {stats.map((stat) => (
        <Box
          key={stat.label}
          sx={{
            width: "100%",
            minWidth: 0,
            height: 180,
            boxSizing: "border-box",
            p: 2.5,
            bgcolor: "#111827",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.25s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              borderColor: "rgba(96,165,250,0.3)",
              boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={1}
          >
            <Typography
              fontSize={13}
              color="#94A3B8"
              fontWeight={600}
              sx={{ minWidth: 0 }}
            >
              {stat.label}
            </Typography>

            <Box
              sx={{
                width: 42,
                height: 42,
                flexShrink: 0,
                borderRadius: 2.5,
                display: "grid",
                placeItems: "center",
                color: stat.color,
                bgcolor: stat.bg,
              }}
            >
              {stat.icon}
            </Box>
          </Stack>

          <Box>
            <Typography
              fontSize={30}
              fontWeight={800}
              color="#F8FAFC"
              letterSpacing="-1px"
            >
              {stat.value}
            </Typography>

            <Typography
              fontSize={12}
              color="#64748B"
              mt={0.5}
              minHeight={18}
            >
              {stat.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DashboardStats;
