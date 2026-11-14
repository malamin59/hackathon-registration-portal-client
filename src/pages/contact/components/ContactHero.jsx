
import { Box, Container, Typography } from "@mui/material";

const ContactHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 9, md: 12 },
        bgcolor: "#0B0B14",
        textAlign: "center",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          top: -180,
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "rgba(139,92,246,0.18)",
          filter: "blur(100px)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative" }}>
        <Typography
          sx={{
            color: "#A78BFA",
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Get In Touch
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#FFFFFF",
            mb: 3,
          }}
        >
          Let's Start a{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Conversation.
          </Box>
        </Typography>

        <Typography
          sx={{
            maxWidth: 620,
            mx: "auto",
            color: "#A1A1AA",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            lineHeight: 1.8,
          }}
        >
          Have questions about Code-A-Nova or our hackathon?
          We'd love to hear from you. Reach out to our team
          and let's build something amazing together.
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactHero;
