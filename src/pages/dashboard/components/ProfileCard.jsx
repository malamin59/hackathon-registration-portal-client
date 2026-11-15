
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const ProfileCard = ({ user, loading }) => {
  const isVerified = user?.isVerified;

  const avatarInitial =
    user?.fullName?.trim()?.charAt(0)?.toUpperCase() || "U";

  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3 },
        height: "100%",
        borderRadius: "20px",
        bgcolor: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Typography
          sx={{ color: "#FFFFFF", fontSize: "1rem", fontWeight: 700 }}
        >
          My Profile
        </Typography>

        <Button
          size="small"
          startIcon={<EditOutlinedIcon />}
          sx={{
            color: "#60A5FA",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { bgcolor: "rgba(96,165,250,0.08)" },
          }}
        >
          Edit
        </Button>
      </Stack>

      <Stack
        alignItems="center"
        textAlign="center"
        spacing={1.2}
        mb={3}
      >
        <Avatar
          sx={{
            width: 76,
            height: 76,
            bgcolor: "#1D4ED8",
            color: "#FFFFFF",
            fontSize: "1.8rem",
            fontWeight: 700,
            border: "3px solid rgba(96,165,250,0.25)",
          }}
        >
          {loading ? (
            <Skeleton variant="circular" width={76} height={76} />
          ) : (
            avatarInitial
          )}
        </Avatar>

        <Box sx={{ width: "100%" }}>
          {loading ? (
            <>
              <Skeleton
                width="55%"
                height={28}
                sx={{ bgcolor: "rgba(255,255,255,0.08)", mx: "auto" }}
              />
              <Skeleton
                width="40%"
                height={20}
                sx={{ bgcolor: "rgba(255,255,255,0.08)", mx: "auto" }}
              />
            </>
          ) : (
            <>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                }}
              >
                {user?.fullName || "User"}
              </Typography>

              <Typography
                sx={{ color: "#71717A", fontSize: "0.8rem", mt: 0.5 }}
              >
                Hackathon Participant
              </Typography>
            </>
          )}
        </Box>

        {loading ? (
          <Skeleton
            variant="rounded"
            width={115}
            height={25}
            sx={{ bgcolor: "rgba(255,255,255,0.08)", borderRadius: 5 }}
          />
        ) : (
          <Chip
            icon={
              <VerifiedRoundedIcon
                sx={{ fontSize: "16px !important" }}
              />
            }
            label={isVerified ? "Email Verified" : "Email Not Verified"}
            size="small"
            sx={{
              color: isVerified ? "#34D399" : "#FBBF24",
              bgcolor: isVerified
                ? "rgba(52,211,153,0.1)"
                : "rgba(251,191,36,0.1)",
              border: isVerified
                ? "1px solid rgba(52,211,153,0.2)"
                : "1px solid rgba(251,191,36,0.2)",
              fontSize: "0.7rem",
              fontWeight: 600,
            }}
          />
        )}
      </Stack>

      <Divider
        sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2.5 }}
      />

      <Stack spacing={2.5}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <EmailOutlinedIcon sx={{ color: "#60A5FA", fontSize: 20 }} />

          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography sx={{ color: "#71717A", fontSize: "0.7rem" }}>
              Email Address
            </Typography>

            {loading ? (
              <Skeleton
                width="75%"
                height={22}
                sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
              />
            ) : (
              <Typography
                sx={{
                  color: "#E4E4E7",
                  fontSize: "0.82rem",
                  mt: 0.4,
                  wordBreak: "break-word",
                }}
              >
                {user?.email || "Not available"}
              </Typography>
            )}
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5}>
          <PersonOutlineRoundedIcon
            sx={{ color: "#60A5FA", fontSize: 20 }}
          />

          <Box>
            <Typography sx={{ color: "#71717A", fontSize: "0.7rem" }}>
              Account Type
            </Typography>

            <Typography
              sx={{ color: "#E4E4E7", fontSize: "0.82rem", mt: 0.4 }}
            >
              Participant Account
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProfileCard;
