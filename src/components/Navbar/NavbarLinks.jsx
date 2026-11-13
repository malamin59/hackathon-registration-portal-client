import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Sign Up", path: "/signup", isButton: true },
];

const NavbarLinks = () => {
  return (
    <div className="flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={
            link.isButton
              ? "bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              : "text-gray-700 hover:text-blue-600"
          }
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavbarLinks;
