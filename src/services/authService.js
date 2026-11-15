import api from "./api";

// Signup API
export const signupUser = async (userData) => {
  const { data } = await api.post("/auth/signup", userData);
  return data;
};

// Verify OTP API
export const verifyOTP = async (otpData) => {
  const { data } = await api.post("/auth/verify-otp", otpData);
  return data;
};

// Resend OTP API
export const resendOTP = async (otpData) => {
  const { data } = await api.post("/auth/resend-otp", otpData);
  return data;
};

// Login API
export const loginUser = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data;
};
