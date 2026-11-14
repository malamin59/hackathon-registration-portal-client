
import { Box, Typography, Stack } from "@mui/material";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "All Services", url: "https://code-a-nova.online/services" },
      { name: "Business Websites", url: "https://code-a-nova.online/service/business-websites" },
      { name: "AI Automation", url: "https://code-a-nova.online/service/ai-automation" },
      { name: "ERP Systems", url: "https://code-a-nova.online/service/erp-systems" },
      { name: "E-Commerce Stores", url: "https://code-a-nova.online/service/ecommerce-stores" },
      { name: "Industry Solutions", url: "https://code-a-nova.online/industries" },
    ],
  },
  {
    title: "Platforms & Tools",
    links: [
      { name: "Our Products", url: "https://code-a-nova.online/products" },
      { name: "AI Resume Builder", url: "https://code-a-nova.online/resume-builder" },
      { name: "AI Mock Interviews", url: "https://code-a-nova.online/mock-interview" },
      { name: "Project Hub Marketplace", url: "https://code-a-nova.online/project-hub" },
      { name: "1:1 Mentorship", url: "https://code-a-nova.online/mentorship" },
      { name: "Skill Assessments", url: "https://code-a-nova.online/assessments" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { name: "BUILDX Hackathon", url: "https://code-a-nova.online/hackathon" },
      { name: "Verified Tech Jobs", url: "https://code-a-nova.online/jobs" },
      { name: "Technical Resources", url: "https://code-a-nova.online/resources" },
      { name: "Verify Certificate", url: "https://code-a-nova.online/verify" },
      { name: "Campus Ambassador", url: "https://code-a-nova.online/campus-ambassador" },
      { name: "Student Leaderboard", url: "https://code-a-nova.online/leaderboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", url: "https://code-a-nova.online/about" },
      { name: "Portfolio & Work", url: "https://code-a-nova.online/projects" },
      { name: "Student Registration", url: "https://code-a-nova.online/internship" },
      { name: "Contact Team", url: "https://code-a-nova.online/contact" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: { xs: 4, md: 3 },
      }}
    >
      {footerSections.map((section) => (
        <Box key={section.title}>
          <Typography
            fontWeight={800}
            color="#FFFFFF"
            mb={2.5}
            fontSize="1rem"
          >
            {section.title}
          </Typography>

          <Stack spacing={1.5}>
            {section.links.map((link) => (
              <Typography
                key={link.name}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#A1A1AA",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "0.2s ease",
                  "&:hover": {
                    color: "#A78BFA",
                    transform: "translateX(4px)",
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default FooterLinks;
