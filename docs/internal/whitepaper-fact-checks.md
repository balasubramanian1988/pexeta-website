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

## Part 4 — Machine-readable catalogs (22 Nov 2026) — internal, not published
- "71% of ChatGPT-cited / 65% of AI Mode-cited pages have schema": no source found. Replaced with Ahrefs (AI-cited pages ~3x more likely to have JSON-LD; controlled test of 1,885 pages: no measurable citation lift).
- ACP "powers Instant Checkout": OpenAI scaled Instant Checkout back in March 2026; merchants use own checkout. Updated.
- "79-field feed": not confirmed. OpenAI spec: nine required basic fields + target/store country. Updated.
- UCP partners/AP2: AP2 = Agent Payments Protocol (not "Agent Pay 2"); Copilot Checkout is not UCP-based per sources. Merchant Center UCP is US pilot only. Updated.
- MCP attributed to "Anthropic, Shopify"; "/api/ucp/mcp" endpoint: unverified. MCP = Anthropic (Nov 2024), now Agentic AI Foundation. Removed endpoint.
- llms.txt "Web Standards Working Group" and "1/10th token cost": unsourced. Google says llms.txt not needed / not used. Updated.
- JSON-LD example: suitableForDiet (Recipe/MenuItem property), isAccessoryOrSparePartFor:false, unitText "HUR", fictional brand named "Pexeta Organics", fabricated reviewer — removed; replaced with property table from Google merchant listing docs.
- "<100ms" sync, "algorithmic blacklisting", "100% readiness", crawler names (Google-Extended is a robots token, Claude-Web deprecated): removed or generalised.

## Part 8 — Omnichannel inventory & reverse logistics (22 Nov 2026) — internal, not published
- "Over 2,400 dark stores (Blinkit, Zepto, Instamart)": understated. Blinkit 2,751 (Sep 2026); Zepto 1,139, Instamart 1,143 (FY26 end).
- 19.3% online return rate: confirmed (NRF/Happy Returns 2025). "15.8% baseline" is total retail, not online.
- "28–32% apparel", "$215B US reverse logistics / $264B by 2030", "4.2% overselling", "14–21 days to 48–72 hours", "22–30% cost of return", "15–30% of gross profit": no primary sources found. Removed.
- ₹1,000 return waterfall and "₹48 lakh/month" example: illustrative numbers without source. Replaced with a cost-line measurement table.
- Buffer thresholds "below 5 units", "below 4 units", dark store "1,500–4,000 sq ft", "95% fill rate": unsourced. Removed.
- Pexeta pillar claims "32% faster transit, 18% lower shipping, 34% of returns retained": unverifiable client results. Removed (no case studies).
- Added sourced India RTO data (Unicommerce, ClickPost), Amazon returnless resolutions, and E-Commerce Rules baseline.

## 2026-11-23 — Part 12: Retail Media Networks 2.0 (retail-media-networks-quick-commerce-ctv-india-2026)
- Global $196.7B (2026) was WARC's Nov 2025 forecast; WARC Aug 2026 update = $200.4B (2026), $223.4B (2027). Used latest.
- "$312B by 2030 / 11% CAGR", "India retail media 38% CAGR", "₹18,000 cr QC ads by 2030" — no primary source; removed.
- US off-site $17.05B → EMARKETER $16.81B; growth 29.6% (draft 29.5%). US CTV $4.2B / 43.1% — not found; removed.
- Instacart "ads = 97.98% of adj. EBITDA; core broke even at $22M" — derived ratio comparing revenue to EBITDA; misleading, removed. Kept ads & other rev $1.065B, adj EBITDA $1.1B.
- Zepto: ₹1,635.7 cr / +151% / 2,468 brands confirmed; "7.23%" → 7.2% of operating revenue (Inc42). "More profit from ads than spent on CAC" → replaced with sourced comparison: ₹1,389 cr own ad spend.
- IAB Europe V2 "mandated July 2026" → voluntary standards; July 2026 was the end of the V1/V2 transition. "14-day attribution windows" not in sources; removed.
- QC CPC ₹4–25, CPM ₹80–250, ROAS 3–8x, retail margins 1.5–4% vs RMN 68–85%, "80% of transactions in store", "on-site saturation late 2025" — blog/unsourced; removed.
- "Disney+ Hotstar, JioCinema" outdated (merged into JioHotstar); CTV section rebuilt on Amazon Ads India sources.
- Pexeta budget split (40/25/20/15) and ACoS <18% / TACoS 10–12% / "<4 units" targets removed (unsourced targets); framework kept as process.

## 2026-11-23 — Part 11: WhatsApp Conversational Commerce (whatsapp-conversational-commerce-chat-checkout-india-2026)
- "72-hour free window" → Meta docs: FEP window may stay open up to 7 days (Wati: from 28 Sep 2026); requires business reply within 24h; Meta Business Agent messages still charged.
- Oct 2026 change confirmed: service messages charged after 1,000 free per phone number/month; utility in CSW charged again; payment method by 30 Sep 2026. Draft table's "Mandatory verified payment" kept; "native MBA token charges" → $2.00 per 1M tokens.
- Added: India INR billing migration deadline 31 Dec 2026 (Meta).
- 3.3B MAU / 284M business accounts / $45B economy / India 535M / Brazil 148M — only "3B+" confirmed by Meta; others third-party estimates; removed.
- 45–60% conversion, 95–98% open rate, CPL ₹25–65, cart recovery 22–38%, CAC −35–60%, 15–40x ROAS, 98.1% UPI success, 35% gateway drop-off, 22–34% COD→prepaid, 2.4x repeat — vendor marketing stats; removed.
- "Flows 2.0" not an official name → "WhatsApp Flows". Payment partners: Cashfree not listed by Meta; supported = BillDesk, Razorpay, PayU, Zaakpay. "Meta Pay & Stripe tokens" removed.
- COD 50–70% share / RTO 20–35% → replaced with Unicommerce and ClickPost figures (same as Part 8).
- "Green Tick", "99.99% SLA", "AI handles 85% of queries", "₹5 Cr+ GMV brands" — unverifiable claims; removed.

## Part 13 — ONDC (ondc-open-network-digital-commerce-india-2026), 24 Nov 2026
- Kept/sourced: 500M cumulative (Jul 2026, DPIIT via Cross-Border Magazine); 218M FY26 (ONDC FY25-26 review); ~0.2M FY23; 200,000+ retail merchants; 1.16 lakh+ retail sellers, 630+ cities (Lok Sabha, Dec 2025); 300,000+ tickets/day, 21 bus cities, 9 metros; 9 lakh+ drivers in 55 cities; Rs 218 cr loans; 28/50 AMCs; DigiDukaan; Rs 220 cr raise (Zoho 70, Uber 60, Paytm 60, BSE 30).
- Fees: buyer app fee negotiated in real time, 3% cap removed (ONDC Commercial Model ch.3); Rs 1.5 network fee from 1 Jan 2025 on successful txns > Rs 250, paid by seller-side NPs (Inc42); Fynd 3% as example.
- IGM: 3 levels issue/grievance (GRO)/ODR; ONDC grievance portal; courts any time.
- Removed (unverified): 760K enterprises/1,200+ towns; 370,000+ daily trips; 80% of metro ticketing; Rs 1,000 order waterfall; 3-5% commissions; 80% more margin; 2+ billion annual; 30-40% of digital commerce; Pexeta "5-8% below Amazon, +12-15% margin" and "<2 hour" delivery targets; Dunzo as LSP; customer-data ownership claim. Draft references had no links; replaced with linked sources.

## Part 14 — Dark store automation & cold chain (dark-store-automation-cold-chain-quick-commerce-india-2026), 26 Nov 2026
- Kept/sourced: Redseer FY26 GMV ~$13B (ClickPost); 5,026 dark stores May 2026 (Equirus); Blinkit 2,751 (Sep 2026); 477 cities (CLSA); Datum daily orders; Robotics 24/7 (QKS, Kumar Anand, 20 Aug 2026) two-histories argument, 150 units/hr, Rs100 order split, four conditions; Kroger closures, $2.6B impairment, $350M to Ocado; Zepto 25 lakh units/day automated (Dec 2025), >50% orders via automated DCs (Feb 2026), in-house Falcon & Neo; Flipkart robot sortation 4,500/hr; AutoStore up to 4x density; Dematic up to 650 picks/hr/person; Geekplus ROI <24 months (vendor); BCG 30-50% picking cost cut (5-10 yr wave); FSSAI frozen <=-18C, chilled <=5C (storage checklist); FSSAI Oct 2026 advisory (khoa, paneer, meat, fish; Schedule 4); FSSAI e-com 30%/45-day shelf life; ~30% summer surge, perishables up to 40% of orders; Petit Forestier last-mile without active refrigeration; Zepto cold chain + TCI (Mint).
- CORRECTED: draft named "Falcon Autotech NEO" as a cube grid vendor — Falcon and Neo are Zepto's in-house automation systems (Digit). Draft "$14B India" -> Redseer ~$13B FY26 GMV.
- Removed (unverified/unsourced): $45B global QC; MFC market $3.2B/$10.2B/$36B and installed-base table ("Asian Robotics Review" not found); manual 120-180 s pick cycles, 2.5%/2-4% error rates, 65% walking time, 600->2,200 orders/store, 20-35 pickers; 5-8x throughput (80->650) and 400% density (AutoStore says up to 4x); 3,000 sq ft grid = 25,000 SKUs; 12-second retrieval; CV bagging sub-50ms and IoT shelf claims; 35% of GMV from temperature-sensitive categories; spoilage 12% -> 1.2%; PCM "zero melting" and BLE logger claims; full manual-vs-automated monthly waterfall (Rs10.1L vs 4.83L, 52% savings), RaaS payback 11-14 months, 2.8x capacity; "Ocado ... late 2025 write-downs" restated as Kroger's; Pexeta service claims (thermal stress testing to 45C, thermochromic indicators, "Rs5 Cr+ monthly" brands, sub-45 s dispatch) replaced by brand checklist recommendations. Draft references with no links (Asian Robotics Review, DAAKit, iFactory, Robotics Center, Novus, IMARC, Zikoo) not used; Robotics 24/7 and Geekplus kept with links.

## Part 15 — Post-aggregator era / Roll-Up 2.0 (post-aggregator-era-brand-roll-up-2-india-2026), 27 Nov 2026
- Kept/sourced: $16B+ raised, almost all 2021 (Marketplace Pulse); $12.3B in 2021, 75% debt, $2.7B in 2022 (MP "Death by Valuation"); multiples 2.5–3x (2020) -> 4–8x (2021) (MP); end-2022 6x+ -> 4–5x (MP); current 2–3x EBITDA, 1–4.5x range (SoStocked/SPS); Thrasio 2x -> 7x (Hefter via MP); Thrasio $3.4B raised, 200+ brands, 1.5/week (Silver Lake); 2020 $500M+ rev/$100M profit (Yahoo); Ch11 28 Feb 2024, 240 affiliates, 81%/88% lenders, ~$495M debt cut, up to $90M new money, confirmed 13 Jun, emerged 18 Jun 2024 (PRN, TechCrunch, ElevenFlo).
- Mensa: FY25 $168M (-5.8%), FY24 $178.6M (~Rs1,482 Cr), FY25 loss $60.4M, ILN (MensXP/iDiva/HYPP) to RPSG Rs21.4 Cr, four core brands named, reverse flip expected 2026, IPO prep, FY26 guidance Rs1,600–1,700 Cr (Inc42 Feb 2026). Rs155.85 Cr is FY24 STANDALONE Indian-entity loss (Inc42) — draft mixed it with consolidated revenue; separated.
- GlobalBees: Rs398 Cr Q4 FY25 contribution (Ascendants); CCD investment approval 25 Mar 2025 (Lokmat). GOAT: FY23 Rs139.6 Cr (Entrackr); FY25 Indian entity Rs15.0 Cr+ (Inc42 Datalabs); Pepe for sale Mar 2026 (Moneycontrol via CB Insights). 10Club: Sec 10 IBC, NCLT Bengaluru (Entrackr/Inc42). UpScalio: CIRP commenced 5 Apr 2024 (IBBI).
- CORRECTED: "Mensa shrank from 20+ to four brands" -> four CORE brands plus smaller lifestyle brands (Inc42). "UpScalio & 10club pivoted to single-brand operations" -> not found; removed. Thrasio Chapter 11 date added; "by 2024 collapsed" kept as Thrasio-specific.
- Removed (unverified/unsourced): "100+ holding companies"; Thrasio "$3.4B burned to generate $300M revenue"; "$450M over-ordering"; "47 aggregators tracked, only six active buyers" (Nova Analytics — not found); credit fund names (Victory Park, BlackRock, Oaktree) and 10–15% rates; "ad costs >15% of seller revenue"; "A10+ neural ranking"; GOAT -21.9%, EBITDA -Rs5.6 Cr, net loss -Rs6.2 Cr; Roll-Up 2.0 numbers (2.5–3.5x SDE, 20–40% rollover, 2–3 yr retention, <2.0x debt/EBITDA, 3–6 brands); COGS -4–8%, OpEx -35% in 90 days, zero incremental CAC, TACoS 10–12%, Rs199–499 packs, 95%+ fill rates; valuation criteria thresholds (15–22% margin, 45/25/30 mix, 30–45% repeat, 10–14% TACoS); Pexeta "+300–500 bps" promise; Rs50–200 Cr exit framing. Comparison table kept as qualitative, labelled as Pexeta's view. Draft references (RollUpEurope, Nova Analytics, Pari Passu, MDS) had no links; replaced with linked sources.
