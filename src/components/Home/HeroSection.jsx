import { Box, Container, Typography, Stack } from "@mui/material";

import CustomButton from "../common/CustomButton";

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0B0B14",
        color: "#FFFFFF",
        py: { xs: 10, md: 16 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="overline"
          sx={{ color: "#A78BFA", letterSpacing: 3 }}
        >
          CODE-A-NOVA PRESENTS
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", md: "4.5rem" },
            fontWeight: 800,
            mt: 2,
            mb: 3,
            background: "linear-gradient(90deg, #A78BFA, #EC4899)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Build. Innovate. Compete.
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "#A1A1AA", mb: 4, fontWeight: 400 }}
        >
          Turn your innovative ideas into reality. Join the ultimate hackathon
          experience.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <CustomButton to="/signup" size="large">
            Register Now
          </CustomButton>

          <CustomButton
            to="/login"
            variant="outlined"
            size="large"
            sx={{ color: "#FFFFFF", borderColor: "#A78BFA" }}
          >
            Login
          </CustomButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
