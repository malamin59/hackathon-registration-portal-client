
import { Box, Typography } from "@mui/material";

const LoginHeader = () => {
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
        Log in
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
        Log in to your account and seamlessly continue
        managing your projects, ideas, and progress just
        where you left off.
      </Typography>
    </Box>
  );
};

export default LoginHeader;
