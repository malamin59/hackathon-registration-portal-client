
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ArrowForward,
  AutoAwesome,
  Code,
  Psychology,
  RocketLaunch,
} from "@mui/icons-material";

const features = [
  { icon: <Code />, title: "Software Engineering", color: "#A78BFA" },
  { icon: <Psychology />, title: "AI Innovation", color: "#EC4899" },
  { icon: <RocketLaunch />, title: "Future Technology", color: "#38BDF8" },
];

const AboutHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#0B0B14",
        background:
          "radial-gradient(ellipse at 15% 20%, rgba(124,58,237,0.16), transparent 45%), radial-gradient(ellipse at 85% 80%, rgba(236,72,153,0.10), transparent 40%), #0B0B14",
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            alignItems: "center",
            gap: { xs: 7, md: 6 },
          }}
        >
          {/* Left Content */}
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                width: "fit-content",
                px: 2,
                py: 1,
                mb: 3,
                borderRadius: 10,
                border: "1px solid rgba(167,139,250,0.3)",
                bgcolor: "rgba(139,92,246,0.10)",
              }}
            >
              <AutoAwesome sx={{ color: "#A78BFA", fontSize: 17 }} />

              <Typography
                sx={{
                  color: "#C4B5FD",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                ABOUT CODE-A-NOVA
              </Typography>
            </Stack>

            <Typography
              component="h1"
              sx={{
                color: "#FFFFFF",
                fontSize: {
                  xs: "2.7rem",
                  sm: "3.5rem",
                  md: "4rem",
                  lg: "4.5rem",
                },
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: "-2px",
                mb: 3,
              }}
            >
              Engineering Ideas.
              <Box
                component="span"
                sx={{
                  display: "block",
                  background: "linear-gradient(90deg, #A78BFA, #EC4899)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Empowering Futures.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#A1A1AA",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.9,
                maxWidth: 540,
                mb: 4,
              }}
            >
              We combine software engineering, artificial intelligence,
              and innovation to build meaningful digital solutions
              and empower the next generation of technology leaders.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", sm: "center" }}
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  px: 3.5,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 700,
                  textTransform: "none",
                  background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
                  boxShadow: "0 8px 25px rgba(139,92,246,0.25)",
                  "&:hover": {
                    background: "linear-gradient(90deg, #7C3AED, #DB2777)",
                    transform: "translateY(-3px)",
                  },
                  transition: "0.3s ease",
                }}
              >
                Let's Connect
              </Button>

              <Button
                component="a"
                href="#who-we-are"
                variant="outlined"
                sx={{
                  px: 3.5,
                  py: 1.5,
                  borderRadius: 2,
                  borderColor: "#454557",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#A78BFA",
                    bgcolor: "rgba(139,92,246,0.08)",
                  },
                }}
              >
                Explore More
              </Button>
            </Stack>

            <Typography
              sx={{
                mt: 4,
                color: "#71717A",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: 2,
              }}
            >
              BUILD. INNOVATE. SCALE.
            </Typography>
          </Box>

          {/* Right Visual Panel */}
          <Box
            sx={{
              position: "relative",
              maxWidth: 460,
              width: "100%",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: "10%",
                borderRadius: "50%",
                bgcolor: "#8B5CF6",
                opacity: 0.18,
                filter: "blur(90px)",
              }}
            />

            <Box
              sx={{
                position: "relative",
                p: { xs: 2.5, md: 3.5 },
                borderRadius: 4,
                border: "1px solid rgba(167,139,250,0.22)",
                bgcolor: "rgba(25,24,42,0.85)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.35)",
                transform: { md: "rotate(2deg)" },
                transition: "0.4s ease",
                "&:hover": {
                  transform: { md: "rotate(0deg) translateY(-5px)" },
                },
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={4}
              >
                <Typography
                  sx={{ color: "#FFFFFF", fontWeight: 800, fontSize: "1rem" }}
                >
                  Our Technology
                </Typography>

                <AutoAwesome sx={{ color: "#A78BFA" }} />
              </Stack>

              <Box
                sx={{
                  p: 3,
                  mb: 2,
                  borderRadius: 3,
                  bgcolor: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(167,139,250,0.2)",
                }}
              >
                <Typography
                  sx={{ color: "#A78BFA", fontSize: "0.75rem", mb: 1 }}
                >
                  OUR PHILOSOPHY
                </Typography>

                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                    fontWeight: 800,
                    lineHeight: 1.3,
                  }}
                >
                  Turning Ideas Into Impact.
                </Typography>
              </Box>

              <Stack spacing={2}>
                {features.map((feature) => (
                  <Stack
                    key={feature.title}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      bgcolor: "rgba(255,255,255,0.035)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 2,
                        color: feature.color,
                        bgcolor: `${feature.color}18`,
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography
                      sx={{ color: "#E4E4E7", fontWeight: 600 }}
                    >
                      {feature.title}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Typography
                sx={{
                  mt: 3,
                  color: "#71717A",
                  fontSize: "0.7rem",
                  letterSpacing: 2,
                  textAlign: "center",
                }}
              >
                BUILD • INNOVATE • SCALE
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHero;
