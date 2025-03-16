import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SignInProps {
  setIsSignedIn: (value: boolean) => void;
}

const Profile = ({ setIsSignedIn }: SignInProps) => {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isPwdValid, setIsPwdValid] = useState<boolean>(false);
  const [isPwdConfirmed, setIsPwdConfirmed] = useState<boolean>(true);
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5232/api/users/me", { withCredentials: true })
      .then((response) => {
        setProfileImg(response.data.profileImageUrl);
        setEmail(response.data.email);
        setUsername(response.data.username);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleUploadProfileImg = () => {};

  const handleSignOutClick = () => {
    axios
      .post(
        "http://localhost:5232/api/auth/logout",
        {},
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.success) {
          setIsSignedIn(false);
          navigate("/");
        } else {
          //   showErrorMessage("Invalid email or password.");
        }
      })
      .catch((err) => {
        // showErrorMessage("Invalid email or password.");
      });
  };

  //   const showErrorMessage = (message: string) => {
  //     setError(message);
  //     setShowError(true); // ✅ 처음에는 opacity 1

  //     setTimeout(() => {
  //       setShowError(false); // ✅ 페이드아웃 효과 (opacity 0)
  //     }, 1200); // 1.4초 후 페이드아웃 시작

  //     setTimeout(() => {
  //       setError(null); // ✅ 완전히 삭제
  //     }, 2000); // 2초 후 완전히 제거
  //   };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    setIsPwdValid(password.length >= 8);
  }, [password]);

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsPwdConfirmed(
      (password === "" && confirmPassword === "") ||
        password === confirmPassword
        ? true
        : false
    );
  }, [confirmPassword, password]);

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      {/* <h2 className="text-3xl font-bold">Sign Up</h2> */}
      <span className="flex flex-col justify-center items-start w-[20rem] m-1">
        <img
          className="self-center w-[10rem] h-[10rem] m-4 rounded-full"
          src={profileImg}
          onClick={handleUploadProfileImg}
        />
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

        <label
          className="flex items-end w-full h-[2rem]"
          htmlFor="signup-confirm-pwd"
        >
          Username
        </label>
        <input
          className="border p-2 w-full h-[2.8rem] rounded-md"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {isUsernameValid ? (
          <p className="text-blue-600 text-sm">🔵 Passwords match</p>
        ) : (
          <p className="text-red-500 text-sm">🚫 Passwords do not match</p>
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
      {/* <Link to="/"> */}
      <button
        className={
          (isEmailValid && isPwdValid && isPwdConfirmed && isUsernameValid
            ? "bg-blue-600 border-blue-600 "
            : "bg-gray-300 border-gray-300 ") +
          "text-white m-1 py-2 px-4 border-2 rounded-md w-[20rem]"
        }
        disabled={!isEmailValid && !isPwdValid && !isPwdConfirmed}
      >
        Save Changes
      </button>
      {/* </Link> */}
      <button
        className="bg-white text-gray-400 underline py-2 px-4 rounded-md w-[20rem]"
        onClick={handleSignOutClick}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
