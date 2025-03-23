import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SignInProps {
  setIsSignedIn: (value: boolean) => void;
}

const FadeOutMessage = ({ setIsSignedIn }: SignInProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState<boolean>(false);

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
        if (response.data.success) {
          setIsSignedIn(true);
          navigate("/");
        } else {
          showErrorMessage("Invalid email or password.");
        }
      })
      .catch((err) => {
        showErrorMessage("Invalid email or password.");
      });
  };

  const showErrorMessage = (message: string) => {
    setError(message);
    setShowError(true); // ✅ 처음에는 opacity 1

    setTimeout(() => {
      setShowError(false); // ✅ 페이드아웃 효과 (opacity 0)
    }, 1200); // 1.4초 후 페이드아웃 시작

    setTimeout(() => {
      setError(null); // ✅ 완전히 삭제
    }, 2000); // 2초 후 완전히 제거
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center relative">
      {error && (
        <div
          className={`absolute w-[20rem] h-[4rem] bg-blue-100 rounded-md shadow-md flex justify-center items-center  transition-opacity duration-500 ease-in-out ${
            showError ? "opacity-100" : "opacity-0"
          }`}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default FadeOutMessage;
