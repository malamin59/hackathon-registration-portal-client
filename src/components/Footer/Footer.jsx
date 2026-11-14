import { Box, Container, Grid } from "@mui/material";

import FooterBrand from "./components/FooterBrand";
import FooterLinks from "./components/FooterLinks";
import FooterBottom from "./components/FooterBottom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#080810",
        pt: { xs: 8, md: 10 },
        pb: 3,
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer */}
        <Grid container spacing={{ xs: 6, md: 5 }}>
          {/* Brand Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <FooterBrand />
          </Grid>

          {/* Navigation Links */}
          <Grid size={{ xs: 12, md: 8 }}>
            <FooterLinks />
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ mt: { xs: 7, md: 9 } }}>
          <FooterBottom />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
