import { Box, Container, Typography } from "@mui/material";
import { timelineData } from "../data/TimelineSectionData";



const TimelineSection = () => {
  return (
    <Box sx={{ bgcolor: "#0B0B14", color: "#FFFFFF", py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Event Timeline
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "#A1A1AA", mt: 2, mb: 6 }}
        >
          Your journey from registration to final results.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {timelineData.map((item) => (
            <Box
              key={item.step}
              sx={{
                p: 3,
                bgcolor: "#181825",
                border: "1px solid #2D2D3D",
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{ color: "#A78BFA", mb: 2 }}
              >
                {item.step}
              </Typography>

              <Typography variant="h6" fontWeight={600} mb={1}>
                {item.title}
              </Typography>

              <Typography sx={{ color: "#A1A1AA", lineHeight: 1.8 }}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;