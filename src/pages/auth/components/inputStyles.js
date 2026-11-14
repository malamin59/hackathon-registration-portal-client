export const inputStyles = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "9999px",
    backgroundColor: "rgba(255,255,255,0.05)",

    "& fieldset": {
      border: "none",
    },

    "&:hover fieldset": {
      border: "none",
    },

    "&.Mui-focused fieldset": {
      border: "none",
    },
  },

  // Chrome Autofill Fix
  "& input:-webkit-autofill": {
    WebkitBoxShadow: "0 0 0 1000px #1c1c1c inset !important",
    WebkitTextFillColor: "#fff !important",
    caretColor: "#fff",
    borderRadius: "9999px",
    transition: "background-color 5000s ease-in-out 0s",
  },

  "& input:-webkit-autofill:hover": {
    WebkitBoxShadow: "0 0 0 1000px #1c1c1c inset !important",
  },

  "& input:-webkit-autofill:focus": {
    WebkitBoxShadow: "0 0 0 1000px #1c1c1c inset !important",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#777",
    opacity: 1,
  },

  "& .MuiFormHelperText-root": {
    ml: 1.5,
  },
};