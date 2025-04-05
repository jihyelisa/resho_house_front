import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const allParticipants = [
  { label: "Alice", value: "alice" },
  { label: "Bob", value: "bob" },
  { label: "Charlie", value: "charlie" },
  { label: "Diana", value: "diana" },
];

export function ParticipantMultiSelect() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof allParticipants>([]);

  const handleSelect = (person: (typeof allParticipants)[0]) => {
    if (!selected.find((s) => s.value === person.value)) {
      setSelected([...selected, person]);
    }
  };

  const handleRemove = (value: string) => {
    setSelected(selected.filter((s) => s.value !== value));
  };

  return (
    <div className="w-[full] max-w-md min-w-[40rem]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full flex flex-wrap justify-start min-h-[2.8rem] gap-1 overflow-auto"
          >
            {selected.length === 0 && (
              <span className="text-gray-500 text-md">Participants</span>
            )}

            {selected.map((person) => (
              <span
                key={person.value}
                className="flex items-center justify-center bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
              >
                {person.label}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(person.value);
                  }}
                  className="ml-1 hover:text-red-500"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Enter name..." />
            <CommandEmpty>No Result</CommandEmpty>
            <CommandGroup>
              {allParticipants.map((person) => (
                <CommandItem
                  key={person.value}
                  onSelect={() => handleSelect(person)}
                >
                  {person.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
