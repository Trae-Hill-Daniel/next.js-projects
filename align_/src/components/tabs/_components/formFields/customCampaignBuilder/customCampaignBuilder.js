import { CampaignDatePicker } from "../_components/campaignDatePicker";
import { CampaignNameInput } from "../_components/campaignNameInput";
import { CampaignTicketNumberInput } from "../_components/campaignTicketNumber";
import { CampaignUTMBaseURLInput } from "../_components/campaignUTMBaseURLInput";
import { CampaignUTMToggleSwitch } from "../_components/campaignUTMToggleSwitch";
import { ResetButton } from "../_components/resetButton";
import { CustomCampaignNamePreview } from "./_components/customCampaignNamePreview";
import { CustomUTMCampaignTermInput } from "./_components/customCampaignTermInput";
import { CustomCampaignTypeInput } from "./_components/customCampaignTypeInput";
import { CustomMarketingChannelInput } from "./_components/customMarketingChannelInput";
import { CustomPlayerSegmentInput } from "./_components/customPlayerSegmentInput";
import { CustomProductCategoryInput } from "./_components/customProductCategoryInput";
import { CustomUTMCampaignContentInput } from "./_components/customUTMContentInput";
import { CustomUTMMediumSelector } from "./_components/customUTMMediumSelector";
import { CustomUTMSourceSelector } from "./_components/customUTMSourceSelector";

export default function CustomCampaignBuilder() {
  return (
    <div className="grid gap-8 w-full">
      <CampaignTicketNumberInput />
      <CampaignDatePicker />
      <CustomProductCategoryInput />
      <CustomCampaignTypeInput />
      <CustomPlayerSegmentInput />
      <CustomMarketingChannelInput />
      <CampaignNameInput />
      <CampaignUTMToggleSwitch />
      <CampaignUTMBaseURLInput />
      <CustomUTMSourceSelector />
      <CustomUTMMediumSelector />
      <CustomUTMCampaignTermInput />
      <CustomUTMCampaignContentInput />
      <ResetButton />
      <CustomCampaignNamePreview />
    </div>
  );
}
