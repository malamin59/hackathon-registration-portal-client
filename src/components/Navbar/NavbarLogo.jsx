import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 no-underline shrink-0 relative z-10"
    >
      <img
        src={logo}
        alt="Code-A-Nova Logo"
        className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 object-contain"
      />

      <span className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap">
        Code-<span className="text-blue-500">A</span>-Nova
      </span>
    </Link>
  );
};

export default NavbarLogo;
