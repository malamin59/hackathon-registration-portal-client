import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";
import { resendOTP, verifyOTP } from "../../../../services/authService";

const OTPForm = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { userId, email } = location.state || {};

  // Verify OTP API
  const handleVerify = async (event) => {
    event.preventDefault();

    if (!userId) {
      setError("User information not found. Please sign up again.");
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      setError("");
      setSuccess("");
      setIsVerifying(true);

      const result = await verifyOTP({
        userId,
        otp,
      });

      if (result.success) {
        setSuccess(result.message || "Email verified successfully!");

        navigate("/login", {
          replace: true,
          state: {
            email,
            message: result.message,
          },
        });
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "OTP verification failed. Please try again.",
      );
    } finally {
      setIsVerifying(false);
    }
  };

  // Resend OTP API
  const handleResendOTP = async () => {
    if (!userId) {
      setError("User information not found. Please sign up again.");
      return;
    }

    try {
      setError("");
      setSuccess("");
      setIsResending(true);

      const result = await resendOTP({ userId });

      if (result.success) {
        setSuccess(result.message || "A new OTP has been sent.");
        setOtp("");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Failed to resend OTP. Please try again.",
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleVerify}>
      <Stack spacing={2.5}>
        {/* Email Information */}
        {email && (
          <Typography textAlign="center" fontSize="0.75rem" color="#A1A1AA">
            Verification code sent to {email}
          </Typography>
        )}

        {/* Error Message */}
        {error && (
          <Alert severity="error" onClose={() => setError("")}>
            {error}
          </Alert>
        )}

        {/* Success Message */}
        {success && <Alert severity="success">{success}</Alert>}

        {/* OTP Input */}
        <TextField
          fullWidth
          value={otp}
          onChange={(event) => {
            setOtp(event.target.value.replace(/\D/g, "").slice(0, 6));
            setError("");
          }}
          placeholder="Enter 6-digit OTP"
          disabled={isVerifying}
          slotProps={{
            htmlInput: {
              maxLength: 6,
              inputMode: "numeric",
            },
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

        {/* Verify Button */}
        <Button
          type="submit"
          fullWidth
          disabled={otp.length !== 6 || isVerifying}
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
          {isVerifying ? "Verifying..." : "Verify Email"}
        </Button>

        {/* Resend OTP */}
        <Typography textAlign="center" fontSize="0.7rem" color="#A1A1AA">
          Didn't receive the code?{" "}
          <Box
            component="span"
            onClick={!isResending ? handleResendOTP : undefined}
            sx={{
              color: "#60A5FA",
              fontWeight: 600,
              cursor: isResending ? "not-allowed" : "pointer",
              opacity: isResending ? 0.5 : 1,
              "&:hover": {
                color: "#93C5FD",
              },
            }}
          >
            {isResending ? "Sending..." : "Resend OTP"}
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default OTPForm;
