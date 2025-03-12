import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(null);
  const handleSignInClick = () => {
    axios
      .post("http://localhost:5232/api/auth/login", {
        params: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <p className="text-gray-600 mt-2 pb-16">로그인하세염</p>
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
          />
          <input
            className="border p-2 w-[250px] rounded-md"
            type="password"
            id="signin-pwd"
            name="signin-pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
};

export default SignIn;
