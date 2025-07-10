"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function UTMMediumInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedUTMMedium = searchParams.get("utm_medium") || "";

  const handleUTMMediumInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const utm_medium = event.target.value;

    if (utm_medium.trim() === "") {
      sp.delete("utm_medium");
    } else {
      sp.set("utm_medium", utm_medium);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="utmMedium" className="px-1 text-xs md:text-sm">
        UTM Medium
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="utmMedium"
        name="utmMedium"
        value={addedUTMMedium}
        onChange={handleUTMMediumInput}
        placeholder="e.g., email, sms, etc."
      />
    </div>
  );
}
