
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { ArrowForward, AutoAwesome } from "@mui/icons-material";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        px: 2,
        bgcolor: "#0B0B14",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: { xs: 4, md: 6 },
            border: "1px solid rgba(167,139,250,0.25)",
            background:
              "linear-gradient(135deg, #211936 0%, #171426 50%, #24152E 100%)",
            px: { xs: 3, md: 8 },
            py: { xs: 8, md: 11 },
            textAlign: "center",
          }}
        >
          {/* Background Glow */}
          <Box
            sx={{
              position: "absolute",
              width: 350,
              height: 350,
              borderRadius: "50%",
              bgcolor: "rgba(139,92,246,0.22)",
              filter: "blur(100px)",
              top: "-180px",
              left: "10%",
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              bgcolor: "rgba(236,72,153,0.16)",
              filter: "blur(100px)",
              bottom: "-180px",
              right: "5%",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              mb={3}
            >
              <AutoAwesome sx={{ color: "#C4B5FD", fontSize: 18 }} />

              <Typography
                sx={{
                  color: "#C4B5FD",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: 3,
                }}
              >
                LET'S BUILD TOGETHER
              </Typography>
            </Stack>

            <Typography
              component="h2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "2.2rem", sm: "3rem", md: "4rem" },
                fontWeight: 900,
                letterSpacing: "-1.5px",
                lineHeight: 1.2,
                maxWidth: 800,
                mx: "auto",
                mb: 3,
              }}
            >
              Have an Idea?
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
                Let's Make It Real.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#C4C4D0",
                maxWidth: 620,
                mx: "auto",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.9,
                mb: 5,
              }}
            >
              Whether you're looking to build a digital product,
              explore a collaboration, or grow your technical
              journey, we'd love to hear from you.
            </Typography>

            {/* CTA Button */}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                px: 4,
                py: 1.8,
                borderRadius: 2,
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "none",
                color: "#FFFFFF",
                background:
                  "linear-gradient(90deg, #8B5CF6, #EC4899)",
                boxShadow: "0 10px 35px rgba(139,92,246,0.3)",
                transition: "all 0.3s ease",

                "&:hover": {
                  background:
                    "linear-gradient(90deg, #7C3AED, #DB2777)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 15px 40px rgba(139,92,246,0.4)",
                },
              }}
            >
              Get in Touch
            </Button>

            <Typography
              sx={{
                color: "#9292A2",
                fontSize: "0.8rem",
                mt: 4,
                letterSpacing: 1,
              }}
            >
              BUILD. INNOVATE. SCALE.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutCTA;
