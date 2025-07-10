import { CampaignDatePicker } from "../_components/campaignDatePicker";
import { CampaignNameInput } from "../_components/campaignNameInput";
import { CampaignNamePreview } from "../_components/campaignNamePreview";
import { CampaignTicketNumberInput } from "../_components/campaignTicketNumber";
import { CampaignUTMBaseURLInput } from "../_components/campaignUTMBaseURLInput";
import { CampaignUTMToggleSwitch } from "../_components/campaignUTMToggleSwitch";
import { ResetButton } from "../_components/resetButton";
import { CampaignTypeSelector } from "./_components/campaignTypeSelector";
import { MarketingMultiChannelSelector } from "./_components/marketingMultipleChannelSelector";
import { PlayerSegmentSelector } from "./_components/playerSegmentSelector";
import { ProductCategorySelector } from "./_components/productCategorySelector";

export default function QuickCampaignBuilder() {
  return (
    <div className="grid gap-8 w-full">
      <CampaignTicketNumberInput />
      <CampaignDatePicker />
      <ProductCategorySelector />
      <CampaignTypeSelector />
      <PlayerSegmentSelector />
      <MarketingMultiChannelSelector />
      <CampaignNameInput />
      <CampaignUTMToggleSwitch />
      <CampaignUTMBaseURLInput />
      <ResetButton />
      <CampaignNamePreview />
    </div>
  );
}
