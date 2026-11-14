import { useState } from "react";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import signupSchema from "../schemas/signup.schema";
import { inputStyles } from "./inputStyles";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Signup Data:", data);
  };

  const passwordAdornment = (visible, toggle) => ({
    startAdornment: (
      <InputAdornment position="start">
        <LockOutlinedIcon sx={{ fontSize: 16, color: "#666" }} />
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={toggle}
          edge="end"
          size="small"
          sx={{ color: "#60A5FA" }}
        >
          {visible ? (
            <VisibilityOff fontSize="small" />
          ) : (
            <Visibility fontSize="small" />
          )}
        </IconButton>
      </InputAdornment>
    ),
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={1.5}>
        {/* Full Name */}
        <TextField
          fullWidth
          placeholder="Enter your full name"
          {...register("fullName")}
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          sx={inputStyles}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ fontSize: 16, color: "#666" }} />
                </InputAdornment>
              ),
            },
          }}
        />

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
          type={showPassword ? "text" : "password"}
          placeholder="Create a password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          className="border-outline-none"
          sx={inputStyles}
          slotProps={{
            input: passwordAdornment(showPassword, () =>
              setShowPassword((prev) => !prev),
            ),
          }}
        />

        {/* Confirm Password */}
        <TextField
          fullWidth
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm your password"
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          sx={inputStyles}
          slotProps={{
            input: passwordAdornment(showConfirmPassword, () =>
              setShowConfirmPassword((prev) => !prev),
            ),
          }}
        />

        {/* Signup Button */}
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
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>

        {/* Login Link */}
        <Typography
          textAlign="center"
          fontSize="0.7rem"
          color="#A1A1AA"
          pt={0.5}
        >
          Already have an account?{" "}
          <Box
            component={Link}
            to="/login"
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
            Log in
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignupForm;
