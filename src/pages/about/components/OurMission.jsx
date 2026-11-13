
import { Box, Container, Typography, Stack } from "@mui/material";
import {
  AutoAwesome,
  Flag,
  Visibility,
  Favorite,
} from "@mui/icons-material";

const values = [
  {
    icon: <Flag />,
    title: "Our Mission",
    description:
      "To make technology accessible, empower developers, and transform innovative ideas into meaningful digital solutions.",
  },
  {
    icon: <Visibility />,
    title: "Our Vision",
    description:
      "To build an innovative technology ecosystem where creativity, engineering, and intelligence shape the future.",
  },
  {
    icon: <Favorite />,
    title: "Our Values",
    description:
      "We believe in innovation, continuous learning, collaboration, and building technology that creates real impact.",
  },
];

const OurMission = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#10101C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bgcolor: "rgba(139,92,246,0.12)",
          filter: "blur(110px)",
          top: "10%",
          right: "-120px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        {/* Heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mb: { xs: 6, md: 9 },
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <AutoAwesome sx={{ color: "#A78BFA", fontSize: 18 }} />

            <Typography
              sx={{
                color: "#A78BFA",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              WHAT DRIVES US
            </Typography>
          </Stack>

          <Typography
            component="h2"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "2.3rem", md: "3.5rem" },
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Purpose Beyond{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #A78BFA, #EC4899)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technology
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#A1A1AA",
              lineHeight: 1.9,
              fontSize: { xs: "0.95rem", md: "1.05rem" },
            }}
          >
            Every innovation begins with a purpose.
            Our mission, vision, and values guide everything we build.
          </Typography>
        </Box>

        {/* Values Grid */}
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
          {values.map((value, index) => (
            <Box
              key={value.title}
              sx={{
                p: { xs: 3.5, md: 4 },
                borderRadius: 4,
                bgcolor: "#181825",
                border: "1px solid #2D2D3D",
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-7px)",
                  borderColor: "#8B5CF6",
                  boxShadow: "0 15px 40px rgba(139,92,246,0.1)",

                  "& .value-icon": {
                    bgcolor: "rgba(139,92,246,0.25)",
                    transform: "scale(1.08)",
                  },
                },
              }}
            >
              {/* Number */}
              <Typography
                sx={{
                  color: "#525268",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  letterSpacing: 2,
                  mb: 3,
                }}
              >
                0{index + 1} / 03
              </Typography>

              {/* Icon */}
              <Box
                className="value-icon"
                sx={{
                  width: 58,
                  height: 58,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  color: "#A78BFA",
                  bgcolor: "rgba(139,92,246,0.12)",
                  mb: 3,
                  transition: "all 0.3s ease",
                  "& svg": { fontSize: 28 },
                }}
              >
                {value.icon}
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {value.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "#9292A2",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                }}
              >
                {value.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom Statement */}
        <Box
          sx={{
            mt: { xs: 7, md: 10 },
            py: { xs: 4, md: 5 },
            px: 3,
            textAlign: "center",
            borderTop: "1px solid #2D2D3D",
            borderBottom: "1px solid #2D2D3D",
          }}
        >
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "1.2rem", md: "1.8rem" },
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            "Great technology starts with{" "}
            <Box
              component="span"
              sx={{
                color: "#A78BFA",
              }}
            >
              great ideas
            </Box>
            ."
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OurMission;
