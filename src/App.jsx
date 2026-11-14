import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import theme from "./styles/theme";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/login";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
