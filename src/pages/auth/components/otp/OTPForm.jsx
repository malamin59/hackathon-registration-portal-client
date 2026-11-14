
import { useState } from "react";

import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const OTPForm = () => {
  const [otp, setOtp] = useState("");

  const handleVerify = (event) => {
    event.preventDefault();

    console.log("OTP:", otp);
  };

  const handleResendOTP = () => {
    console.log("Resend OTP");
  };

  return (
    <Box component="form" onSubmit={handleVerify}>
      <Stack spacing={2.5}>
        <TextField
          fullWidth
          value={otp}
          onChange={(event) =>
            setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))
          }
          placeholder="Enter 6-digit OTP"
          inputProps={{
            maxLength: 6,
            inputMode: "numeric",
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 48,
              borderRadius: "30px",
              color: "#FFFFFF",
              fontSize: "1rem",
              letterSpacing: "8px",
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.025)",
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
            "& input": {
              textAlign: "center",
            },
          }}
        />

        <Button
          type="submit"
          fullWidth
          disabled={otp.length !== 6}
          sx={{
            height: 46,
            borderRadius: "30px",
            bgcolor: "#242424",
            color: "#FFFFFF",
            fontSize: "0.85rem",
            fontWeight: 500,
            textTransform: "none",
            "&:hover": {
              bgcolor: "#303030",
            },
            "&.Mui-disabled": {
              bgcolor: "#1c1c1c",
              color: "#666",
            },
          }}
        >
          Verify Email
        </Button>

        <Typography
          textAlign="center"
          fontSize="0.7rem"
          color="#A1A1AA"
        >
          Didn't receive the code?{" "}
          <Box
            component="span"
            onClick={handleResendOTP}
            sx={{
              color: "#60A5FA",
              fontWeight: 600,
              cursor: "pointer",
              "&:hover": {
                color: "#93C5FD",
              },
            }}
          >
            Resend OTP
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default OTPForm;
