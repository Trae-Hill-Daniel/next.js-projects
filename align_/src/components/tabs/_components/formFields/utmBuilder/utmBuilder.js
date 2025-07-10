import { CampaignNameInput } from "../_components/campaignNameInput";
import { ResetButton } from "../_components/resetButton";
import { UTMBaseURLInput } from "./_components/utmBaseURLInput";
import { UTMCampaignContentInput } from "./_components/utmCampaignContentInput";
import { UTMCampaignIDInput } from "./_components/utmCampaignIDInput";
import { UTMCampaignTermInput } from "./_components/utmCampaignTermInput";
import { UTMLinkPreview } from "./_components/utmLinkPreview";
import { UTMMediumInput } from "./_components/utmMediumInput";
import { UTMSourceInput } from "./_components/utmSourceInput";

export default function UTMURLBuilder() {
  return (
    <div className="grid gap-8 w-full">
      <UTMBaseURLInput />
      <UTMCampaignIDInput />
      <UTMSourceInput />
      <UTMMediumInput />
      <CampaignNameInput />
      <UTMCampaignTermInput />
      <UTMCampaignContentInput />
      <ResetButton />
      <UTMLinkPreview />
    </div>
  );
}
