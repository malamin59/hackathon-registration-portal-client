import { Box, Container, Grid, Typography } from "@mui/material";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 7 }}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#A78BFA",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              CONTACT INFORMATION
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: "#FFFFFF",
                fontWeight: 800,
                mt: 1,
                mb: 2,
              }}
            >
              Let's Connect
            </Typography>

            <Typography
              sx={{
                color: "#A1A1AA",
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              Whether you have a question, need support, or want to collaborate,
              our team is ready to hear from you.
            </Typography>

            <ContactInfo />
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
