import { Box } from "@mui/material";
import ContactHero from "./components/ContactHero";
import ContactContent from "./components/ContactContent";

const Contact = () => {
  return (
    <Box sx={{ bgcolor: "#0B0B14", minHeight: "100vh" }}>
      {/* Contact Hero */}
      <ContactHero />
      <ContactContent />
      {/* ContactContent */}
    </Box>
  );
};

export default Contact;
