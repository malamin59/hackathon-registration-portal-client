
import { Box, Container, Typography } from "@mui/material";

import OTPHeader from "./components/otp/OTPHeader";
import OTPForm from "./components/otp/OTPForm";

const VerifyOTP = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        bgcolor: "#080808",
        background:
          "radial-gradient(ellipse at bottom, rgba(25,70,135,0.25), transparent 65%)",
        px: 2,
        py: 8,
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            position: "relative",
            p: { xs: 3, sm: 4 },
            borderRadius: "18px",
            bgcolor: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          <OTPHeader />

          <OTPForm />
        </Box>
      </Container>

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

export default VerifyOTP;
