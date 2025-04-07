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
          <TooltipContent className="w-[16rem] h-[10rem] bg-white shadow-md p-6">
            <div className="flex items-center justify-center gap-10">
              <img
                className="w-[4.2rem] h-[4.2rem] object-cover overflow-hidden rounded-[100px]"
                src={user.profileImageUrl}
              />
              <div>
                <span className="text-gray-900 text-md">{user.username}</span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ProfilePopover;
