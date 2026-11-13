import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src={logo}
        alt="Code-a-Nova Logo"
        className="h-10 w-auto object-contain"
      />
      <span className="text-2xl font-bold text-blue-600">Code-a-Nova</span>
    </Link>
  );
};

export default NavbarLogo;
