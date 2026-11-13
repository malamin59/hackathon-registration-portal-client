import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import navLinks from "../Navbar/NavbarLinks";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "secondary.main", color: "#fff", py: 5 }}>
      <Container maxWidth="xl">
        <Typography variant="h5" fontWeight={700} mb={2}>
          Code-a-Nova
        </Typography>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 3 }}>
          {navLinks.map((link) => (
            <Typography
              key={link.path}
              component={Link}
              to={link.path}
              sx={{ color: "inherit", textDecoration: "none" }}
            >
              {link.name}
            </Typography>
          ))}
        </Box>

        <Typography variant="body2" color="grey.400">
          Contact: {/* Add official contact email */}
        </Typography>

        <Typography variant="body2" color="grey.400" mt={2}>
          © {new Date().getFullYear()} Code-a-Nova. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;