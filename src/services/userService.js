import api from "./api";

export const getCurrentUser = async () => {
  const { data } = await api.get("auth/me");
  return data;
};