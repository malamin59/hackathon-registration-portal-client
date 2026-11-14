import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const RegistrationCard = () => {
  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3 },
        height: "100%",
        borderRadius: "20px",
        bgcolor: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          sx={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700 }}
        >
          Hackathon Registration
        </Typography>

        <Chip
          label="Not Registered"
          size="small"
          sx={{
            color: "#FBBF24",
            bgcolor: "rgba(251,191,36,0.1)",
            border: "1px solid rgba(251,191,36,0.2)",
            fontSize: "0.68rem",
            fontWeight: 600,
          }}
        />
      </Stack>

      <Box
        sx={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "14px",
          color: "#60A5FA",
          bgcolor: "rgba(96,165,250,0.12)",
          mb: 2,
        }}
      >
        <EmojiEventsRoundedIcon sx={{ fontSize: 26 }} />
      </Box>

      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "1.2rem",
          fontWeight: 700,
          mb: 1,
        }}
      >
        Code-A-Nova Hackathon 2026
      </Typography>

      <Typography
        sx={{
          color: "#A1A1AA",
          fontSize: "0.82rem",
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        Turn your innovative ideas into reality. Register now and
        participate in an exciting hackathon experience.
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} mb={3}>
        <CalendarMonthRoundedIcon
          sx={{ color: "#71717A", fontSize: 19 }}
        />

        <Typography sx={{ color: "#A1A1AA", fontSize: "0.78rem" }}>
          Registration deadline: Check event details
        </Typography>
      </Stack>

      <Box sx={{ flexGrow: 1 }} />

      <Button
        fullWidth
        variant="contained"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{
          py: 1.3,
          borderRadius: "12px",
          bgcolor: "#2563EB",
          color: "#FFFFFF",
          fontWeight: 700,
          textTransform: "none",
          "&:hover": { bgcolor: "#1D4ED8" },
        }}
      >
        Complete Registration
      </Button>
    </Box>
  );
};

export default RegistrationCard;
