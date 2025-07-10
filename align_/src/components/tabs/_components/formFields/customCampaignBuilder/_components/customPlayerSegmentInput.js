"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CustomPlayerSegmentInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedPlayerSegment = searchParams.get("player_segment") || "";

  const handlePlayerSegmentInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const player_segment = event.target.value;

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
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="playerSegment"
        name="playerSegment"
        value={addedPlayerSegment}
        onChange={handlePlayerSegmentInput}
        placeholder="e.g., reactivation, retention etc."
      />
    </div>
  );
}
