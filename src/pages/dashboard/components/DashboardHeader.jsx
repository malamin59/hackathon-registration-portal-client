
import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const DashboardHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
        pb: 3,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Page Title */}
      <Box>
        <Typography
          variant="h5"
          fontWeight={800}
          color="#F8FAFC"
          letterSpacing="-0.5px"
        >
          Dashboard
        </Typography>

        <Typography fontSize={13} color="#64748B" mt={0.5}>
          Home / Overview
        </Typography>
      </Box>

      {/* Actions */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 1, sm: 2 }}
      >
        {/* Search */}
        <TextField
          placeholder="Search anything..."
          size="small"
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { sm: 190, md: 240 },
            "& .MuiOutlinedInput-root": {
              color: "#F8FAFC",
              borderRadius: 2.5,
              bgcolor: "#111827",
              fontSize: 13,
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.07)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(96,165,250,0.4)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3B82F6",
              },
            },
            "& input::placeholder": {
              color: "#64748B",
              opacity: 1,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon
                  sx={{ color: "#64748B", fontSize: 20 }}
                />
              </InputAdornment>
            ),
          }}
        />

        {/* Notifications */}
        <IconButton
          sx={{
            width: 42,
            height: 42,
            color: "#94A3B8",
            bgcolor: "#111827",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 2.5,
            "&:hover": {
              color: "#60A5FA",
              bgcolor: "rgba(59,130,246,0.1)",
            },
          }}
        >
          <NotificationsNoneRoundedIcon />
        </IconButton>

        {/* User Profile */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ cursor: "pointer" }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              bgcolor: "#1D4ED8",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            A
          </Avatar>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Typography
              fontSize={13}
              fontWeight={700}
              color="#F8FAFC"
            >
              Al Amin
            </Typography>

            <Typography fontSize={11} color="#64748B">
              Participant
            </Typography>
          </Box>

          <KeyboardArrowDownRoundedIcon
            sx={{
              color: "#64748B",
              fontSize: 20,
              display: { xs: "none", sm: "block" },
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default DashboardHeader;
