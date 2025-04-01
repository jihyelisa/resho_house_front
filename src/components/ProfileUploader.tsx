import { useRef } from "react";

interface ProfileUploaderProps {
  previewUrl: string | null;
  onFileSelect: (file: File) => void;
}

const ProfileUploader = ({
  previewUrl,
  onFileSelect,
}: ProfileUploaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFileSelect(file);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <div
        className="relative w-[10rem] h-[10rem] m-1 rounded-full overflow-hidden cursor-pointer group"
        onClick={() => inputRef.current?.click()}
      >
        <img
          className="w-full h-full object-cover"
          src={previewUrl || "/default.png"}
          alt="profile"
        />
        <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-800 bg-opacity-60">
          <img
            className="w-10 h-10 filter invert"
            src="/images/icons/edit.png"
            alt="edit"
          />
        </div>
      </div>
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
