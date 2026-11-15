import { Box, Typography } from "@mui/material";

const SignupHeader = () => {
  return (
    <Box textAlign="center" mb={3}>
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: { xs: "1.8rem", sm: "2rem" },
          fontWeight: 500,
          letterSpacing: "-0.5px",
          mb: 1,
          textAlign: "center",
        }}
      >
        Create Account
      </Typography>

      <Typography
        sx={{
          color: "#A1A1AA",
          fontSize: "0.75rem",
          lineHeight: 1.7,
          maxWidth: 300,
          mx: "auto",
          mb:2,
           textAlign: "center",
        }}
      >
        Join Code-A-Nova and showcase your skills through innovation and collaboration.
      </Typography>
    </Box>
  );
};

export default SignupHeader;