import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/white.css';
import './style.css';

// Vite's BASE_URL already ends with '/'; building paths from it (instead of a
// literal relative path) keeps them correct both in dev and under a GitHub
// Pages project subpath, where a plain relative url() inside the bundled CSS
// would otherwise resolve against assets/ (the CSS file's own folder), not the page.
const assetBase = `${import.meta.env.BASE_URL}Assets/`;

// All slide content is intentionally kept in this file so future changes are
// limited to src/main.jsx and src/style.css.
const slidesMarkup = `

<section class="cover" data-background-image="${assetBase}Cover_Approved_4K_3840x2160_300DPI.png" data-background-size="cover" data-background-position="center">
  <p class="kicker">Strategic Management · MGT532</p><h1>Al Rawae Architectural Company</h1><p class="big">From capability to <span class="accent">controlled, scalable growth</span></p><p class="subtitle">Detailed strategic audit · diagnosis, choice, positioning, and implementation</p>
  <table class="cover-table"><tbody><tr><th>Student</th><td>Fatma Ali Mousa (ID: 252601871)</td></tr><tr><th>Student</th><td>Ahmed Refaat Mousa (ID: 252602038)</td></tr><tr><th>Course</th><td>Strategic Management (MGT532)</td></tr><tr><th>Instructor</th><td>Dr. Safwat Elsharkawi</td></tr></tbody></table>
</section>
<section class="hero">
  <p class="kicker">Strategic Management · MGT532</p><h1>Al Rawae Architectural Company</h1><p class="big">From capability to <span class="accent">controlled, scalable growth</span></p><p class="subtitle">Detailed strategic audit · diagnosis, choice, positioning, and implementation</p>
  <div class="grid3" style="margin-top:34px"><div class="card"><div class="metric">2.80</div><p>EFE · above-average external response</p></div><div class="card"><div class="metric gold">2.60</div><p>IFE · moderate internal position</p></div><div class="card"><div class="metric">7.13</div><p>QSPM · service development wins</p></div></div><aside class="notes">Open with the management problem: strong capability, but systems and visibility have not scaled equally. Main path target: 14 minutes.</aside>
</section>
<section><h2>How to navigate this deck</h2><div class="grid2"><div class="card"><h3>→ Main presentation</h3><p>Use the right arrow for the 15-minute executive story.</p><p class="small">Ten horizontal chapters cover all report sections.</p></div><div class="card"><h3>↓ Drill-down</h3><p>Use the down arrow when the professor asks for evidence, matrices, methods, or detail.</p><p class="small">Vertical slides preserve the complete report structure without slowing the main story.</p></div></div><p class="quote" style="margin-top:35px">Main storyline: Diagnose → Choose → Implement → Control</p></section>

<section>
<section data-drilldown="Profile · services · identity"><p class="kicker">1 · Company foundation</p><h2>A young integrated company with a broad service promise</h2><div class="foundation-layout"><div class="foundation-profile"><p class="big">Established 2021<br><span class="accent location-tag"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>6th of October City</span></p><p>Small-to-medium company with 25+ core staff and a flexible project workforce.</p><div><span class="tag">B2C</span><span class="tag">B2B</span><span class="tag">B2G</span><span class="tag gold">Egypt + Gulf</span></div></div><div class="rotating-stack" data-rotate-ms="6500" aria-label="Company foundation highlights"><article class="focus-card is-active"><h3>Central Value Proposition</h3><div class="focus-detail"><p>One coordinated relationship from concept and licensing through design, execution, smart systems, energy, and after-sales support.</p></div></article><article class="focus-card"><h3>Vision</h3><div class="focus-detail"><p>Become a leading Middle Eastern company in integrated engineering and real estate solutions, driven by innovation, excellence, and community impact.</p></div></article><article class="focus-card"><h3>Mission</h3><div class="focus-detail"><p>Summary: we turn ideas into lasting places, connecting concept to completion for individual, private, and public clients across Egypt and the Gulf through integrated engineering, real estate, and digital expertise.</p></div></article></div></div><aside class="notes">Keep to 60 seconds. The three cards rotate automatically. The active card expands for reading, then contracts to its title while the next card expands. Press Down for profile, services, and identity details.</aside></section>
<section><h2>Company profile and operating scale</h2><div class="grid4"><div class="card"><div class="metric">~200</div><p>clients, 2025 to Aug 2026</p></div><div class="card"><div class="metric">EGP 12.449m</div><p>recorded costs</p></div><div class="card"><div class="metric">EGP 9.632m</div><p>estimated profit</p></div><div class="card"><div class="metric">25+</div><p>permanent core team</p></div></div><p class="small muted">Management-reported figures; 2026 is year-to-date and figures are not audited net profit.</p></section>
<section><h2>Service portfolio</h2><div class="grid3"><div class="card"><h3>Design & consultancy</h3><p>Architecture, engineering, BIM, permits, supervision.</p></div><div class="card"><h3>Execution</h3><p>Construction, civil works, finishing, project delivery.</p></div><div class="card"><h3>Real estate</h3><p>Development and marketing within integrated solutions.</p></div><div class="card"><h3>Smart technology</h3><p>Automation, IoT, BMS, security, software.</p></div><div class="card"><h3>Energy</h3><p>Solar systems, monitoring, energy management.</p></div><div class="card"><h3>After-sales</h3><p>Support, maintenance, upgrades, integration.</p></div></div></section>
<section><h2>Vision, mission, and values</h2><div class="card"><h3>Vision</h3><p>Become a leading Middle Eastern company in integrated engineering and real estate solutions, driven by innovation, excellence, and community impact.</p></div><p class="kicker" style="margin-top:16px">Mission logic</p><div class="grid3 small"><div class="card"><h3>Who we serve</h3><p>Individual, private-sector, and public-sector clients across Egypt and the Gulf.</p></div><div class="card"><h3>How we deliver</h3><p>Integrated engineering and real estate solutions connect concept to completion, pairing multidisciplinary expertise with digital technology for accurate, efficient delivery.</p></div><div class="card"><h3>What guides us</h3><p>Integrity, quality, innovation, and client commitment — responsible growth, and valuing every team member as a partner.</p></div></div><p class="center" style="margin-top:16px"><span class="tag">Integrity</span><span class="tag">Quality</span><span class="tag">Innovation</span><span class="tag">Client commitment</span><span class="tag">Collaboration</span><span class="tag">Accountability</span><span class="tag">Responsible impact</span></p></section>
</section>

<section>
<section data-drilldown="PESTEL · Five Forces · competitors · EFE"><p class="kicker">2 · External environment</p><h2>An attractive market, but not an easy one</h2><div class="grid2"><div class="card op"><h3>Growth opportunities</h3><p>AI/BIM, green building, expatriate housing, smart systems, renewable energy, regulatory advisory.</p></div><div class="card risk"><h3>Profitability pressure</h3><p>Costs, FX volatility, rivalry, buyer power, informal competition, skills, and regulation.</p></div></div><div class="center" style="margin-top:25px"><span class="metric">EFE 2.80 / 4.00</span><p class="small">Above-average response, with cost exposure as the leading gap</p></div><aside class="notes">State the implication: market growth does not guarantee profit. Do not list every PESTEL item unless asked.</aside></section>
<section><h2>PESTEL overview</h2><div class="grid3 small"><div class="card"><div class="card-head"><img class="card-icon" src="${assetBase}icons/political_icon.png" alt="" /><h3>Political</h3></div><p>Regional supply shocks; administrative inconsistency; sustainability policy; Beit Al Watan.</p></div><div class="card"><div class="card-head"><img class="card-icon" src="${assetBase}icons/econmic_icon.png" alt="" /><h3>Economic</h3></div><p>Exchange rates, imported inputs, construction inflation, client feasibility.</p></div><div class="card"><div class="card-head"><img class="card-icon" src="${assetBase}icons/Social_icon.png" alt="" /><h3>Social</h3></div><p>Rapid preference shifts; uneven smart/sustainable adoption.</p></div><div class="card"><div class="card-head"><img class="card-icon" src="${assetBase}icons/tech_icon.png" alt="" /><h3>Technological</h3></div><p>AI and BIM opportunity; scarce emerging-system skills.</p></div><div class="card"><div class="card-head"><img class="card-icon" src="${assetBase}icons/env_icon.png" alt="" /><h3>Environmental</h3></div><p>Heat, green standards, waste management, e-waste.</p></div><div class="card"><div class="card-head"><img class="card-icon" src="${assetBase}icons/legal_icon.png" alt="" /><h3>Legal</h3></div><p>Licensing complexity, codes, Civil Defense, solar approvals.</p></div></div></section>
<section><h2>Porter’s Five Forces</h2><div class="grid3"><div class="card risk"><h3>Rivalry</h3><div class="metric red">High</div><p class="small">Fragmented market and price pressure.</p></div><div class="card risk"><h3>Buyer power</h3><div class="metric red">High</div><p class="small">Comparison is easy before contract.</p></div><div class="card"><h3>New entrants</h3><div class="metric gold">Medium</div><p class="small">Easy at freelance scale, harder when formal and integrated.</p></div><div class="card"><h3>Supplier power</h3><div class="metric gold">Medium</div><p class="small">Higher for imported systems and specialists.</p></div><div class="card"><h3>Substitutes</h3><div class="metric gold">Medium</div><p class="small">Off-plan units, templates, AI-assisted basics.</p></div><div class="card insight"><h3>Implication</h3><p class="small">Differentiation, cost control, and clients who value coordination.</p></div></div></section>
<section><h2>Competitive position</h2><div class="grid2"><div class="card"><h3>Strategic group</h3><p>Telal is the closest direct rival. Land Hills is adjacent. IA applies low-price pressure. Arkom represents coopetition: competitor and client.</p></div><div class="card"><h3>CPM ranking</h3><p><strong>Al Rawae 3.70</strong></p><div class="bar"><span style="width:92.5%"></span></div><p>Telal 3.55</p><div class="bar gold"><span style="width:88.75%"></span></div><p class="small">A narrow lead, not a comfortable moat.</p></div></div></section>
<section><h2>EFE: strongest responses and largest gaps</h2><div class="grid2"><div class="card op"><h3>Strong response</h3><ul><li>AI and BIM adoption</li><li>Licensing, codes, and Civil Defense</li><li>Formal integrated position</li></ul></div><div class="card risk"><h3>Weak-response priorities</h3><ul><li>Material-price disruption</li><li>Exchange-rate exposure</li><li>Rising construction costs</li><li>Buyer and supplier leverage</li></ul></div></div></section>
</section>

<section>
<section data-drilldown="POLC · functions · VRIO · value chain · IFE"><p class="kicker">3 · Internal environment</p><h2>Technically strong, organizationally less mature</h2><div class="grid2"><div class="card op"><h3>Capabilities</h3><p>Licensing know-how, formal standing, BIM/AI, integrated delivery, reliability, relationships, and financial discipline.</p></div><div class="card risk"><h3>Readiness gaps</h3><p>Authority clarity, marketing, working capital, scalability, performance systems, retention, and reporting cadence.</p></div></div><div class="center" style="margin-top:25px"><span class="metric gold">IFE 2.60 / 4.00</span><p class="small">Moderate internal position</p></div><aside class="notes">Core message: the weakness is the management system around the technical product.</aside></section>
<section><h2>Managerial functions: POLC</h2><div class="grid4"><div class="card"><h3>Planning</h3><div class="metric">22/30</div><p class="small">Direction is clear; objectives and resource prioritization remain informal.</p></div><div class="card"><h3>Organizing</h3><div class="metric">22/30</div><p class="small">Functional structure; authority precedence needs formalization.</p></div><div class="card"><h3>Leading</h3><div class="metric">22/30</div><p class="small">Strong culture and speed; communication ambiguity remains.</p></div><div class="card"><h3>Controlling</h3><div class="metric gold">19/30</div><p class="small">Quality feedback exists; company-wide evaluation does not.</p></div></div><p class="quote">Root issue: chain of command, communication, and control are three symptoms of one coordination weakness.</p></section>
<section><h2>Functional-area assessment</h2><div class="grid2"><div class="card"><p>Production <strong>23/30</strong></p><div class="bar"><span style="width:77%"></span></div><p>HR <strong>22/30</strong></p><div class="bar"><span style="width:73%"></span></div><p>Finance <strong>20/30</strong></p><div class="bar gold"><span style="width:67%"></span></div></div><div class="card"><p>R&D <strong>19/30</strong></p><div class="bar gold"><span style="width:63%"></span></div><p>Marketing <strong>18/30</strong></p><div class="bar gold"><span style="width:60%"></span></div><p class="small">The company’s offer is stronger than its market communication.</p></div></div></section>
<section><h2>VRIO: what is truly defensible?</h2><div class="grid3"><div class="card op"><h3>Sustained advantage</h3><p>Licensing know-how and relationships with authorities.</p><div class="metric">1</div><p class="small">10% of assessed resources</p></div><div class="card insight"><h3>Temporary advantage</h3><p>BIM/AI skills and data/technology systems.</p><div class="metric gold">2</div><p class="small">20%</p></div><div class="card"><h3>Parity</h3><p>Equipment, location, finance discipline, structure, reputation, applied innovation.</p><div class="metric">7</div><p class="small">70%</p></div></div></section>
<section><h2>Value chain: the hidden growth engine</h2><div class="flow"><div class="node">Licensing<br><span class="tiny">high volume</span></div><div class="arrow">→</div><div class="node">Design &<br>consultancy</div><div class="arrow">→</div><div class="node">Execution<br><span class="tiny">largest profit share</span></div><div class="arrow">→</div><div class="node">After-sales</div></div><div class="grid3"><div class="card"><div class="metric">143</div><p>licensing clients</p></div><div class="card"><div class="metric">60.3%</div><p>estimated profit from execution</p></div><div class="card"><div class="metric gold">~85%</div><p>execution engagements reportedly began as licensing</p></div></div><p class="small muted">Management-reported estimates. The strategic point is the conversion pathway, not only standalone service margin.</p></section>
<section><h2>IFE priorities</h2><div class="grid2"><div class="card risk"><h3>Highest-weight weaknesses</h3><ul><li>Coordination ambiguity: 0.10</li><li>No formal marketing plan: 0.09</li><li>Scalability: 0.08</li><li>Working capital: 0.08</li></ul></div><div class="card op"><h3>Strongest internal factors</h3><ul><li>Formal registration</li><li>Execution reliability</li><li>BIM/AI capability</li><li>Vision and financial discipline</li></ul></div></div></section>
</section>

<section>
<section data-drilldown="TOWS · SPACE dimensions · QSPM"><p class="kicker">4 · Strategy formulation</p><h2>Controlled aggressive growth, not expansion at any cost</h2><div class="grid2"><div class="card"><h3>SPACE result</h3><div class="metric">(+1.50, +1.16)</div><p>Aggressive quadrant, but close to the origin.</p></div><div class="card insight"><h3>Management interpretation</h3><p>Prioritize scalable, advance-funded, asset-light growth while preserving quality and value-based pricing.</p></div></div><aside class="notes">Emphasize controlled growth. Aggressive does not mean reckless.</aside></section>
<section><h2>TOWS logic</h2><div class="matrix"><div class="quad q1"><h3>SO · use strengths</h3><p class="small">Use licensing, technical capability, integration, and reputation to capture digital, green, expatriate, and smart-building demand.</p></div><div class="quad q2"><h3>WO · correct gaps</h3><p class="small">Formalize marketing, authority, reporting, talent, and service packaging to capture opportunity.</p></div><div class="quad q3"><h3>ST · protect position</h3><p class="small">Use compliance, supplier options, contracts, and digital accuracy against rivalry and volatility.</p></div><div class="quad q4"><h3>WT · limit exposure</h3><p class="small">Keep growth advance-funded, selective, flexible, and measured.</p></div></div></section>
<section><h2>SPACE dimensions</h2><div class="grid4"><div class="card"><h3>Financial strength</h3><div class="metric">+4.83</div><p class="small">Margins, staged collections, low leverage.</p></div><div class="card"><h3>Competitive advantage</h3><div class="metric">−2.33</div><p class="small">Licensing, BIM/AI, integration, reliability.</p></div><div class="card"><h3>Industry strength</h3><div class="metric">+3.83</div><p class="small">Growth and profit potential.</p></div><div class="card"><h3>Environmental stability</h3><div class="metric red">−3.67</div><p class="small">Costs, regulation, informal price pressure.</p></div></div></section>
<section><h2>QSPM: choose a sequence, not a single forever strategy</h2><div class="grid3"><div class="card op"><div class="metric">7.13</div><h3>1 · Service development</h3><p class="small">Formalize paid consultation and extra revisions.</p></div><div class="card"><div class="metric gold">6.46</div><h3>2 · Market penetration</h3><p class="small">Professional brand differentiation in Egypt.</p></div><div class="card"><div class="metric">5.78</div><h3>3 · Gulf development</h3><p class="small">Structured, advance-funded acquisition.</p></div></div><div class="flow"><div class="node">Formalize</div><div class="arrow">→</div><div class="node">Market</div><div class="arrow">→</div><div class="node">Scale</div></div></section>
</section>

<section>
<section data-drilldown="Strategic fit · BCG portfolio"><p class="kicker">5 · Business-level strategy</p><h2>Compete on integrated value, not the lowest price</h2><div class="card"><p class="big center">Broad <span class="accent">differentiation</span></p><p class="center">Customization · integration · compliance · BIM/AI · reliability · accountability · support</p></div><p class="quote">One accountable partner from concept to completion.</p></section>
<section><h2>Why differentiation fits</h2><div class="grid2"><div class="card op"><h3>Customer value</h3><ul><li>Reduced coordination burden</li><li>Site-specific customization</li><li>Regulatory risk reduction</li><li>Technical continuity</li></ul></div><div class="card risk"><h3>What not to do</h3><ul><li>Compete with informal firms on price</li><li>Discount without scope discipline</li><li>Claim BIM/AI alone is a moat</li><li>Overpromise capacity</li></ul></div></div></section>
<section><h2>BCG portfolio</h2><div class="matrix"><div class="quad q1"><h3>Stars</h3><p>Design · Licensing</p><p class="small">Protect and invest.</p></div><div class="quad q2"><h3>Question Mark</h3><p>Construction & execution</p><p class="small">Build capacity selectively.</p></div><div class="quad q3"><h3>Cash Cow</h3><p>Technical consultancy</p><p class="small">Formalize paid packages.</p></div><div class="quad q4"><h3>Dog</h3><p>Integrated technology & smart solutions</p><p class="small">Retain selectively through asset-light partners.</p></div></div><p class="small muted">Qualitative management assessment because audited relative market-share data are unavailable.</p></section>
</section>

<section>
<section data-drilldown="Objectives · action plans · KPIs · contingency"><p class="kicker">6 · Functional strategy</p><h2>Turn existing expertise into two defined paid services</h2><div class="grid2"><div class="card op"><h3>Design Consultation & Review</h3><p>Independent technical review with defined deliverables, scope, turnaround, and price.</p></div><div class="card insight"><h3>Extended Design Revisions</h3><p>Paid changes beyond the contractual allowance, with a clear trigger and approval process.</p></div></div><aside class="notes">This is formalization, not invention. It monetizes expertise and protects against scope creep.</aside></section>
<section><h2>Why this strategy ranked first</h2><div class="grid3"><div class="card"><h3>Low capital demand</h3><p class="small">Uses existing expertise and tools.</p></div><div class="card"><h3>Faster launch</h3><p class="small">No major delivery infrastructure required.</p></div><div class="card"><h3>Advance funding</h3><p class="small">Can support cash discipline.</p></div><div class="card"><h3>Scope protection</h3><p class="small">Reduces unpriced revisions.</p></div><div class="card"><h3>Better data</h3><p class="small">Creates separate revenue and demand records.</p></div><div class="card"><h3>Client value</h3><p class="small">Makes technical expertise easier to buy.</p></div></div></section>
<section><h2>Strategic and annual objectives</h2><div class="grid3"><div class="card"><h3>2026</h3><p>Reconstruct baseline from invoices and project records.</p></div><div class="card"><h3>2027</h3><div class="metric">+15%</div><p>combined revenue versus baseline.</p></div><div class="card"><h3>2028</h3><div class="metric">+30%</div><p>combined revenue versus baseline.</p></div></div><p class="small muted">The 30% target is cumulative against 2026, not an additional 30% over 2027.</p></section>
<section><h2>2027 action plan</h2><div class="step"><div class="num">1</div><div><strong>By 31 March</strong><br><span class="small">Define scope, deliverables, exclusions, price, payment, turnaround, revision limits, and contracts.</span></div></div><div class="step"><div class="num">2</div><div><strong>By 30 June</strong><br><span class="small">Launch and integrate into quotations, contracts, invoices, and client communication.</span></div></div><div class="step"><div class="num">3</div><div><strong>By 31 July</strong><br><span class="small">Activate separate monthly dashboard and quarterly review through year-end.</span></div></div></section>
<section><h2>2028 action plan</h2><div class="step"><div class="num">1</div><div><strong>By 31 March</strong><br><span class="small">Review 2027 demand, costs, pricing, feedback, and operational issues; approve refinements.</span></div></div><div class="step"><div class="num">2</div><div><strong>By 30 September</strong><br><span class="small">Expand targeted communication to qualified individuals, contractors, companies, and referral networks.</span></div></div><div class="step"><div class="num">3</div><div><strong>By 31 December</strong><br><span class="small">Reach at least 30% combined revenue growth over the reconstructed 2026 baseline.</span></div></div></section>
<section><h2>Departmental ownership and KPIs</h2><div class="grid2 small"><div class="card"><h3>Technical / Design</h3><p>Package definition, quality, turnaround, and improvement.</p><p><strong>KPI:</strong> packages approved and technically ready.</p></div><div class="card"><h3>Finance</h3><p>Baseline, pricing, classifications, monthly dashboard.</p><p><strong>KPI:</strong> 100% transactions recorded and targets tracked.</p></div><div class="card"><h3>Administration / Client Relations</h3><p>Commercial documents, launch, communication, inquiry records.</p><p><strong>KPI:</strong> operational by June 2027; requests grow.</p></div><div class="card"><h3>General Management</h3><p>Approval, coordination, quarterly review, corrective action.</p><p><strong>KPI:</strong> all planned approvals and reviews completed.</p></div></div></section>
<section><h2>Contingency plan</h2><div class="card risk"><h3>Trigger</h3><p>Two consecutive monthly reviews materially below the required annual revenue trajectory.</p></div><div class="flow"><div class="node">Review objections</div><div class="arrow">→</div><div class="node">Clarify value</div><div class="arrow">→</div><div class="node">Retarget clients</div><div class="arrow">→</div><div class="node">Refine scope</div></div><p class="small">Use tiered scope and corresponding prices, not uncontrolled discounts. Move management review from quarterly to monthly until recovery.</p></section>
</section>

<section>
<section data-drilldown="Eight advisor discussion themes"><p class="kicker">Advisor lens</p><h2>Why this case matters beyond one company</h2><div class="grid2"><div class="card insight"><h3>Common Egyptian SME challenge</h3><p>Technical and commercial success can outgrow governance, data, cash discipline, marketing, and management systems.</p></div><div class="card op"><h3>Consulting value</h3><p>The case connects strategic choice with operating design, ownership, indicators, and corrective action.</p></div></div></section>
<section><h2>What may interest a business advisor</h2><div class="grid2 small"><div class="card"><h3>1 · Informal success → scalable system</h3><p>Formalize without killing speed.</p></div><div class="card"><h3>2 · Growth vs readiness</h3><p>Opportunity does not equal capacity.</p></div><div class="card"><h3>3 · Zero-debt paradox</h3><p>Prudence can also constrain scale.</p></div><div class="card"><h3>4 · Licensing funnel</h3><p>Service line as acquisition engine.</p></div><div class="card"><h3>5 · Monetize hidden work</h3><p>Turn advice and revisions into products.</p></div><div class="card"><h3>6 · Capability vs visibility</h3><p>Good work does not market itself.</p></div><div class="card"><h3>7 · Imperfect data</h3><p>Make robust decisions and disclose uncertainty.</p></div><div class="card"><h3>8 · Strategy to control</h3><p>Dates, owners, KPIs, and contingencies.</p></div></div></section>
</section>

<section>
<section data-drilldown="Evidence limitations · challenge questions"><p class="kicker">Critical assessment</p><h2>What must be true for the strategy to work?</h2><div class="grid3"><div class="card"><h3>Governance</h3><p>Project Charter or RACI clarifies authority.</p></div><div class="card"><h3>Economics</h3><p>Baseline, package margin, and monthly cash are visible.</p></div><div class="card"><h3>Commercial discipline</h3><p>Scope, revision limits, payment, and acceptance are contractual.</p></div><div class="card"><h3>Marketing ownership</h3><p>A named owner communicates the complete portfolio.</p></div><div class="card"><h3>Capacity</h3><p>Growth remains advance-funded and selective.</p></div><div class="card"><h3>Learning loop</h3><p>Feedback and results change price, scope, or targeting.</p></div></div></section>
<section><h2>Evidence limitations to disclose</h2><div class="grid2"><div class="card risk"><ul><li>Internal financial and operating data are unaudited.</li><li>2026 data stop at August.</li><li>Competitor scores are structured assessments.</li><li>BCG placement is qualitative.</li></ul></div><div class="card risk"><ul><li>Project margin is not final net profit.</li><li>The package baseline must be reconstructed.</li><li>Several ratios are management estimates.</li><li>QSPM attractiveness scores include judgment.</li></ul></div></div><p class="quote">Limitations do not invalidate the decision; they define what implementation must measure.</p></section>
<section><h2>Questions we expect</h2><div class="grid2 small"><div class="card"><ul><li>Why service development before marketing?</li><li>Why delay Gulf expansion?</li><li>Is zero debt always a strength?</li><li>How reliable is the QSPM?</li><li>Why is licensing strategically important?</li></ul></div><div class="card"><ul><li>Can BIM/AI sustain differentiation?</li><li>How will the baseline be rebuilt?</li><li>Which KPI is missing?</li><li>What prevents free consulting?</li><li>What triggers strategy revision?</li></ul></div></div></section>
</section>

<section>
<section data-drilldown="Questions and discussion"><p class="kicker">Conclusion</p><h2>Formalize. Measure. Market. Scale.</h2><div class="flow"><div class="node">Formalize<br><span class="tiny">scope & pricing</span></div><div class="arrow">→</div><div class="node">Measure<br><span class="tiny">economics & demand</span></div><div class="arrow">→</div><div class="node">Market<br><span class="tiny">evidence & value</span></div><div class="arrow">→</div><div class="node">Scale<br><span class="tiny">selectively</span></div></div><p class="quote center">Al Rawae’s strongest path is to convert capability into a repeatable operating system before pursuing broader expansion.</p><aside class="notes">Close in 30 seconds, then move to Q&A.</aside></section>
<section><h2>Questions and discussion</h2><p class="big center">Would you prioritize <span class="accent">service formalization</span> first, or use stronger marketing to create demand before formalization?</p><p class="center muted">Use ↓ to revisit evidence in any chapter.</p></section>
</section>

<section>
<section data-drilldown="Handover sentence · timing plan"><p class="kicker">Presenter plan</p><h2>One handover, one connected story</h2><div class="grid2"><div class="card"><h3>Ahmed · Chapters 1–4</h3><p>Opening, company foundation, external diagnosis, internal synthesis, and strategy selection.</p><p class="metric">~7 min</p></div><div class="card"><h3>Fatma · Chapters 5–Conclusion</h3><p>Competitive strategy, selected services, implementation, advisor lens, risks, and closing.</p><p class="metric gold">~7 min</p></div></div><p class="small">This allocation prioritizes continuity and one clean handover. If subject ownership is more important, Ahmed can emphasize external analysis and Fatma internal analysis during Q&A.</p></section>
<section><h2>Handover sentence</h2><p class="quote">“The market offers real growth, but the decisive question is whether Al Rawae is internally ready to capture it. Fatma will now show how the chosen strategy converts the diagnosis into a controlled implementation plan.”</p></section>
<section><h2>15-minute timing</h2><div class="grid4 small"><div class="card"><h3>Foundation</h3><p>1:00</p></div><div class="card"><h3>External</h3><p>1:40</p></div><div class="card"><h3>Internal</h3><p>1:50</p></div><div class="card"><h3>Choice</h3><p>1:40</p></div><div class="card"><h3>Competition</h3><p>1:10</p></div><div class="card"><h3>Implementation</h3><p>2:35</p></div><div class="card"><h3>Advisor + risk</h3><p>2:10</p></div><div class="card"><h3>Close + buffer</h3><p>1:55</p></div></div><p class="center"><strong>Target rehearsal time: 14:00–14:30</strong></p></section>
</section>


`;

function activateFoundationRotation(deck, timerRef) {
  if (timerRef.current) clearInterval(timerRef.current);
  timerRef.current = null;
  const slide = deck.getCurrentSlide();
  document.querySelectorAll('.rotating-stack').forEach((stack) => {
    const cards = Array.from(stack.querySelectorAll('.focus-card'));
    cards.forEach((card, index) => card.classList.toggle('is-active', index === 0));
    if (!slide || stack.closest('section') !== slide || cards.length < 2) return;
    let current = 0;
    const delay = Number(stack.dataset.rotateMs || 6500);
    timerRef.current = window.setInterval(() => {
      cards[current].classList.remove('is-active');
      current = (current + 1) % cards.length;
      cards[current].classList.add('is-active');
    }, delay);
  });
}

function updateDrillHint(deck, hintRef) {
  const slide = deck.getCurrentSlide();
  const label = slide?.getAttribute('data-drilldown') || '';
  const parent = slide?.parentElement;
  const verticalCount = parent
    ? Array.from(parent.children).filter((element) => element.tagName === 'SECTION').length
    : 0;
  hintRef.current.textContent = label ? `↓ ${label}` : '';
  hintRef.current.classList.toggle('is-visible', Boolean(label && verticalCount > 1));
}

function Presentation() {
  const revealRef = useRef(null);
  const deckRef = useRef(null);
  const hintRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // CSS can't read import.meta.env, so hand the resolved theme-bg URL to it via a custom property.
    revealRef.current.style.setProperty('--theme-bg', `url("${assetBase}Theme_Approved_4K_3840x2160_300DPI.png")`);
    const deck = new Reveal(revealRef.current, {
      embedded: false,
      hash: true,
      slideNumber: 'c/t',
      controls: true,
      progress: true,
      center: true,
      transition: 'slide',
      backgroundTransition: 'fade',
      plugins: [RevealNotes]
    });
    deckRef.current = deck;
    const refresh = () => {
      updateDrillHint(deck, hintRef);
      activateFoundationRotation(deck, timerRef);
    };
    deck.initialize().then(refresh);
    deck.on('slidechanged', refresh);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      deck.off('slidechanged', refresh);
      deck.destroy();
    };
  }, []);

  return (
    <>
      <div className="reveal" ref={revealRef}>
        <div className="slides" dangerouslySetInnerHTML={{ __html: slidesMarkup }} />
      </div>
      <div className="global-drill-hint" ref={hintRef} aria-live="polite" />
      <img className="brand-logo-left" src={`${assetBase}AR-LOGO%20FINAL.png`} alt="Al Rawae Architectural Company" />
      <img className="brand-logo" src={`${assetBase}logo.png`} alt="ESLSCA University" />
    </>
  );
}

// Reuse the root across HMR reloads; a second createRoot on the same node warns and remounts the deck.
// StrictMode is omitted deliberately: its double-mount destroys Reveal mid-initialize.
const container = document.getElementById('root');
container.__revealRoot ??= createRoot(container);
container.__revealRoot.render(<Presentation />);
