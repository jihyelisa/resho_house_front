// components/FadeOutMessage.tsx
import { useEffect, useState } from "react";

interface FadeOutMessageProps {
  message: string;
  duration?: number;
  onClear?: () => void;
}

const FadeOutMessage = ({
  message,
  duration = 2000,
  onClear,
}: FadeOutMessageProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setShow(false);
    }, duration * 0.6); // 60% 시점에 투명도 제거

    const clearTimer = setTimeout(() => {
      onClear?.(); // 메시지 사라졌다고 부모에게 알림
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(clearTimer);
    };
  }, [duration, onClear]);

  return (
    <div
      className={`absolute w-[20rem] h-[4rem] bg-blue-100 rounded-md shadow-md flex justify-center items-center transition-opacity duration-500 ease-in-out ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default FadeOutMessage;
