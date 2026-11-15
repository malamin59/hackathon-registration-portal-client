import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../schemas/login.schema";
import { inputStyles } from "./inputStyles";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/authService";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      setError("");

      const result = await loginUser(data);

      if (!result.success) {
        throw new Error(result.message || "Login failed");
      }

      const token = result.data?.token;

      if (!token) {
        throw new Error("Authentication token was not returned.");
      }

      // Save authentication token
      localStorage.setItem("token", token);

      // Navigate to dashboard
      navigate("/dashboard", { replace: true });
    } catch (error) {
      setError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1.5}>
        {/* Error Message */}
        {error && <Alert severity="error">{error}</Alert>}
        {/* Email */}
        <TextField
          fullWidth
          type="email"
          placeholder="Enter your email address"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          sx={inputStyles}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon sx={{ fontSize: 16, color: "#666" }} />
                </InputAdornment>
              ),
            },
          }}
        />

        {/* Password */}
        <TextField
          fullWidth
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          sx={inputStyles}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon sx={{ fontSize: 16, color: "#666" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                    size="small"
                    sx={{ color: "#60A5FA" }}
                  >
                    {showPassword ? (
                      <VisibilityOff fontSize="small" />
                    ) : (
                      <Visibility fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        {/* Login Button */}
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting}
          sx={{
            mt: 1,
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
          }}
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </Button>

        {/* Signup Link */}
        <Typography
          textAlign="center"
          fontSize="0.7rem"
          color="#A1A1AA"
          pt={0.5}
        >
          Don't have an account?{" "}
          <Box
            component={Link}
            to="/signup"
            sx={{
              color: "#60A5FA",
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": {
                color: "#93C5FD",
                textDecoration: "underline",
              },
            }}
          >
            Sign up
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default LoginForm;
