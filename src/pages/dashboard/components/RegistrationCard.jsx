
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  Skeleton,
  Divider,
  Link,
  Collapse,
} from "@mui/material";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import { getMyRegistration } from "../../../services/hackathonService";

const RegistrationCard = () => {
  const navigate = useNavigate();

  const [registration, setRegistration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchRegistration = async () => {
      try {
        setLoading(true);
        setError("");

        const result = await getMyRegistration();

        const registrationData = result?.data;

        const entry = Array.isArray(registrationData)
          ? registrationData[0]
          : registrationData;

        setRegistration(entry || null);
      } catch (err) {
        // No registration is a normal state, not an API error.
        if (err.response?.status === 404) {
          setRegistration(null);
        } else {
          setError(
            err.response?.data?.message ||
              "Unable to load registration details"
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRegistration();
  }, []);

  const isRegistered = Boolean(registration);

  const detailItem = (label, value) => (
    <Box>
      <Typography
        sx={{
          color: "#71717A",
          fontSize: "0.72rem",
          mb: 0.5,
        }}
      >
        {label}
      </Typography>

      <Typography
        sx={{
          color: "#E4E4E7",
          fontSize: "0.85rem",
          fontWeight: 500,
          overflowWrap: "anywhere",
        }}
      >
        {value || "Not provided"}
      </Typography>
    </Box>
  );

  const linkItem = (label, url) => {
    if (!url) return null;

    return (
      <Box>
        <Typography
          sx={{
            color: "#71717A",
            fontSize: "0.72rem",
            mb: 0.5,
          }}
        >
          {label}
        </Typography>

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.5,
            color: "#60A5FA",
            fontSize: "0.82rem",
            overflowWrap: "anywhere",
          }}
        >
          Open Link
          <OpenInNewRoundedIcon sx={{ fontSize: 15 }} />
        </Link>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        p: { xs: 2.5, sm: 3 },
        height: "100%",
        borderRadius: "20px",
        bgcolor: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          Hackathon Registration
        </Typography>

        {loading ? (
          <Skeleton
            variant="rounded"
            width={105}
            height={25}
            sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
          />
        ) : (
          <Chip
            label={isRegistered ? "Registered" : "Not Registered"}
            size="small"
            sx={{
              color: isRegistered ? "#34D399" : "#FBBF24",
              bgcolor: isRegistered
                ? "rgba(52,211,153,0.1)"
                : "rgba(251,191,36,0.1)",
              border: isRegistered
                ? "1px solid rgba(52,211,153,0.2)"
                : "1px solid rgba(251,191,36,0.2)",
              fontSize: "0.68rem",
              fontWeight: 600,
            }}
          />
        )}
      </Stack>

      {/* Icon */}
      <Box
        sx={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "14px",
          color: "#60A5FA",
          bgcolor: "rgba(96,165,250,0.12)",
          mb: 2,
        }}
      >
        <EmojiEventsRoundedIcon sx={{ fontSize: 26 }} />
      </Box>

      {/* Event Information */}
      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: "1.2rem",
          fontWeight: 700,
          mb: 1,
        }}
      >
        Code-A-Nova Hackathon 2026
      </Typography>

      <Typography
        sx={{
          color: "#A1A1AA",
          fontSize: "0.82rem",
          lineHeight: 1.8,
          mb: 3,
        }}
      >
        {loading
          ? "Checking your registration details..."
          : isRegistered
            ? `Your project "${registration.projectName || "Untitled Project"}" has been registered successfully.`
            : "Turn your innovative ideas into reality. Register now and participate in an exciting hackathon experience."}
      </Typography>

      {/* Loading */}
      {loading ? (
        <Stack spacing={1}>
          <Skeleton
            width="70%"
            height={20}
            sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
          />
          <Skeleton
            width="50%"
            height={20}
            sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
          />
        </Stack>
      ) : error ? (
        <Typography
          sx={{ color: "#F87171", fontSize: "0.82rem", mb: 2 }}
        >
          {error}
        </Typography>
      ) : isRegistered ? (
        <Stack spacing={1.5} mb={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CalendarMonthRoundedIcon
              sx={{ color: "#71717A", fontSize: 19 }}
            />
            <Typography sx={{ color: "#A1A1AA", fontSize: "0.78rem" }}>
              Team Size: {registration.teamSize || 1} Member(s)
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <GroupsRoundedIcon
              sx={{ color: "#71717A", fontSize: 19 }}
            />
            <Typography sx={{ color: "#A1A1AA", fontSize: "0.78rem" }}>
              Domain: {registration.domain || "Not specified"}
            </Typography>
          </Stack>

          {/* Expandable Registration Details */}
          <Collapse in={showDetails}>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 2 }} />

            <Stack spacing={2.5}>
              <Typography
                sx={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 700 }}
              >
                Project Details
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {detailItem("Project Name", registration.projectName)}
                {detailItem("Domain", registration.domain)}
                {detailItem("College", registration.collegeName)}
                {detailItem("Course", registration.course)}
                {detailItem("Branch", registration.branch)}
                {detailItem("Year of Study", registration.yearOfStudy)}
              </Box>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

              <Typography
                sx={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 700 }}
              >
                Team Members
              </Typography>

              <Stack spacing={1.5}>
                {detailItem("Team Leader", registration.fullName)}
                {detailItem("Email", registration.email)}

                {registration.teamMembers?.length > 0 ? (
                  registration.teamMembers.map((member, index) => (
                    <Box
                      key={member._id || index}
                      sx={{
                        p: 1.5,
                        borderRadius: "10px",
                        bgcolor: "rgba(255,255,255,0.03)",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#60A5FA",
                          fontSize: "0.72rem",
                          mb: 0.5,
                        }}
                      >
                        Member {index + 2}
                      </Typography>

                      {detailItem("Name", member.memberName)}
                      <Box mt={1}>
                        {detailItem("Email", member.memberEmail)}
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{ color: "#A1A1AA", fontSize: "0.8rem" }}
                  >
                    Solo participation
                  </Typography>
                )}
              </Stack>

              <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

              <Typography
                sx={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 700 }}
              >
                Project Submissions
              </Typography>

              <Stack spacing={1.5}>
                {linkItem("Presentation (PPT)", registration.pptLink)}
                {linkItem("Prototype", registration.prototypeLink)}
                {linkItem("Demo Video", registration.demoVideoLink)}
              </Stack>
            </Stack>
          </Collapse>
        </Stack>
      ) : null}

      <Box sx={{ flexGrow: 1 }} />

      {/* Action Button */}
      {!loading && !error && isRegistered && (
        <Button
          fullWidth
          variant="outlined"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={() => setShowDetails((previous) => !previous)}
          sx={{
            py: 1.3,
            borderRadius: "12px",
            borderColor: "rgba(96,165,250,0.4)",
            color: "#60A5FA",
            fontWeight: 700,
            textTransform: "none",
            "&:hover": {
              bgcolor: "rgba(96,165,250,0.08)",
              borderColor: "#60A5FA",
            },
          }}
        >
          {showDetails ? "Hide Registration Details" : "View Registration Details"}
        </Button>
      )}

      {!loading && !error && !isRegistered && (
        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardRoundedIcon />}
          onClick={() => navigate("/register")}
          sx={{
            py: 1.3,
            borderRadius: "12px",
            bgcolor: "#2563EB",
            color: "#FFFFFF",
            fontWeight: 700,
            textTransform: "none",
            "&:hover": { bgcolor: "#1D4ED8" },
          }}
        >
          Complete Registration
        </Button>
      )}
    </Box>
  );
};

export default RegistrationCard;
