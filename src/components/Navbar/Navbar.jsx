import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavbarLogo />
        <NavbarLinks />
      </div>
    </nav>
  );
};

export default Navbar;
