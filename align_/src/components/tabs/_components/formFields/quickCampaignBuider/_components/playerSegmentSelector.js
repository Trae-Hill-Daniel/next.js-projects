"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { playerSegments } from "../_elements/options";

export function PlayerSegmentSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedPlayerSegment = searchParams.get("player_segment") || "";

  const handlePlayerSegmentChange = (player_segment) => {
    const sp = new URLSearchParams(searchParams);

    if (player_segment.trim() === "") {
      sp.delete("player_segment");
    } else {
      sp.set("player_segment", player_segment);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="playerSegment" className="px-1 text-xs md:text-sm">
        Player Segment / Lifecycle
      </Label>

      <Select
        name="playerSegment"
        value={selectedPlayerSegment}
        onValueChange={handlePlayerSegmentChange}
      >
        <SelectTrigger id="playerSegment" className="w-full text-xs md:text-sm">
          <SelectValue placeholder="Select a player segment / lifecycle" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Player Segment</SelectLabel>

            {playerSegments.map((segment) => (
              <SelectItem key={segment.key} value={segment.value}>
                {segment.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
