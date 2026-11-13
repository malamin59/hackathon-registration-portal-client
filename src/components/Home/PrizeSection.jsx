import { Box, Container, Typography } from "@mui/material";
import { prizesData } from "../data/prizesData";



const PrizeSection = () => {
  return (
    <Box sx={{ bgcolor: "#0B0B14", color: "#FFFFFF", py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Prizes & Rewards
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "#A1A1AA", mt: 2, mb: 6 }}
        >
          Great ideas deserve great recognition.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {prizesData.map((prize) => (
            <Box
              key={prize.position}
              sx={{
                p: 4,
                textAlign: "center",
                bgcolor: "#181825",
                border: "1px solid #2D2D3D",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ color: "#A78BFA", mb: 2 }}
              >
                {prize.position}
              </Typography>

              <Typography variant="h5" fontWeight={600} mb={2}>
                {prize.title}
              </Typography>

              <Typography sx={{ color: "#A1A1AA", lineHeight: 1.8 }}>
                {prize.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PrizeSection;