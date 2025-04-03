import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileUploader from "../components/ProfileUploader";
import FadeOutMessage from "../components/FadeOutMessage";
import { fast } from "@cloudinary/url-gen/qualifiers/FontAntialias";

interface SignInProps {
  setIsSignedIn: (value: boolean) => void;
}

const CLOUD_NAME = "drhlofiqx";
const UPLOAD_PRESET = "unsigned_upload";

const Profile = ({ setIsSignedIn }: SignInProps) => {
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("********");
  const [confirmPassword, setConfirmPassword] = useState<string>("********");

  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [pwdChange, setPwdChange] = useState<boolean>(false);
  const [isPwdValid, setIsPwdValid] = useState<boolean>(true);
  const [isPwdConfirmed, setIsPwdConfirmed] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:5232/api/users/me", { withCredentials: true })
      .then((response) => {
        setProfileImg(response.data.profileImageUrl);
        setEmail(response.data.email);
        setUsername(response.data.username);
      })
      .catch((err) => {
        setMsg(err.message);
      });
  }, []);

  const handleChangePwdClick = () => {
    setPassword("");
    setConfirmPassword("");
    setPwdChange(true);
    setIsPwdValid(false);
  };

  const handleSaveClick = async () => {
    setIsUpdating(true);

    let uploadedUrl = profileImg;

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", UPLOAD_PRESET);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await res.json();
        uploadedUrl = data.secure_url;
        setSelectedFile(null);
      } catch (err) {
        setMsg("이미지 업로드에 실패했습니다.");
        return;
      }
    }

    axios
      .put(
        "http://localhost:5232/api/users/update",
        {
          Email: email,
          PasswordHash:
            pwdChange && isPwdConfirmed && isPwdValid ? password : null,
          Username: username,
          ProfileImageUrl: selectedFile ? uploadedUrl : profileImg,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.message) {
          setMsg(response.data.message);
          setProfileImg(uploadedUrl); // 업로드 성공 시 이미지 적용
          setIsUpdating(false);
        } else {
          setMsg("Failed to update the profile.");
          setIsUpdating(false);
        }
      })
      .catch((err) => {
        setMsg("프로필 저장에 실패했습니다.");
        setIsUpdating(false);
      });
  };

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
        }
      })
      .catch((err) => {
        setMsg("로그아웃에 실패했습니다.");
      });
  };

  useEffect(() => {
    setIsPwdValid(password.length >= 8);
  }, [password]);

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsPwdConfirmed(password === confirmPassword);
  }, [confirmPassword, password]);

  return (
    <div className="p-6 flex flex-col justify-center items-center">
      <span className="flex flex-col justify-center items-start w-[20rem] m-1">
        <ProfileUploader
          previewUrl={
            selectedFile ? URL.createObjectURL(selectedFile) : profileImg
          }
          onFileSelect={setSelectedFile}
        />
        <label
          className="flex items-end w-full h-[2rem]"
          htmlFor="signup-email"
        >
          Email
        </label>
        <p className="border py-2 px-4 w-full rounded-md">{email}</p>

        <label
          className="flex items-end w-full h-[2rem]"
          htmlFor="signup-confirm-pwd"
        >
          Username
        </label>
        <input
          className="border py-2 px-4 w-full rounded-md"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {isUsernameValid ? (
          <p className="text-blue-600 text-sm">🔵 Valid username</p>
        ) : (
          <p className="text-red-500 text-sm">🚫 Cannot be empty</p>
        )}

        {pwdChange ? (
          <>
            <label
              className="flex items-end w-full h-[2rem]"
              htmlFor="signup-pwd"
            >
              Password
            </label>
            <input
              className="border py-2 px-4 w-full rounded-md"
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
              className="border py-2 px-4 w-full rounded-md"
              type="password"
              id="signup-confirm-pwd"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {isPwdConfirmed ? (
              <p className="text-blue-600 text-sm mb-4">🔵 Passwords match</p>
            ) : (
              <p className="text-red-500 text-sm mb-4">
                🚫 Passwords do not match
              </p>
            )}
          </>
        ) : (
          <button
            className="bg-white text-blue-600 mt-4 py-2 px-4 border-2 border-blue-600 rounded-md w-[20rem]"
            onClick={handleChangePwdClick}
          >
            Change Password
          </button>
        )}
      </span>

      <button
        className={
          (isPwdValid && isPwdConfirmed && isUsernameValid
            ? "bg-blue-600 border-blue-600 "
            : "bg-gray-300 border-gray-300 ") +
          "text-white m-1 py-2 px-4 border-2 rounded-md w-[20rem]"
        }
        disabled={
          !(isPwdValid && isPwdConfirmed && isUsernameValid) || isUpdating
        }
        onClick={handleSaveClick}
      >
        {isUpdating ? "Updating..." : "Save Changes"}
      </button>
      <button
        className="bg-white text-gray-400 underline py-2 px-4 rounded-md w-[20rem]"
        onClick={handleSignOutClick}
      >
        Sign Out
      </button>
      {msg && <FadeOutMessage message={msg} onClear={() => setMsg("")} />}
    </div>
  );
};

export default Profile;
