import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import theme from "./styles/theme";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/login";
import VerifyOTP from "./pages/auth/VerifyOTP";
import Dashboard from "./pages/dashboard/Dashboard";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./pages/auth/ProtectedRoute";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/verify-otp" element={<VerifyOTP />} />

          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={
                <ProtectedRoute>
                  <Registration />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
