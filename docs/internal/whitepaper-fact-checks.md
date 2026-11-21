# White paper fact-check notes (internal, not published)

Claims from source research PDFs that were corrected or left out of the published white papers.


## ai-agents-retail-operations-pricing-inventory-india-2026.ts

```ts
    { kind: "h2", text: "10. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"Over 40% of tier-1 retailers have deployed agentic systems\" (McKinsey, Gartner, Salesforce):** not found. McKinsey's 2025 figures are 62% experimenting and 23% scaling somewhere across all industries; the 40% figure Gartner publishes is the share of agentic projects it expects to be cancelled by 2027.",
        "**\"OpEx reduced by 22–34%\", \"inventory turns up 2.8x\", \"AOV up 18–26%\", \"22% of returns prevented\", \"returns cost 15–30% of gross margin\":** no primary source found. Not used.",
        "**\"Amazon's A10+ algorithm strips the Buy Box if a lower price is found on Flipkart, Zepto or Blinkit\":** \"A10+\" is not an Amazon term. Amazon's Fair Pricing Policy does compare prices on and off Amazon and can remove the Featured Offer, but Amazon has not published which sites it checks.",
        "**Fixed KPI targets** (Buy Box win rate above 92%, out-of-stock below 3%, conversion above 14%, first-contact resolution above 88%) and the **40/35/25 stock split** and **52% margin floor:** illustrative or unsourced. Targets should come from each brand's own data.",
        "**\"Sub-second\" price changes and real-time price testing:** frequent price changes risk Fair Pricing issues and competition concerns; we recommend capped, logged changes.",
        "**\"Instant refund and keep the product under ₹300\":** possible on a brand's own website, but marketplace returns follow platform policy.",
        "**\"OpenAI & Microsoft documentation on LangGraph and AutoGen\":** LangGraph is developed by LangChain and AutoGen by Microsoft.",
      ],
    },
```


## amazon-search-ranking-tacos-governance-india-2026.ts

```ts
    { kind: "h2", text: "8. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"A10+ algorithm\" and its ranking weights** (organic 40%, PPC 15%, sentiment 20%, returns −25%, external traffic 15%, conversion 10%): Amazon has not published any such weights or announced an \"A10+\" update. Not used.",
        "**\"Organic sales carry 2.4x the ranking equity of paid clicks\"** and **\"unit session percentage must exceed 12%\"**: no Amazon source. Not used.",
        "**\"Amazon Ads $56 billion+\"**: we found no Amazon disclosure of that run rate. Amazon reported $19.64 billion of advertising revenue in Q3 2026.",
        "**\"Over 35% of Amazon mobile searches are conversational\"**: no Amazon source found. Amazon's disclosed figures are 300 million+ Rufus users in 2025 and 400 million+ Alexa for Shopping users in the 12 months to Q3 2026.",
        "**Rufus:** in India it is being replaced by Alexa for Shopping, from 12 November 2026.",
        "**Backend search terms \"249 bytes\"**: that is the US figure. Amazon.in's limit is 200 bytes.",
        "**Brand Referral Bonus \"10% rebate\" for Indian sellers**: the average-10% figure comes from Amazon's US programme; we found no Amazon.in announcement.",
        "**TACoS bands (10–14% healthy, 20–35% launch, 18–28% danger) and \"video CTR 3.4x static\"**: no primary source found. This paper uses a margin-based ceiling instead.",
        "**\"Answer Q&A within 4 hours\"**: Amazon has set no such rule; we recommend accurate answers without a fixed time claim.",
      ],
    },
```


## cac-squeeze-marketing-efficiency-ratio-india.ts

```ts
    { kind: "h2", text: "9. Claims we checked and left out" },
    {
      kind: "p",
      text: "Several statistics circulate widely in reports on this topic. We traced them and did not use them, for these reasons:",
    },
    {
      kind: "ul",
      items: [
        "\"CAC rose 40% to 60% in 2026\": the 60% figure is a 2022 five-year industry estimate (SimplicityDX), not a 2026 measurement.",
        "\"Commerce media overtook TV in 2025\": WARC's forecast is that retail media overtakes combined linear and connected TV in 2026.",
        "\"21% of merchants report margin erosion\": in the E-commerce Monitor 2026 the 21% refers to Dutch webshops with declining revenue.",
        "Marketplace vs D2C CAC ranges (\"$25–45 vs $68–84\") and SMS cart-recovery conversion rates (\"24.6%–39.4%\"): we could not find a primary source.",
        "A \"15% referral fee\" on marketplaces: that is a US-style example. Amazon India's referral fees vary by category and price band, and products under ₹1,000 in more than 1,800 categories have carried zero referral fees since 16 March 2026.",
      ],
    },
```


## cross-border-d2c-exports-compliance-landed-cost-india-2026.ts

```ts
    { kind: "h2", text: "8. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"DGFT framework lets brands forward-deploy inventory into foreign bonded warehouses\":** the August 2026 framework is for foreign-funded e-commerce entities acting as Exporters-on-Record, with brands as Sellers-on-Record. Brands shipping their own stock abroad is ordinary exporting and was already possible.",
        "**\"$20 billion by late 2026\" and \"$80 billion DGFT target\":** the $20 billion milestone covers 2015–2025 and was announced in October 2025; $80 billion by 2030 is Amazon's target. The government's stated goal is $200–300 billion in e-commerce exports by 2030.",
        "**US import duty at 4% of retail price:** duty is charged on customs value, and a 10% Section 301 tariff currently applies on top of normal duty for most Indian goods. The US de minimis exemption has ended.",
        "**IOSS \"eliminates customs fees\":** since 1 July 2026 a €3 per-item customs duty applies to low-value EU consignments.",
        "**\"68–78% international gross margin\", \"Amazon US AOV $45–85\", \"over 40% of mobile users use Rufus\":** no primary source found; not stated.",
        "**GCC \"Montaji\" registration and Jebel Ali specifics:** not verified; we advise confirming with the destination authority.",
        "**Reference list:** a 2025–26 \"Amazon Global Selling India Annual Report\" and several consultancy guides could not be located; replaced with primary sources below.",
      ],
    },
```


## ecommerce-growth-partner-operating-model-2027.ts

```ts
    { kind: "h2", text: "6. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"Search query volume declines by 25–45% (Gartner)\":** Gartner's February 2024 prediction was a 25% fall in traditional search engine volume by 2026; we found no Gartner figure of 45%.",
        "**Agency benchmarks (\"revenue per employee ₹1.2–2.5 crore\", \"15–25 accounts per executive\", \"30 people replace a 250-person shop\"):** no primary source found; removed.",
        "**\"Privacy restrictions have dismantled client-side tracking\":** Chrome kept third-party cookies; the measurement gap comes mainly from zero-click discovery and off-site sales (see Part 6).",
        "**\"Blended TACoS strictly 10–14%\" and \"fill rates above 95%\" as universal targets:** these depend on category and margin; not stated as benchmarks.",
        "**\"Agency earns 5–12% of incremental profit\":** a proposal, not an industry norm; presented as an illustrative model.",
        "**Presenc AI \"$1.1 trillion\" forecast, Gartner \"Agency 2027\", McKinsey and other cited reports:** could not be located; replaced with primary sources.",
        "**Results claims for Pexeta's own framework:** not included; this paper describes approaches, not outcomes.",
      ],
    },
```


## personalised-merchandising-bundles-zero-party-data-india-2026.ts

```ts
    { kind: "h2", text: "8. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"Conversion up 28–44%\", \"AOV up 22–35%\", \"bounce rates over 65%\", benchmark table from \"40+ D2C brands\":** no primary source found, so not stated. The sourced range is McKinsey's 10–15% typical revenue lift (5–25% by company).",
        "**\"LCP under 1.2 seconds\":** Google's \"good\" threshold is 2.5 seconds or less at the 75th percentile; faster is better, but 1.2 s is not a standard.",
        "**\"Llama-3.3-8B\":** no such Meta model exists, so model names are left out; choose models on tested quality, cost and speed.",
        "**\"Sub-150 ms page assembly\", \"180 ms fallback\":** not verifiable; replaced with a pre-render and cache approach.",
        "**\"Photoshoots cost ₹5–20 lakh\":** no source found; removed.",
        "**Bundle example:** ₹399 + ₹899 at 15% off is ₹1,103.30, not ₹1,163.15, and the blended gross margin is about 59.7%, not 62%.",
        "**References to HBR (March 2026), Gartner, McKinsey \"Living Storefronts\", a Klaviyo 10,000-brand study and a Dynamic Yield index:** could not be located; replaced with the sources below.",
      ],
    },
```


## quick-commerce-unit-economics-margin-defense-india-2026.ts

```ts
    { kind: "h2", text: "8. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**Blinkit store count:** 2,443 was the June 2026 figure; Eternal reported 2,751 at September 2026, with a target of more than 3,500 by March 2027 (not 3,000).",
        "**Blinkit \"net profit\":** the net profit figures are Eternal's consolidated results. Blinkit reports adjusted EBITDA (₹184 crore in Q2 FY27).",
        "**Instamart:** contribution breakeven in May 2026 is confirmed, but contribution was −1.0% of GOV in Q2 FY27 as Swiggy stepped up investment. The network is 1,240 stores in 133 cities.",
        "**Market size:** we found no source for \"$14 billion\", \"17% of online retail GMV\" as stated, or \"$45 billion by 2030\". Published estimates are about $13 billion in FY26 (Redseer and Google) and 16–17% of e-retail GMV in 2025 (Bain and Flipkart).",
        "**Platform commission bands (18–28%), category mix (32%), Flipkart Minutes store counts and freight savings (35–45%):** we couldn't trace these to primary sources, so they aren't used. The waterfall in section 3 is labelled illustrative.",
        "**MRP waterfalls without GST:** any waterfall starting from MRP must remove GST before platform deductions.",
      ],
    },
```


## zero-click-attribution-mmm-incrementality-india-2026.ts

```ts
    { kind: "h2", text: "9. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"Over 60% of search journeys resolve inside AI conversational surfaces\":** not found. The verified figure is Similarweb's: 69% of Google searches ended without a click in May 2025, up from 56% in May 2024.",
        "**\"Third-party cookies deprecated\" and \"browser signal destruction\":** Chrome has kept third-party cookies; Google abandoned the deprecation plan in 2024–25.",
        "**\"Consent Mode v2\" as a universal regulation:** it is Google's mechanism for EEA and UK consent requirements, enforced from March 2024.",
        "**DPDP:** the Act's main notice and consent obligations for businesses apply from 13 May 2027, not now.",
        "**\"Cookie tracking coverage reduced by 40–70%\", \"8.0x branded ROAS\", \"TACoS from 12% to over 28%\", \"0.10 incrementality factor\", \"3–6 week lag\":** no primary source found; replaced with labelled illustrative examples.",
        "**\"Share of Model directly correlates with branded search\":** no published evidence found; we recommend tracking both and testing the relationship for your brand.",
        "**Meridian \"Python 3.11–3.13\", \"GPU via JAX\", \"GeoX integration\":** not verified against Google's announcements, so not stated.",
      ],
    },
```
