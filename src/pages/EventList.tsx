import { useState } from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  const events = [
    "유진이의 클럼지 벗 해피 라이프",
    "지민이의 당 줄이기 도전",
    "경민이의 헬창일까 아닐까",
    "지혜의 코딩 왜 시작했지",
    "수경이의 실전 미국영어",
    "감자의 하루 십만 자를 써봐요",
    "채원이의 미스테리 서클",
    "정희의 사이버 조각 깎기",
    "소영이의 트릴링구얼로 가는 길",
    "동규의 오늘의 전화",
    "호진이의 오늘은 뭘 그릴까?",
    "현영이의 신입 일기",
    "Cras convallis nibh eget dui placerat, eget auctor neque sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et curae; Integer in ante facilisis, posuere magna nec, dictum nibh.",
  ];
  const imagePaths = [
    "/images/photo_sample_1.jpeg",
    "/images/photo_sample_2.jpeg",
    "/images/photo_sample_3.jpeg",
  ];

  const sortingOptions = [
    "Gathering Date ⬇️",
    "Gathering Date ⬆️",
    "Written Date ⬇️",
    "Written Date ⬆️",
  ];

  const [seletedSorting, setSelectedSorting] =
    useState<string>("Gathering Date ⬇️");
  const [isSortingOpen, setIsSortingOpen] = useState<boolean>(false);

  const handleSortingOpen = () => {
    setIsSortingOpen(!isSortingOpen);
  };
  const handleSortingSelect = (value: string) => {
    setSelectedSorting(value);
    setIsSortingOpen(false);
  };

  return (
    <div className="text-center flex-grow flex flex-col items-center">
      <span className="top-14 w-full py-8 bg-white">
        {/* <h2 className="text-3xl font-bold">Events</h2>
        <p className="text-gray-600">이벤트 리스트</p> */}
      </span>
      {/* <div className="flex flex-col flex-grow gap-3 w-full"> */}
      <div className="flex justify-between w-4/5 mb-4">
        <div className="relative w-[11rem] h-[3rem]">
          <p
            className="text-blue-300 font-md w-[11rem] h-[3rem] flex items-center py-2 px-2 rounded-md border-2 border-blue-300 bg-white cursor-pointer justify-center"
            onClick={() => handleSortingOpen()}
          >
            {seletedSorting}
          </p>

          {isSortingOpen && (
            <div className="flex flex-col items-center justify-center absolute top-full left-0 w-[11rem] mt-0 bg-white shadow-md rounded-md border-2 border-blue-300 overflow-hidden">
              {sortingOptions.map((option) => (
                <p
                  className="font-md flex items-center justify-center w-[11rem] py-2 px-2 cursor-pointer hover:bg-blue-300"
                  onClick={() => handleSortingSelect(option)}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="h-[3rem] flex items-center rounded-md border-2 border-blue-300">
          <span className="font-md text-blue-300 border-r-2 border-blue-300 w-[10rem] h-full px-4 py-2 flex items-center justify-center">
            category
            <img />
          </span>
          <input className="py-2 px-4 w-[20rem] outline-none" />
        </div>
        <button className="font-semibold flex text-md items-center h-12 py-2 px-8 rounded-md border-2 text-white border-blue-300 bg-blue-300">
          search
        </button>
      </div>
      <div className="grid grid-cols-1 flex-grow gap-4 w-4/5">
        {events.map((event, index) => (
          <Link key={index} to={`/eventdetail/${index}`}>
            <div
              key={index}
              className="grid grid-cols-3 gap-8 text-start items-center py-3 px-6 rounded-md bg-white text-gray-900 min-h-20 border-2 border-blue-100"
            >
              <div className="col-span-2 flex flex-col gap-0">
                <span className="text-xs mb-1">2024 / 2 / 14</span>
                <span className="">
                  <strong>{event}</strong>
                </span>
                <span className="leading-tight text-gray-300 text-sm">
                  Cras convallis nibh eget dui placerat, eget auctor neque
                  sagittis. eget auctor neque sagittis quis sollicitudin sapien.
                  Cra neque sagittis...
                </span>
                <div className="flex gap-2 mt-2 items-center">
                  <span className="text-xs font-semibold bg-blue-100 rounded-xl inline-block py-1 px-2">
                    유진
                  </span>
                  <span className="text-xs font-semibold bg-blue-100 rounded-xl inline-block py-1 px-2">
                    수경
                  </span>
                  <span className="text-xs font-semibold bg-blue-100 rounded-xl inline-block py-1 px-2">
                    지혜
                  </span>
                  <p className="text-xs text-blue-400 font-medium ml-2">
                    Written by {event.slice(0, 2)}
                  </p>
                </div>
              </div>

              <span
                key={index}
                className="col-span-1 flex items-center justify-center rounded-md overflow-hidden min-h-[130px] max-h-[130px]"
              >
                <img src={imagePaths[0]} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventList;
