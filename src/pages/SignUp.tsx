import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPwdValid, setIsPwdValid] = useState<boolean>(false);
  const [isPwdConfirmed, setIsPwdConfirmed] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setIsPwdValid(password.length >= 8);
  }, [password]);

  useEffect(() => {
    setIsPwdConfirmed(
      (password === "" && confirmPassword === "") ||
        password === confirmPassword
        ? true
        : false
    );
  }, [confirmPassword, password]);

  const handleSignUpClick = () => {
    console.log(email);
    console.log(password);

    axios
      .post(
        "http://localhost:5232/api/users/register",
        {
          Email: email,
          Password: password,
        },
        {
          headers: {
            "Content-Type": "application/json", // ✅ JSON 요청 명확히 설정
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">Sign Up</h2>
      <span className="flex flex-col justify-center items-start w-[20rem] m-6">
        <label
          className="flex items-end w-full h-[2rem]"
          htmlFor="signup-email"
        >
          Email
        </label>
        <input
          className="border p-2 w-full h-[2.8rem] rounded-md"
          type="text"
          id="signup-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isEmailValid ? (
          <p className="text-blue-600 text-sm">🔵 Valid email</p>
        ) : (
          <p className="text-red-500 text-sm">
            🚫 Please enter a valid email address
          </p>
        )}
        <label className="flex items-end w-full h-[2rem]" htmlFor="signup-pwd">
          Password
        </label>
        <input
          className="border p-2 w-full h-[2.8rem] rounded-md"
          type="password"
          id="signup-pwd"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isPwdValid ? (
          <p className="text-blue-600 text-sm">🔵 Valid password</p>
        ) : (
          <p className="text-red-500 text-sm">
            🚫 Must be at least 8 characters long
          </p>
        )}
        <label
          className="flex items-end w-full h-[2rem]"
          htmlFor="signup-confirm-pwd"
        >
          Confirm Password
        </label>
        <input
          className="border p-2 w-full h-[2.8rem] rounded-md"
          type="password"
          id="signup-confirm-pwd"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {isPwdConfirmed ? (
          <p className="text-blue-600 text-sm">🔵 Passwords match</p>
        ) : (
          <p className="text-red-500 text-sm">🚫 Passwords do not match</p>
        )}
      </span>
      <button
        className={
          (isEmailValid && isPwdValid && isPwdConfirmed
            ? "bg-blue-600 border-blue-600 "
            : "bg-gray-300 border-gray-300 ") +
          "text-white py-2 px-4 border-2 rounded-md w-[20rem] mb-2"
        }
        onClick={handleSignUpClick}
        disabled={isEmailValid && isPwdValid && isPwdConfirmed}
      >
        Sign Up
      </button>
      <p className="text-gray-300 text-m">Already have an account?</p>
      <Link to="/signin">
        <button className="bg-white text-blue-600 border-2 border-blue-600 py-2 px-4 rounded-md w-[20rem]">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
