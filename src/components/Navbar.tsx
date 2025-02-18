import { Link } from "react-router-dom";
import logo from "../assets/resho_logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-300 h-14 px-6 text-white flex justify-between items-center sticky top-0">
      <Link
        to="/"
        className="text-white flex gap-3 justify-center items-center"
      >
        <img src={logo} className="w-14 invert" alt="Resho Logo" />
        <h1 className="text-xl font-bold">RESHO</h1>
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline text-white">
          Home
        </Link>
        <Link to="/events" className="hover:underline text-white">
          Events
        </Link>
        <Link to="/gallery" className="hover:underline text-white">
          Gallery
        </Link>
        <Link to="/eventupload" className="hover:underline text-white">
          Upload
        </Link>
        <Link to="/signin" className="hover:underline text-white">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
