"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CampaignTicketNumberInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const addedTicketNumber = searchParams.get("ticket_number") || "";

  const handleTicketNumberInput = (event) => {
    const sp = new URLSearchParams(searchParams);
    const ticket_number = event.target.value;

    if (ticket_number.trim() === "") {
      sp.delete("ticket_number");
    } else {
      sp.set("ticket_number", ticket_number);
    }

    router.push(`${pathname}?${sp.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="ticketNumber" className="px-1 text-xs md:text-sm">
        Ticket Number
      </Label>
      <Input
        className="w-full text-xs md:text-sm"
        type="text"
        id="ticketNumber"
        name="ticketNumber"
        value={addedTicketNumber}
        onChange={handleTicketNumberInput}
        placeholder="e.g., CRM-1516"
      />
    </div>
  );
}
