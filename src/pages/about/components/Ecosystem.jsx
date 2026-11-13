
import { Box, Container, Typography, Stack } from "@mui/material";
import {
  Description,
  Psychology,
  Groups,
  EmojiEvents,
  FolderSpecial,
  Assessment,
  ArrowOutward,
  AutoAwesome,
} from "@mui/icons-material";

const platforms = [
  {
    icon: <Description />,
    title: "AI Resume Builder",
    description:
      "Create professional resumes with intelligent AI assistance and career-focused suggestions.",
    tag: "AI TOOL",
  },
  {
    icon: <Psychology />,
    title: "AI Mock Interviews",
    description:
      "Prepare for real interviews through AI-powered practice sessions and feedback.",
    tag: "AI TOOL",
  },
  {
    icon: <Groups />,
    title: "1:1 Mentorship",
    description:
      "Connect with experienced mentors and get personalized career guidance.",
    tag: "MENTORSHIP",
  },
  {
    icon: <EmojiEvents />,
    title: "BUILDX Hackathon",
    description:
      "Explore creativity, collaborate with developers, and turn innovative ideas into projects.",
    tag: "COMMUNITY",
  },
  {
    icon: <FolderSpecial />,
    title: "Project Hub",
    description:
      "Discover practical projects, build experience, and showcase your development skills.",
    tag: "DEVELOPMENT",
  },
  {
    icon: <Assessment />,
    title: "Skill Assessments",
    description:
      "Evaluate technical abilities and identify opportunities for continuous improvement.",
    tag: "LEARNING",
  },
];

const Ecosystem = () => {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        bgcolor: "#0B0B14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">

        {/* Section Heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 720,
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
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: 3,
              }}
            >
              OUR ECOSYSTEM
            </Typography>
          </Stack>

          <Typography
            component="h2"
            sx={{
              color: "#FFFFFF",
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              fontWeight: 800,
              letterSpacing: "-1.5px",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            One Ecosystem.
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
              Endless Possibilities.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#A1A1AA",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.9,
            }}
          >
            Discover the tools, platforms, and opportunities
            designed to help developers learn, build, and grow.
          </Typography>
        </Box>

        {/* Platform Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {platforms.map((platform, index) => (
            <Box
              key={platform.title}
              sx={{
                p: { xs: 3, md: 3.5 },
                minHeight: 260,
                borderRadius: 4,
                bgcolor: "#181825",
                border: "1px solid #2D2D3D",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.35s ease",

                "&:hover": {
                  transform: "translateY(-7px)",
                  borderColor: "#8B5CF6",
                  background:
                    "linear-gradient(145deg, #211936, #181825)",
                  boxShadow:
                    "0 15px 40px rgba(139,92,246,0.12)",

                  "& .platform-icon": {
                    transform: "scale(1.1)",
                    bgcolor: "rgba(139,92,246,0.25)",
                  },

                  "& .platform-arrow": {
                    opacity: 1,
                    transform: "translate(0, 0)",
                  },
                },
              }}
            >
              {/* Icon and Number */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Box
                  className="platform-icon"
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#A78BFA",
                    bgcolor: "rgba(139,92,246,0.12)",
                    transition: "all 0.3s ease",
                    "& svg": { fontSize: 27 },
                  }}
                >
                  {platform.icon}
                </Box>

                <Typography
                  sx={{
                    color: "#525268",
                    fontSize: "1.2rem",
                    fontWeight: 800,
                  }}
                >
                  0{index + 1}
                </Typography>
              </Stack>

              {/* Tag */}
              <Typography
                sx={{
                  color: "#C4B5FD",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  mb: 1.5,
                }}
              >
                {platform.tag}
              </Typography>

              {/* Title */}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  mb: 1.5,
                }}
              >
                {platform.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  color: "#9292A2",
                  fontSize: "0.87rem",
                  lineHeight: 1.9,
                  flexGrow: 1,
                }}
              >
                {platform.description}
              </Typography>

              {/* Bottom Arrow */}
              <Stack
                direction="row"
                justifyContent="flex-end"
                mt={2}
              >
                <ArrowOutward
                  className="platform-arrow"
                  sx={{
                    color: "#A78BFA",
                    opacity: 0.4,
                    transform: "translate(-4px, 4px)",
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

export default Ecosystem;
