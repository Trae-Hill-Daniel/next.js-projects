"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CustomMarketingChannelInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedMarketingChannel = searchParams.get("marketing_channel") || "";

  const handleMarketingChannelInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const marketing_channel = event.target.value;

    if (marketing_channel.trim() === "") {
      sp.delete("marketing_channel");
    } else {
      sp.set("marketing_channel", marketing_channel);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="marketingChannel" className="px-1 text-xs md:text-sm">
        Marketing Channel
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="marketingChannel"
        name="marketingChannel"
        value={addedMarketingChannel}
        onChange={handleMarketingChannelInput}
        placeholder="e.g., email, sms etc."
      />
    </div>
  );
}
