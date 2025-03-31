import { useRef } from "react";

interface ProfileUploaderProps {
  imgUrl: string;
  onUploadSuccess: (url: string) => void;
}

const ProfileUploader = ({ onUploadSuccess, imgUrl }: ProfileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickImage = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_upload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drhlofiqx/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    onUploadSuccess(data.secure_url);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <img
        className="w-[10rem] h-[10rem] m-1 rounded-full pointer"
        src={imgUrl || "/default.png"}
        alt="profile"
        onClick={handleClickImage}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfileUploader;
