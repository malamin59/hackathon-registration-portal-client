
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const FooterBrand = () => {
  return (
    <Box>
      {/* Logo */}
      <Box
        component="a"
        href="https://code-a-nova.online/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1.5,
          textDecoration: "none",
          mb: 3,
        }}
      >
        <Box
          component="img"
          src="https://code-a-nova.online/LOGO_NEW.png"
          alt="Code-A-Nova Logo"
          sx={{
            width: 48,
            height: 48,
            objectFit: "contain",
          }}
        />

        <Typography
          variant="h5"
          fontWeight={800}
          color="#FFFFFF"
          letterSpacing={-0.5}
        >
          Code-A-Nova
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          color: "#A1A1AA",
          lineHeight: 1.8,
          maxWidth: 390,
          mb: 3,
          fontSize: "0.95rem",
        }}
      >
        Stop losing customers to outdated design. We build
        high-converting premium websites, scalable cloud
        platforms, and developer career tools.
      </Typography>

      {/* CTA */}
      <Button
        component="a"
        href="https://code-a-nova.online/contact"
        target="_blank"
        rel="noopener noreferrer"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{
          px: 2.5,
          py: 1.3,
          borderRadius: 2,
          color: "#FFFFFF",
          fontWeight: 700,
          textTransform: "none",
          background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
          "&:hover": {
            opacity: 0.9,
            background: "linear-gradient(90deg, #7C3AED, #DB2777)",
          },
        }}
      >
        Get Your Free Proposal
      </Button>
    </Box>
  );
};

export default FooterBrand;
