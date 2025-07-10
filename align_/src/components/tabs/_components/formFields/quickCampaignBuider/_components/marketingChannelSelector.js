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

export function MarketingChannelSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedMarketingChannel = searchParams.get("marketing_channel") || "";

  const handleMarketingChannelChange = (marketing_channel) => {
    const sp = new URLSearchParams(searchParams);

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
      <div className="relative flex gap-2">
        <Select
          id="marketingChannel"
          name="marketingChannel"
          value={selectedMarketingChannel}
          onValueChange={handleMarketingChannelChange}
        >
          <SelectTrigger className="w-full text-xs md:text-sm">
            <SelectValue placeholder="Select a marketing channel" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Marketing Channel</SelectLabel>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="in_app_message">In app message</SelectItem>
              <SelectItem value="push_notification">
                Push notification
              </SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="web_push_notification">
                Web push notification
              </SelectItem>
              <SelectItem value="whats_app">Whats app</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
