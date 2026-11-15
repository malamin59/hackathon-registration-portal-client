import { useState } from "react";
import { Box, Button, TextField,  Stack } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Contact Form Data:", formData);
  };

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      color: "#FFFFFF",
      borderRadius: 2,
      backgroundColor: "#0B0B14",
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.12)",
      },
      "&:hover fieldset": {
        borderColor: "#8B5CF6",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8B5CF6",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#A1A1AA",
    },
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        bgcolor: "#151522",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <Stack spacing={3}>
        <TextField
          fullWidth
          required
          name="fullName"
          label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          sx={inputStyles}
        />

        <TextField
          fullWidth
          required
          type="email"
          name="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          sx={inputStyles}
        />

        <TextField
          fullWidth
          required
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
          sx={inputStyles}
        />

        <TextField
          fullWidth
          required
          multiline
          rows={5}
          name="message"
          label="Your Message"
          value={formData.message}
          onChange={handleChange}
          sx={inputStyles}
        />

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendRoundedIcon />}
          sx={{
            py: 1.6,
            borderRadius: 2,
            fontWeight: 700,
            textTransform: "none",
            fontSize: "1rem",
            background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
            "&:hover": {
              opacity: 0.9,
              background: "linear-gradient(90deg, #7C3AED, #DB2777)",
            },
          }}
        >
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;
