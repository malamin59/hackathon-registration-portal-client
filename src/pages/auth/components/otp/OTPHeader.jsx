
import { Box, Typography } from "@mui/material";

const OTPHeader = () => {
  return (
    <Box textAlign="center" mb={3}>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: { xs: "1.8rem", sm: "2rem" },
          fontWeight: 500,
          letterSpacing: "-0.5px",
          mb: 1,
        }}
      >
        Verify Your Email
      </Typography>

      <Typography
        sx={{
          color: "#A1A1AA",
          fontSize: "0.75rem",
          lineHeight: 1.7,
          maxWidth: 300,
          mx: "auto",
        }}
      >
        We've sent a 6-digit verification code to
        your email address. Enter the code below
        to verify your account.
      </Typography>
    </Box>
  );
};

export default OTPHeader;
