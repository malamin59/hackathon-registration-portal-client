import { Box, Container, Grid, Typography } from "@mui/material";

const highlights = [
  {
    title: "Build Something Amazing",
    description:
      "Turn your creative ideas into real-world projects.",
  },
  {
    title: "Collaborate & Learn",
    description:
      "Work with other passionate developers and learn together.",
  },
  {
    title: "Showcase Your Skills",
    description:
      "Present your skills, creativity, and innovative solutions.",
  },
];

const EventHighlights = () => {
  return (
    <Box sx={{ bgcolor: "#0B0B14", color: "#FFFFFF", py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Why Join Code-A-Nova?
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "#A1A1AA", mt: 2, mb: 6 }}
        >
          Explore the opportunities waiting for you.
        </Typography>

        <Grid container spacing={3}>
          {highlights.map((item) => (
            <Grid size={{ xs: 12, md: 4 }} key={item.title}>
              <Box
                sx={{
                  p: 4,
                  height: "100%",
                  bgcolor: "#181825",
                  border: "1px solid #2D2D3D",
                  borderRadius: 3,
                }}
              >
                <Typography variant="h5" fontWeight={600} mb={2}>
                  {item.title}
                </Typography>

                <Typography sx={{ color: "#A1A1AA", lineHeight: 1.8 }}>
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventHighlights;