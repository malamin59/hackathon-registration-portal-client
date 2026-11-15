import { Box, Container, Paper, Typography } from "@mui/material";

import SignupHeader from "./components/SignupHeader";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  return (
    <Box
      sx={{
        minHeight: {
          xs: "calc(100dvh - 132px)",
          sm: "100vh",
        },
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        bgcolor: "#080808",
        px: 2,
        py: 5,
        isolation: "isolate",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background: `
            radial-gradient(
              ellipse at 50% 105%,
              rgba(25, 70, 135, 0.38),
              transparent 55%
            )
          `,
        }}
      />

      {/* Signup Card */}
      <Container
        maxWidth="xs"
        disableGutters
        sx={{
          width: "100%",
          maxWidth: "440px !important",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            overflow: "hidden",
            p: { xs: 3, sm: 4 },
            borderRadius: "18px",
            bgcolor: "#111111",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "110px",
              background:
                "linear-gradient(180deg, rgba(110,120,140,0.28), transparent)",
              pointerEvents: "none",
            },
          }}
        >
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <SignupHeader />
            <SignupForm />
          </Box>
        </Paper>
      </Container>

      {/* Copyright */}
      <Typography
        textAlign="center"
        sx={{
          position: "absolute",
          bottom: 20,
          left: 0,
          width: "100%",
          fontSize: "0.7rem",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        © 2026 Code-A-Nova. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Signup;
