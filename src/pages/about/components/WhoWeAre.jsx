
import { Box, Container, Typography, Stack } from "@mui/material";
import { AutoAwesome, Code, Psychology, RocketLaunch } from "@mui/icons-material";

const highlights = [
  {
    icon: <Code />,
    title: "Engineering Excellence",
    description: "Building scalable and reliable digital products.",
  },
  {
    icon: <Psychology />,
    title: "Intelligent Innovation",
    description: "Integrating AI to create smarter experiences.",
  },
  {
    icon: <RocketLaunch />,
    title: "Future Focused",
    description: "Creating opportunities for the next generation.",
  },
];

const WhoWeAre = () => {
  return (
    <Box
      id="who-we-are"
      sx={{
        py: { xs: 9, md: 15 },
        bgcolor: "#0B0B14",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 7, md: 10 },
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <Box>
            <Stack direction="row" alignItems="center" spacing={1} mb={3}>
              <AutoAwesome sx={{ color: "#A78BFA", fontSize: 18 }} />
              <Typography
                sx={{
                  color: "#A78BFA",
                  fontWeight: 700,
                  letterSpacing: 3,
                  fontSize: "0.8rem",
                }}
              >
                WHO WE ARE
              </Typography>
            </Stack>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: "2.3rem", md: "3.5rem" },
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-1.5px",
                color: "#FFFFFF",
                mb: 3,
              }}
            >
              More Than Technology.
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
                We Build Possibilities.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#A1A1AA",
                lineHeight: 2,
                fontSize: "1rem",
                mb: 2,
              }}
            >
              Code-A-Nova is a technology-focused ecosystem
              dedicated to software engineering, artificial
              intelligence, and developer growth.
            </Typography>

            <Typography
              sx={{
                color: "#A1A1AA",
                lineHeight: 2,
                fontSize: "1rem",
                mb: 5,
              }}
            >
              We believe technology is more than writing code.
              It is about solving problems, creating opportunities,
              and transforming innovative ideas into meaningful
              digital experiences.
            </Typography>

            {/* Highlights */}
            <Stack spacing={3}>
              {highlights.map((item) => (
                <Stack
                  key={item.title}
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                >
                  <Box
                    sx={{
                      minWidth: 46,
                      height: 46,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      color: "#A78BFA",
                      bgcolor: "rgba(139,92,246,0.12)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      "& svg": { fontSize: 22 },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 700,
                        mb: 0.5,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#71717A",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Right Visual */}
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 350, md: 480 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Background Glow */}
            <Box
              sx={{
                position: "absolute",
                width: 280,
                height: 280,
                borderRadius: "50%",
                bgcolor: "rgba(139,92,246,0.2)",
                filter: "blur(100px)",
              }}
            />

            {/* Main Card */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 430,
                p: { xs: 3, md: 5 },
                borderRadius: 5,
                border: "1px solid rgba(167,139,250,0.2)",
                background:
                  "linear-gradient(145deg, rgba(35,27,58,0.95), rgba(20,20,35,0.95))",
                backdropFilter: "blur(20px)",
                boxShadow: "0 25px 80px rgba(0,0,0,0.3)",
              }}
            >
              <Typography
                sx={{
                  color: "#A78BFA",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: 3,
                  mb: 4,
                }}
              >
                OUR IDENTITY
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "4rem", md: "5rem" },
                  fontWeight: 900,
                  lineHeight: 1,
                  background: "linear-gradient(90deg, #A78BFA, #EC4899)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                C.N
              </Typography>

              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  mt: 3,
                  mb: 2,
                }}
              >
                Build. Innovate. Scale.
              </Typography>

              <Typography
                sx={{
                  color: "#A1A1AA",
                  lineHeight: 1.9,
                  fontSize: "0.95rem",
                }}
              >
                Bringing together engineering, intelligence,
                and creativity to shape a smarter digital future.
              </Typography>

              <Box
                sx={{
                  height: 1,
                  bgcolor: "rgba(255,255,255,0.1)",
                  my: 4,
                }}
              />

              <Stack direction="row" spacing={1} alignItems="center">
                <AutoAwesome sx={{ color: "#EC4899", fontSize: 18 }} />
                <Typography
                  sx={{
                    color: "#C4B5FD",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: 1,
                  }}
                >
                  ENGINEERING THE FUTURE
                </Typography>
              </Stack>
            </Box>

            {/* Decorative Circle */}
            <Box
              sx={{
                position: "absolute",
                width: 90,
                height: 90,
                borderRadius: "50%",
                border: "1px solid rgba(236,72,153,0.3)",
                top: 5,
                right: { xs: 0, md: 10 },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
