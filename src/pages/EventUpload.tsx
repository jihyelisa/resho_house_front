import { useRef, useState } from "react";

const EventUpload = () => {
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[30rem] px-4">
      {/* 상단 제목 */}
      <div className="w-full py-8 text-center">
        <h2 className="text-3xl font-bold">New Event</h2>
      </div>

      <div className="flex w-[800px] justify-between">
        <div>category</div>
        <div>event date</div>
        <div>participants</div>
        <button>Publish</button>
      </div>

      {/* 콘텐츠 박스 */}
      <div className="w-full max-w-4xl flex-grow border-2 border-blue-300 rounded-md px-8 py-8 flex flex-col gap-6 min-h-[38rem]">
        {/* 제목 */}
        <input
          type="text"
          className="text-xl w-full p-2 focus:outline-none placeholder-gray-400 placeholder:italic border-b-2 border-blue-300"
          placeholder="Enter your title here"
        />

        {/* 본문 */}
        <textarea
          ref={textareaRef}
          value={content}
          onChange={handleInput}
          className="w-full mt-4 text-gray-900 whitespace-pre-wrap bg-transparent focus:outline-none placeholder-gray-400 placeholder:italic p-2 overflow-hidden resize-none"
          placeholder="Write your event description..."
        />
      </div>
    </div>
  );
};

export default EventUpload;
