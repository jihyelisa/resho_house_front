import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FadeOutMessage from "../components/FadeOutMessage";

interface SignInProps {
  setIsSignedIn: (value: boolean) => void;
}

const SignIn = ({ setIsSignedIn }: SignInProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignInClick = () => {
    axios
      .post(
        "http://localhost:5232/api/auth/login",
        {
          Email: email,
          Password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setIsSignedIn(true);
          navigate("/");
        } else {
          setError("Invalid email or password.");
        }
      })
      .catch(() => {
        setError("Invalid email or password.");
      });
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center relative">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <div className="flex justify-between items-center pb-16 h-[100px] w-[360px]">
        <span className="flex flex-col gap-4 items-start h-[100px]">
          <label className="h-[42px] flex items-center" htmlFor="signin-email">
            Email
          </label>
          <label className="h-[42px] flex items-center" htmlFor="signin-pwd">
            Password
          </label>
        </span>
        <span className="flex flex-col gap-4 items-center h-[100px]">
          <input
            className="border p-2 w-[250px] rounded-md"
            type="text"
            id="signin-email"
            name="signin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSignInClick()}
          />
          <input
            className="border p-2 w-[250px] rounded-md"
            type="password"
            autoComplete="new-password"
            id="signin-pwd"
            name="signin-pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSignInClick()}
          />
        </span>
      </div>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-md w-[360px] mb-2"
        onClick={handleSignInClick}
      >
        Sign In
      </button>
      <Link to="/signup">
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md w-[360px]">
          Sign Up
        </button>
      </Link>

      {error && (
        <FadeOutMessage message={error} onClear={() => setError(null)} />
      )}
    </div>
  );
};

export default SignIn;
