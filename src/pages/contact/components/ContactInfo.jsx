
import { Box, Typography, Stack } from "@mui/material";
import {
  EmailOutlined,
  AccessTime,
  SupportAgent,
} from "@mui/icons-material";

const contactDetails = [
  {
    icon: <EmailOutlined />,
    title: "Email Us",
    description: "Have a question? Send us an email.",
    value: "Contact email will be added soon",
  },
  {
    icon: <AccessTime />,
    title: "Response Time",
    description: "We try to respond as quickly as possible.",
    value: "Within 24–48 hours",
  },
  {
    icon: <SupportAgent />,
    title: "Support",
    description: "We're here to help with your queries.",
    value: "Team Code-A-Nova",
  },
];

const ContactInfo = () => {
  return (
    <Stack spacing={3}>
      {contactDetails.map((item) => (
        <Box
          key={item.title}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 2.5,
            p: 3,
            borderRadius: 3,
            bgcolor: "#151522",
            border: "1px solid rgba(255,255,255,0.07)",
            transition: "0.3s ease",
            "&:hover": {
              borderColor: "#8B5CF6",
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              flexShrink: 0,
              display: "grid",
              placeItems: "center",
              borderRadius: 2,
              color: "#C4B5FD",
              bgcolor: "rgba(139,92,246,0.15)",
              "& svg": { fontSize: 26 },
            }}
          >
            {item.icon}
          </Box>

          <Box>
            <Typography fontWeight={700} color="#FFFFFF" mb={0.5}>
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              color="#A1A1AA"
              mb={1}
            >
              {item.description}
            </Typography>

            <Typography fontWeight={600} color="#A78BFA">
              {item.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default ContactInfo;
