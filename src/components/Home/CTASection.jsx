import { Box, Container, Typography, Stack } from "@mui/material";
import CustomButton from "../common/CustomButton";

const CTASection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#181825",
        color: "#FFFFFF",
        py: 10,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={800}>
          Ready to Build Something Amazing?
        </Typography>

        <Typography
          sx={{ color: "#A1A1AA", mt: 3, mb: 4, lineHeight: 1.8 }}
        >
          Join Code-A-Nova and turn your innovative ideas into reality.
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

export default CTASection;