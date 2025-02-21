import { useState } from "react";

const EventUpload = () => {
  return (
    <div className="text-center flex flex-col items-center h-[calc(100vh-120px)]">
      <span className="sticky top-14 bg-white w-full py-8">
        <h2 className="text-3xl font-bold">New Event</h2>
      </span>
      <div className="flex flex-col flex-grow gap-6 w-4/5 justify-between px-20 py-14 rounded-md border-2 border-blue-300">
        <p className="text-gray-600 min-w-full">
          <strong>
            <input
              className="text-xl min-w-full p-2 focus-visible:outline-none placeholder-gray-400 placeholder:italic border-b-2 border-blue-300"
              placeholder="Enter your title here"
            />
          </strong>
        </p>
        <textarea className="resize-none flex-grow text-start text-gray-900 whitespace-pre-wrap bg-transparent focus-visible:outline-none placeholder-gray-400 placeholder:italic p-2"></textarea>
        {/* <div className="grid grid-cols-3 gap-6 mt-6">
          <span className="rounded-md overflow-hidden max-h-40 flex items-center">
            <img
              src="/images/photo_sample_3.jpeg"
              className="rounded-md"
              alt=""
            />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default EventUpload;
