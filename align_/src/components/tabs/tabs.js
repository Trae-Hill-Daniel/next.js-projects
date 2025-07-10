import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import QuickCampaignBuilder from "./_components/formFields/quickCampaignBuider/quickCampaignBuilder";
import CustomCampaignBuilder from "./_components/formFields/customCampaignBuilder/customCampaignBuilder";
import UTMURLBuilder from "./_components/formFields/utmBuilder/utmBuilder";

export default function Tab({ selectedTab }) {
  return (
    <div className="grid gap-8 lg:w-1/2">
      <Tabs defaultValue={selectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="quick_campaign_builder" asChild>
            <Link
              href={{ query: { tab: "quick_campaign_builder" } }}
              scroll={false}
              className="text-xs md:text-sm break-words"
            >
              Quick Builder
            </Link>
          </TabsTrigger>
          <TabsTrigger value="custom_campaign_builder" asChild>
            <Link
              href={{ query: { tab: "custom_campaign_builder" } }}
              scroll={false}
              className="text-xs md:text-sm break-words"
            >
              Custom Builder
            </Link>
          </TabsTrigger>
          <TabsTrigger value="utm_builder" asChild>
            <Link
              href={{ query: { tab: "utm_builder" } }}
              scroll={false}
              className="text-xs md:text-sm break-words"
            >
              UTM Builder
            </Link>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quick_campaign_builder">
          <div className="mt-5 flex flex-col gap-5">
            <QuickCampaignBuilder />
            {/* This is where the Quick Campaign Builder component will be rendered */}
          </div>
        </TabsContent>

        <TabsContent value="custom_campaign_builder">
          <div className="mt-5 flex flex-col gap-5">
            <CustomCampaignBuilder />
            {/* This is where the Custom Campaign Builder component will be rendered */}
          </div>
        </TabsContent>

        <TabsContent value="utm_builder">
          <div className="mt-5 flex flex-col gap-5">
            <UTMURLBuilder />
            {/* This is where the URL Builder component will be rendered */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
