
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

const WelcomeSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        p: { xs: 3, sm: 4, md: 5 },
        mb: 4,
        borderRadius: "24px",
        border: "1px solid rgba(96,165,250,0.18)",
        background:
          "linear-gradient(115deg, #101B32 0%, #111827 48%, #101014 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 280,
          height: 280,
          right: -90,
          top: -130,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.18)",
          filter: "blur(55px)",
          pointerEvents: "none",
        }}
      />

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={4}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box maxWidth={600}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <EmojiEventsRoundedIcon
              sx={{ color: "#60A5FA", fontSize: 20 }}
            />

            <Typography
              sx={{
                color: "#93C5FD",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Code-A-Nova Hackathon
            </Typography>
          </Stack>

          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.7rem" },
              fontWeight: 800,
              letterSpacing: "-1.2px",
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Welcome back, Al Amin!
          </Typography>

          <Typography
            sx={{
              color: "#A1A1AA",
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
              lineHeight: 1.8,
              maxWidth: 500,
              mb: 3,
            }}
          >
            Your next big idea starts here. Complete your hackathon
            registration and get ready to build something extraordinary.
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              px: 3,
              py: 1.3,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
              bgcolor: "#2563EB",
              boxShadow: "0 8px 25px rgba(37,99,235,0.25)",
              "&:hover": {
                bgcolor: "#1D4ED8",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Register Now
          </Button>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            width: 150,
            height: 150,
            flexShrink: 0,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "35px",
            border: "1px solid rgba(147,197,253,0.2)",
            bgcolor: "rgba(96,165,250,0.08)",
            transform: "rotate(-8deg)",
          }}
        >
          <EmojiEventsRoundedIcon
            sx={{ fontSize: 85, color: "#60A5FA" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default WelcomeSection;
