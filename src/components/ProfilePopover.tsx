import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type User = {
  id: number;
  username: string;
  profileImageUrl: string;
};
interface ProfilePopoverProps {
  user: User;
}

const ProfilePopover = ({ user }: ProfilePopoverProps) => {
  return (
    <div className="w-[1.6rem] h-[1.6rem] object-cover overflow-hidden rounded-[100px]">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <img src={user.profileImageUrl} />
          </TooltipTrigger>
          <TooltipContent className="w-[10rem] h-[12rem] bg-white shadow-md p-4">
            <div className="flex flex-col items-center justify-start gap-1 w-full h-full">
              <img
                className="w-[4.2rem] h-[4.2rem] object-cover overflow-hidden rounded-[100px]"
                src={user.profileImageUrl}
              />
              <span className="text-gray-900 text-base font-bold text-semibold pb-1">
                {user.username}
              </span>

              <span className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-500 text-[1rem] size-4"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <p className="text-gray-900 text-xs">오늘의 무드</p>
              </span>

              <span className="flex gap-1 items-start justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-500 text-[1rem] size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-900 text-xs">요즘 최애 음악</p>
              </span>

              <span className="flex gap-1 items-start justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-500 text-[1rem] size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-900 text-xs">최근 접속</p>
              </span>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ProfilePopover;
