import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  type Event = {
    id: number;
    title: string;
    content: string;
    date: string;
    eventImageList: string[];
    user: User;
  };
  type User = {
    id: number;
    username: string;
    profileImageUrl: string;
  };

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleSearchClick();
  }, []);

  const handleSearchClick = () => {
    axios
      .get("http://localhost:5232/api/events", {
        params: {
          searchType: "Title",
          searchText: searchInput,
          orderBy: "WrittenDateDesc",
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sortingOptions = [
    "Gathering Date ⬇️",
    "Gathering Date ⬆️",
    "Written Date ⬇️",
    "Written Date ⬆️",
  ];

  const [seletedSorting, setSelectedSorting] =
    useState<string>("Gathering Date ⬇️");
  const [isSortingOpen, setIsSortingOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSortingOpen = () => {
    setIsSortingOpen(!isSortingOpen);
  };
  const handleSortingSelect = (value: string) => {
    setSelectedSorting(value);
    setIsSortingOpen(false);
  };

  return (
    <div className="text-center flex-grow flex flex-col items-center overflow-hidden h-[45rem]">
      {/* <span className="top-14 w-full py-8 bg-white">
        <h2 className="text-3xl font-bold">Events</h2>
        <p className="text-gray-600">이벤트 리스트</p>
        </span> */}
      {/* <div className="flex flex-col flex-grow gap-3 w-full"> */}
      <div className="flex justify-between w-4/5 mb-4 mt-6">
        <div className="w-[10rem] h-[3rem] relative">
          <p
            className="font-semibold text-blue-300 text-sm w-[10rem] h-[3rem] flex items-center py-2 px-2 rounded-md border-2 border-blue-300 bg-white cursor-pointer justify-center"
            onClick={() => handleSortingOpen()}
          >
            {seletedSorting}
          </p>

          {isSortingOpen && (
            <div className="flex flex-col items-center justify-center mt-1 font-semibold text-sm absolute top-full left-0 w-[10rem] mt-0 bg-white shadow-md rounded-md border-2 border-blue-300">
              {sortingOptions.map((option) => (
                <p
                  className="text-sm flex items-center justify-center w-[10rem] py-2 px-2 cursor-pointer hover:bg-blue-300 text-gray-500"
                  onClick={() => handleSortingSelect(option)}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="h-[3rem] flex items-center rounded-md border-2 border-blue-300">
          <span className="text-sm font-semibold text-blue-300 border-r-2 border-blue-300 w-[6rem] h-full px-4 py-2 flex items-center justify-center">
            title
            <img />
          </span>
          <input
            className="py-2 px-4 w-[26rem] outline-none"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          />
        </div>
        <button
          className="font-semibold flex text-md items-center h-12 py-2 px-6 rounded-md text-white bg-blue-300"
          onClick={handleSearchClick}
        >
          search
        </button>
      </div>

      {loading ? (
        <p className="h-full flex justify-center items-center">loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 w-4/5 overflow-auto">
          {events.map((event, index) => (
            <Link key={index} to={`/eventdetail/${event.id}`}>
              <div
                key={index}
                className="grid grid-cols-3 gap-8 text-start items-center py-3 px-6 rounded-md bg-white text-gray-900 min-h-20 border-2 border-blue-100"
              >
                <div className="col-span-2 flex flex-col gap-0">
                  <span className="text-xs mb-1">2024 / 2 / 14</span>
                  <span className="">
                    <strong>{event.title}</strong>
                  </span>
                  <span className="leading-tight text-gray-300 text-sm h-[3rem]">
                    {event.content.slice(0, 100)}
                  </span>
                  <div className="flex gap-0 mt-2 items-center">
                    <span className="text-xs font-semibold bg-blue-100 rounded-xl inline-block py-1 px-2 mr-1">
                      유진
                    </span>
                    <span className="text-xs font-semibold bg-blue-100 rounded-xl inline-block py-1 px-2 mr-1">
                      수경
                    </span>
                    <span className="text-xs font-semibold bg-blue-100 rounded-xl inline-block py-1 px-2 mr-1">
                      지혜
                    </span>
                    <p className="text-xs text-gray-400 font-medium ml-4 mr-1">
                      by
                    </p>
                    <img
                      className="w-[1.6rem] h-[1.6rem] object-cover overflow-hidden rounded-[100px]"
                      src={event.user.profileImageUrl}
                    />
                  </div>
                </div>

                <span
                  key={index}
                  className="col-span-1 flex items-center justify-center rounded-md overflow-hidden min-h-[130px] max-h-[130px]"
                >
                  {event.eventImageList[0] ? (
                    <img src={event.eventImageList[0]} />
                  ) : (
                    <p className="text-blue-300">No Image</p>
                  )}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
