
import { Box, Typography, Stack } from "@mui/material";

const legalLinks = [
  {
    name: "Privacy Policy",
    url: "https://code-a-nova.online/privacy-policy",
  },
  {
    name: "Terms of Service",
    url: "https://code-a-nova.online/terms",
  },
  {
    name: "Refund Policy",
    url: "https://code-a-nova.online/refund-policy",
  },
];

const FooterBottom = () => {
  return (
    <Box>
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          pt: 3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* Copyright */}
        <Typography
          color="#71717A"
          fontSize="0.85rem"
          textAlign="center"
        >
          © 2026 Code-A-Nova. All rights reserved.
        </Typography>

        {/* Legal Links */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
        >
          {legalLinks.map((link) => (
            <Typography
              key={link.name}
              component="a"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#71717A",
                fontSize: "0.85rem",
                textDecoration: "none",
                transition: "0.2s ease",
                "&:hover": {
                  color: "#A78BFA",
                },
              }}
            >
              {link.name}
            </Typography>
          ))}
        </Stack>

        {/* Portal Login */}
        <Typography
          component="a"
          href="https://code-a-nova.online/login"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#A78BFA",
            fontSize: "0.85rem",
            fontWeight: 700,
            textDecoration: "none",
            "&:hover": {
              color: "#EC4899",
            },
          }}
        >
          Portal Login →
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterBottom;
