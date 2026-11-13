
import { Box, Container, Typography, Stack } from "@mui/material";
import {
  Code,
  Psychology,
  School,
  Groups,
  ArrowOutward,
} from "@mui/icons-material";

const services = [
  {
    number: "01",
    icon: <Code />,
    title: "Web & Software Engineering",
    description:
      "Building modern full-stack platforms, premium business websites, scalable applications, and custom software solutions.",
    color: "#A78BFA",
  },
  {
    number: "02",
    icon: <Psychology />,
    title: "AI-Powered Solutions",
    description:
      "Developing intelligent automation workflows, AI integrations, mock interview platforms, and productivity tools.",
    color: "#EC4899",
  },
  {
    number: "03",
    icon: <School />,
    title: "Student & Internship Programs",
    description:
      "Creating practical learning experiences, structured skill development, and opportunities through real-world projects.",
    color: "#38BDF8",
  },
  {
    number: "04",
    icon: <Groups />,
    title: "Engineering Mentorship",
    description:
      "Providing personalized guidance, mock interviews, technical discussions, and professional career development support.",
    color: "#34D399",
  },
];

const CoreFocus = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#10101C",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">

        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 700,
            mx: "auto",
            mb: { xs: 6, md: 9 },
          }}
        >
          <Typography
            sx={{
              color: "#A78BFA",
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: "0.8rem",
              mb: 2,
            }}
          >
            WHAT WE DO
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Our Core{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #A78BFA, #EC4899)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Focus
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#A1A1AA",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.9,
            }}
          >
            We bring technology, creativity, and expertise together
            to build digital solutions and empower people.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          {services.map((service) => (
            <Box
              key={service.number}
              sx={{
                position: "relative",
                p: { xs: 3, md: 4 },
                minHeight: 280,
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#181825",
                border: "1px solid #2D2D3D",
                transition: "all 0.35s ease",

                "&:hover": {
                  transform: "translateY(-8px)",
                  borderColor: service.color,
                  boxShadow: `0 15px 45px ${service.color}15`,
                  "& .service-icon": {
                    transform: "scale(1.1) rotate(-5deg)",
                    bgcolor: `${service.color}25`,
                  },
                  "& .service-arrow": {
                    opacity: 1,
                    transform: "translate(0, 0)",
                  },
                },
              }}
            >
              {/* Number */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 25,
                  color: "#3F3F50",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                }}
              >
                {service.number}
              </Typography>

              {/* Icon */}
              <Box
                className="service-icon"
                sx={{
                  width: 58,
                  height: 58,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 3,
                  bgcolor: `${service.color}15`,
                  color: service.color,
                  mb: 4,
                  transition: "all 0.35s ease",
                  "& svg": {
                    fontSize: 29,
                  },
                }}
              >
                {service.icon}
              </Box>

              {/* Content */}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: { xs: "1.2rem", md: "1.35rem" },
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {service.title}
              </Typography>

              <Typography
                sx={{
                  color: "#9292A2",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  maxWidth: 420,
                }}
              >
                {service.description}
              </Typography>

              {/* Bottom Accent */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 3 }}
              >
                <Box
                  sx={{
                    width: 45,
                    height: 3,
                    borderRadius: 5,
                    bgcolor: service.color,
                  }}
                />

                <ArrowOutward
                  className="service-arrow"
                  sx={{
                    color: service.color,
                    opacity: 0,
                    transform: "translate(-5px, 5px)",
                    transition: "all 0.3s ease",
                  }}
                />
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CoreFocus;
