import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = ({
  children,
  to,
  variant = "contained",
  ...props
}) => {
  return (
    <Button
      component={Link}
      to={to}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;