import { Link } from "react-router-dom";
import logo from "../assets/resho_logo.png";
import { useEffect, useState } from "react";
import axios from "axios";

interface NavbarProps {
  isSignedIn: boolean;
}

const Navbar = ({ isSignedIn }: NavbarProps) => {
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isSignedIn === false) {
      setUsername(null);
    }

    axios
      .get("http://localhost:5232/api/users/me", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setUsername(response.data.username);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [isSignedIn]);

  return (
    <nav className="w-full bg-blue-300 h-14 px-6 text-white flex justify-between items-center sticky top-0 z-50">
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
        {/* <Link to="/gallery" className="hover:underline text-white">Gallery</Link> */}
        {username ? (
          <>
            <Link to="/events" className="hover:underline text-white">
              Events
            </Link>
            <Link to="/eventupload" className="hover:underline text-white">
              Upload
            </Link>
            <Link
              to="/profile"
              className="hover:underline text-white text-bold hover:underline cursor-pointer"
            >
              Hello, {username}
            </Link>
          </>
        ) : (
          <Link to="/signin" className="hover:underline text-white">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
