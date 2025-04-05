import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ParticipantMultiSelect } from "@/components/MultiSelect";
import { DateRangePicker } from "@/components/DatePicker";
import { Textarea } from "@/components/ui/textarea";

const EventUpload = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 w-[900px]">
      {/* 상단 제목 */}
      <div className="w-full py-8 text-center">
        <h2 className="text-3xl font-bold">New Event</h2>
      </div>

      <div className="flex w-full justify-start gap-4">
        <Select>
          <SelectTrigger className="w-[14rem] h-[2.8rem]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <DateRangePicker />
      </div>

      <div className="flex w-full gap-4 justify-between my-3">
        <ParticipantMultiSelect />

        <Button className="w-[8rem] h-[2.8rem] bg-blue-500 text-md">
          Publish
        </Button>
      </div>

      <Textarea
        placeholder="Type anything."
        className="w-full min-h-[32rem] text-md text-gray-900 resize-none p-4"
      />
    </div>
  );
};

export default EventUpload;
