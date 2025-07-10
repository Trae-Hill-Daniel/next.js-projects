# Align_ | Campaign Name & UTM Generator

A smart, multi-functional tool designed for CRM and marketing teams to standardize campaign names and generate corresponding UTM links instantly. Bring order to your campaigns with the right builder for the job.

---

## Key Features

-   **Three Builder Modes:** Choose the right tool for your task with our **Quick Builder**, **Custom Builder**, and **URL Builder** tabs.
-   **Standardized Naming:** Generates consistent, report-friendly campaign names based on a predefined structure.
-   **Automatic UTM Generation:** Instantly creates a full UTM tracking link (`utm_source`, `utm_medium`, `utm_campaign`, etc.) that perfectly matches the generated campaign name.
-   **Bulk Link Creation:** The Quick Builder can generate unique UTM links for multiple marketing channels simultaneously.
-   **Copy-to-Clipboard:** Quickly copy generated names and links for use in your CRM or ad platforms. 
-   **Simple Interface:** Clean, intuitive, and easy-to-use for any member of the marketing team.
-   **Reduces Errors:** Eliminates typos and inconsistencies in campaign tracking, leading to cleaner data.
-   **Improves Reporting:** Makes filtering, analyzing, and reporting on campaign performance in your CRM and analytics tools effortless.

## The Problem We Solve

In any active marketing team, campaign names can quickly become inconsistent. Names like `SummerSale_2025`, `summersale`, or `London-Summer-Promo` all refer to the same campaign but are a nightmare for reporting. This leads to fragmented data, inaccurate analysis, and wasted time trying to manually group campaigns together.

**Align_** was built to solve this exact problem. By providing a single source of truth for campaign naming and UTM link creation, it ensures every campaign is logged perfectly from the start.

## The Core Builders

Align_ offers three distinct tabs, each tailored for a specific workflow.

### 1. Quick Builder: For Speed and Automation

This is your go-to for most standard campaigns. It's designed to be fast and efficient, automating as much as possible.

**How to use:**
* Enter your campaign details in the form. A preview of the standardized campaign name will be displayed automatically.
* Copy the generated name for use in your CRM and other platforms.
* To generate UTM links, toggle the **"Generate UTM Link?"** switch.
* **Note:** A unique UTM link will be generated for **each** marketing channel you have selected, which is perfect for launching a multi-channel campaign all at once.

### 2. Custom Builder: For Granular Control

Use this builder when you need to override the automated UTM settings or have a unique source/medium combination that doesn't fit the standard options.

**How to use:**
* Enter your campaign details to generate the standardized campaign name, just like in the Quick Builder.
* Toggle the **"Generate UTM Link?"** switch.
* Manually enter the specific `UTM Medium` and `UTM Source` in the new form fields that appear.
* A preview of the custom UTM link will be displayed for you to copy.

### 3. URL Builder: For Simple UTM Tagging

Use this builder when you *only* need to create a UTM link and don't need a standardized campaign name. It's perfect for one-off links or ad-hoc tracking.

**How to use:**
* Enter your destination URL and all the required UTM parameters (`utm_source`, `utm_medium`, etc.) directly into the form.
* A preview of the final tracking link is displayed automatically.
* Copy the generated UTM link.

## The Naming Convention

The following structure is used by the **Quick Builder** and **Custom Builder** to generate standardized campaign names.

**Structure:**
`[ticketNumber]_[campaignDate]_[productCategory]_[campaignType]_[playerSegment]_[marketingChannels]_[campaignName]`

**Component Breakdown:**

* **`ticketNumber`**: The unique ID from your project management tool (e.g., `JIRA-123`, `ASANA-456`, `CRM-1516` ).
* **`campaignDate`**: The launch date in `YYYYMMDD` format (e.g., `2025_07_10`).
* **`productCategory`**: The primary product being promoted (e.g., `Slots`, `Bingo`, `Sportsbook`).
* **`campaignType`**: The strategic goal of the campaign (e.g., `Acquisition`, `Retention`, `CrossSell`).
* **`playerSegment`**: The target audience for the campaign (e.g., `VIP`, `NewPlayers`, `Lapsed`).
* **`marketingChannels`**: The channel used for distribution (e.g., `Email`, `Social`, `PPC`).
* **`campaignName`**: The specific, human-readable name of the initiative (e.g., `SummerSpins`, `WelcomeBonus`).

**Example Generated Name:**
`CRM_1516_2025_07_10_Slots_Retention_VIP_Email_SummerSpins`

## UTM Generation

The UTM link is automatically generated based on the campaign details, ensuring a perfect 1:1 match between the link and the name in your CRM. The tool intelligently maps your inputs to the appropriate UTM parameters.

* **`utm_campaign`**: The **full, generated campaign name** is used here for precise tracking.
    * e.g., `CRM-1516_20250710_Slots_Retention_VIP_Email_SummerSpins`
* **`utm_source`**: The platform for the channel (a separate input, e.g., `google`, `facebook`, `mailchimp`).
* **`utm_medium`**: Maps directly from the **`marketingChannels`** field.
    * e.g., `email`, `social`, `cpc`.
* **`utm_content`**: Can be used to track audience performance (optional input).
    * e.g., `VIP`, `NewPlayers`.
* **`utm_term`**: Can be used for specific keywords in PPC campaigns (optional input).

**Example Generated Name:**
`https://yourdomain.com?utm_source=email&utm_medium=crm&utm_campaign=CRM_1516_2025_07_10_Slots_Retention_VIP_Email_SummerSpins`

## Getting Started

To get a local copy up and running, follow these simple steps:

1.  Clone the repo:
    ```sh
    git clone
    ```
2.  Install dependencies:
    ```sh
    npm install
    ```
3.  Run the app:
    ```sh
    npm run dev
    ```

## Fun Fact

The name Align_ reflects exactly what the tool does:
It brings alignment to your naming conventions, ending with the iconic underscore — just like your campaign names.

---
