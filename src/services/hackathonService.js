import api from "./api";

// Submit Hackathon Registration
export const registerHackathon = async (registrationData) => {
  const { data } = await api.post(
    "/hackathon/register",
    registrationData
  );

  return data;
};

// Get Logged-in User Registration
export const getMyRegistration = async () => {
  const { data } = await api.get("/hackathon/my-entry");

  return data;
};