// Product content for the NIXXY AI voice receptionist site.
// Original copy written for this rebuild.

export const missedCallLead = 'South African businesses lose revenue to the same gaps every day, and adding more agents only scales the cost, not the coverage.';

export const missedCallWithout = [
  'Calls go unanswered after hours, over weekends and during peak queues',
  'Customers who prefer isiZulu, isiXhosa or Afrikaans drop off the call',
  'Contact-centre headcount climbs faster than revenue',
  'POPIA consent and opt-out tracking is manual and risky',
  'Follow-ups and reminders depend on someone remembering',
];

export const missedCallWith = [
  "Every call answered, day or night, in the caller's language",
  'Leads qualified and appointments booked before a human steps in',
  'Thousands of simultaneous calls without adding seats',
  'POPIA consent, opt-out and recording disclosure built in',
  'Reminders and follow-ups that go out every single time',
];

export const metrics = [
  { value: '1.8M+', label: 'Calls answered every month' },
  { value: '58%', label: 'Average reduction in front-desk workload' },
  { value: '2.7x', label: 'More booked appointments from inbound calls' },
  { value: '99.99%', label: 'Platform uptime' },
];

export const features = [
  {
    title: 'Human-sounding voice',
    desc: 'Native audio-to-audio responses under 300ms, so conversations feel natural — not like talking to a robot or waiting on a script.',
    bullet: 'Sub-300ms responses',
  },
  {
    title: 'Talk over it, anytime',
    desc: 'Callers can interrupt mid-sentence and the agent adapts instantly, just like a real receptionist would.',
    bullet: 'Interrupt mid-sentence',
  },
  {
    title: 'Never a busy signal',
    desc: 'Handle unlimited calls at once. No hold music, no queues — every caller is answered on the first ring, 24/7.',
    bullet: 'Unlimited concurrent calls',
  },
  {
    title: 'Knows your business',
    desc: 'Connect your FAQs, docs, menus, and policies. The agent answers from your own knowledge base using retrieval, not guesswork.',
    bullet: 'Answers from your own docs',
  },
  {
    title: 'Speaks their language',
    desc: 'Detects and switches languages mid-call, so you can serve every caller without a separate line or staff member.',
    bullet: 'Switches language mid-call',
  },
  {
    title: 'Books and routes',
    desc: 'Schedules appointments on your calendar, qualifies leads, takes messages, and warm-transfers to a human when it matters.',
    bullet: 'Calendar booking + warm transfer',
  },
  {
    title: 'Bring your own numbers',
    desc: 'Keep your existing phone numbers and carrier. Point your line at NIXXY and go live — no migrations, no new hardware.',
    bullet: 'Keep your number and carrier',
  },
  {
    title: 'Every call, in your CRM',
    desc: 'Transcripts, call summaries, sentiment, and intent flow straight into your tools, so nothing slips through the cracks.',
    bullet: 'Transcripts, summaries, sentiment',
  },
];

export const steps = [
  {
    title: 'Design your agent',
    desc: 'Pick a voice, write the greeting, and set guardrails in plain English. Define what it should do — book, qualify, answer, transfer.',
  },
  {
    title: 'Connect your knowledge',
    desc: 'Upload FAQs and docs, link your calendar and CRM, and add the policies your receptionist needs to answer accurately.',
  },
  {
    title: 'Go live on your number',
    desc: 'Forward your existing line to NIXXY and your AI receptionist starts answering immediately — with full transcripts from call one.',
  },
];

export const homeSteps = [
  {
    title: 'Build',
    desc: 'Set the prompt, RAG sources, tools and persona. Describe the agent in plain language.',
  },
  {
    title: 'Evaluate',
    desc: 'Sandbox every scenario, compare versions and roll back any update with zero downtime.',
  },
  {
    title: 'Launch',
    desc: 'Provision a local number or port your own, and go live on Vodacom, MTN, Telkom or Cell C.',
  },
  {
    title: 'Optimise',
    desc: 'Watch latency, transcripts and AI summaries from your self-hosted dashboard and fine-tune.',
  },
];

export const industries = [
  {
    name: 'Real estate', desc: 'Capture every buyer and renter inquiry, schedule showings, and qualify leads before they reach an agent.',
    sample: { caller: 'Is the downtown loft still available to tour?', agent: 'It is — I have Saturday at 11 or 1. Shall I book one for you?' },
    tags: ['Scheduling', 'Leads'],
  },
  {
    name: 'Legal services', desc: 'Intake new clients 24/7, screen matters, and book consultations without tying up paralegals.',
    sample: { caller: 'I need to talk to someone about a contract dispute.', agent: 'I can set up a consultation. Are mornings or afternoons better?' },
    tags: ['Intake', '24/7'],
  },
  {
    name: 'Healthcare & dental', desc: 'Book, reschedule, and confirm appointments, answer insurance questions, and triage after hours.',
    sample: { caller: 'Can I move my cleaning to next week?', agent: "Done — you're rebooked for Tuesday at 9:30am." },
    tags: ['Scheduling', 'Insurance'],
  },
  {
    name: 'Home services', desc: 'Answer every job call, dispatch urgent requests, and quote standard work while your crews are on site.',
    sample: { caller: "My water heater's leaking — can someone come today?", agent: "I'm flagging this as urgent and dispatching a tech now." },
    tags: ['Dispatch', 'Urgent'],
  },
  {
    name: 'Restaurants', desc: 'Take reservations and to-go orders, answer hours and menu questions, and stop missing the dinner rush.',
    sample: { caller: 'Table for four tonight around 7?', agent: 'I have 7:15 on the patio — want me to hold it?' },
    tags: ['Reservations', 'Orders'],
  },
  {
    name: 'Automotive', desc: 'Schedule service, answer parts and pricing questions, and follow up on quotes automatically.',
    sample: { caller: 'When can you fit me in for an oil change?', agent: "Thursday at 8am works — I'll add it to the schedule." },
    tags: ['Scheduling', 'Quotes'],
  },
  {
    name: 'E-commerce & retail', desc: 'Handle order status, returns, and product questions across every line at once.',
    sample: { caller: "Where's my order? It's been a week.", agent: 'It shipped Monday — arriving tomorrow by 8pm. Want the tracking link?' },
    tags: ['Orders', 'Support'],
  },
  {
    name: 'Professional services', desc: 'Qualify inbound interest, route to the right team, and book discovery calls around the clock.',
    sample: { caller: 'Do you have time for a discovery call this week?', agent: "I do — Wednesday at 3pm. I'll send a calendar invite." },
    tags: ['Discovery', 'Routing'],
  },
];

export const plans = [
  {
    name: 'Starter',
    priceMonthly: 2999,
    priceYearly: 28790,
    blurb: 'Pilot a single clinic line.',
    meta: '250 included min · ₹12/min eff. · 2 agents',
    features: [
      '2 AI voice agents',
      '250 included minutes',
      '₹12/min effective rate · ₹12/min overage',
      'Inbound patient calls',
      'Per-second billing (no minute-rounding)',
      'Standard voice stack',
      'Call recording',
      'Real-time transcription',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    priceMonthly: 8799,
    priceYearly: 84470,
    blurb: 'Most practices start here.',
    meta: '800 included min · ₹11/min eff. · 10 agents',
    featured: true,
    features: [
      '10 AI voice agents',
      '800 included minutes',
      '₹11/min effective rate · ₹11/min overage',
      'Inbound patient calls',
      'Per-second billing (no minute-rounding)',
      'Standard + premium voices',
      'Call recording',
      'Real-time transcription',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    priceMonthly: 29999,
    priceYearly: 287990,
    blurb: 'High-volume clinics & hospital networks.',
    meta: '3,000 included min · ₹10/min eff. · Unlimited agents',
    features: [
      'Unlimited AI voice agents',
      '3,000 included minutes',
      '₹10/min effective rate · ₹10/min overage',
      'Inbound patient calls',
      'Per-second billing (no minute-rounding)',
      'Realtime + premium voices',
      'Call recording',
      'Real-time transcription',
      'Dedicated success manager + SLA',
    ],
  },
];

export const blogCategories = ['All', 'Business Ops', 'Compliance', 'Product', "Buyer's Guide"];

export const blogStats = [
  { value: '5', label: 'Articles published' },
  { value: '11', label: 'Languages supported' },
  { value: 'POPIA', label: 'Compliant by default' },
  { value: 'Weekly', label: 'New posts' },
];

export const blogPosts = [
  {
    slug: 'cost-of-a-missed-call',
    title: 'The Real Cost of a Missed Call for South African Businesses',
    excerpt: 'A phone that rings out doesn’t just cost you one booking. It costs you the booking, the referral that customer would have made, and — increasingly — the review they…',
    category: 'Business Ops',
    author: 'KallUs Team',
    date: 'Jul 14, 2026',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'A phone that rings out doesn’t just cost you one booking. It costs you the booking, the referral that customer would have made, and — increasingly — the review they leave about how hard you were to reach. For South African businesses juggling load shedding, network congestion and lean front-desk teams, the missed call isn’t an edge case. It’s a daily leak in the business, and it’s one of the few revenue leaks a business can actually measure, quantify and close within a single quarter.' },
      { type: 'p', text: 'What makes this leak particularly costly is that it’s invisible in the way most businesses track performance. Sales dashboards show closed deals, marketing dashboards show leads generated, but almost no business tracks "calls that rang out unanswered" as a line item — even though, for a phone-driven business, it’s often the single biggest gap between potential revenue and actual revenue. You can’t fix what you don’t measure, and most owners have simply never measured this.' },
      { type: 'image', caption: 'Hero image — a busy South African front desk or reception counter with a phone ringing unanswered' },
      { type: 'h2', text: 'Why the problem is bigger here than the global averages suggest' },
      { type: 'p', text: 'Most call-answering benchmarks are built around US and European contact centres with dedicated headcount and predictable call volumes. South African businesses operate under different pressure: single-receptionist front desks covering multiple roles, mobile networks that get congested at peak times, and customers who call rather than email because data costs still shape behaviour. Add after-hours enquiries from customers who only have time to phone in the evening, and the gap between "open for business" and "actually answering the phone" widens fast.' },
      { type: 'p', text: 'Industry surveys across retail, healthcare and financial services consistently find that a large share of inbound calls to small and mid-sized businesses go unanswered during business hours — not because the business is closed, but because whoever would answer is already on another call, serving a walk-in customer, or simply hasn’t got to the desk yet. Every one of those calls represents a customer who was ready to spend money at the exact moment nobody picked up.' },
      { type: 'p', text: 'It’s tempting to assume WhatsApp and SMS have solved this problem — South Africans are heavy messaging users, after all. But messaging is a poor substitute for voice when a query is urgent, complex, or emotionally loaded. A patient in pain, a tenant with a burst geyser, or a customer trying to understand a declined insurance claim wants a real-time conversation, not a text thread that might get a reply in four hours. Businesses that push urgent callers toward messaging as a fallback tend to see the same customers simply give up and call a competitor instead.' },
      { type: 'h2', text: 'What "missed" actually costs you' },
      { type: 'bullets', items: ['The immediate booking or sale — a caller who wanted an appointment, a quote, or a table tonight, not next week.', 'The compounding cost of the second call — most callers who reach voicemail don’t call back; they call your competitor instead.', 'Reputation damage — "nobody answers the phone" is one of the most common complaints in local business reviews, and it’s one of the few complaints that’s entirely preventable.', 'Compliance exposure — in regulated sectors like collections and insurance, missed or mishandled calls can mean missed disclosure windows and slower resolution times.', 'Staff burnout — a receptionist fielding a constant backlog of missed-call voicemails is doing the stressful part of the job twice.'] },
      { type: 'image', caption: 'A simple bar chart or infographic comparing "calls received" vs "calls answered" across a typical business day' },
      { type: 'h2', text: 'How to calculate your own missed-call cost' },
      { type: 'p', text: 'The number is more approachable than most owners expect, and it’s worth working out before deciding whether a fix is worth paying for. Start by pulling your call logs for a typical week — most phone systems and mobile providers can show you total inbound calls versus answered calls. Multiply the daily gap by your average close rate on a phoned-in enquiry, then by the average value of that booking or sale. Extend that daily figure across a working year and you have a conservative estimate of what missed calls are actually costing — conservative because it ignores the compounding loss of repeat business and referrals from a customer who never got through.' },
      { type: 'bullets', items: ['Step 1: Missed calls per day = total inbound calls − answered calls, averaged over a representative week.', 'Step 2: Estimated close rate = the share of answered enquiry calls that convert into a booking, sale or paid consultation.', 'Step 3: Average transaction value = revenue per booking, order or new client, averaged across your service mix.', 'Step 4: Annual cost = missed calls per day × close rate × average transaction value × working days per year.'] },
      { type: 'p', text: 'Most businesses that run this calculation for the first time are surprised by the size of the number — often well into six figures annually for a business handling more than fifty calls a day. That figure alone usually reframes the decision from "can we afford a voice agent" to "can we afford not to have one."' },
      { type: 'h2', text: 'A short example' },
      { type: 'p', text: 'Take a mid-sized dental practice with two reception lines. On an average day it receives around 90 calls — bookings, reschedules, billing queries, and new-patient enquiries. During peak morning hours, when the desk is also checking patients in, roughly a third of those calls go to voicemail. If even half of the callers who hit voicemail were new patients looking to book, and the average patient is worth several thousand rand a year across cleanings, treatments and referrals, the practice isn’t losing a phone call — it’s losing a five-figure sum annually, quietly, without ever showing up on a P&L line.' },
      { type: 'image', caption: 'Illustrative photo — a reception desk at a clinic or small business, phone and appointment book visible' },
      { type: 'h2', text: 'Which industries feel this hardest' },
      { type: 'p', text: 'The size of the problem varies by industry, but a few patterns show up consistently across South African businesses that run heavily on inbound calls.' },
      { type: 'bullets', items: ['Healthcare and dental practices — appointment-driven revenue means every missed new-patient call is a lost annual relationship, not just a single visit.', 'Home services and trades — emergency call-outs (burst geysers, electrical faults, break-ins) go to whichever provider answers first; a missed call is a lost job, full stop.', 'Real estate — buyers and tenants calling about a listing rarely wait; if the agent doesn’t answer, they move to the next listing on the page.', 'Automotive service centres — service bookings cluster around the same morning hours, which is exactly when the front desk is busiest checking customers in.', 'Debt collection and financial services — missed inbound calls from customers trying to arrange payment plans often convert into longer, costlier recovery processes.'] },
      { type: 'table', headers: ['Industry', 'Typical Missed-Call Rate', 'Primary Cost Driver', 'Recovery Priority'], rows: [['Healthcare & dental', '20–35% at peak hours', 'Lost new-patient bookings', 'High'], ['Home services', '15–30%', 'Lost emergency call-outs', 'High'], ['Real estate', '10–25%', 'Buyers moving to the next listing', 'Medium–High'], ['Automotive service', '15–25% mornings', 'Lost service bookings', 'Medium'], ['Debt collection', '10–20%', 'Longer recovery timelines', 'Medium']] },
      { type: 'h2', text: 'What "answered" needs to mean in 2026' },
      { type: 'p', text: 'Answering the phone isn’t enough on its own. To actually capture the value of an inbound call, a business needs to answer on the first ring, in the caller’s preferred language, with enough context to either resolve the query or book the next step immediately. That’s a hard bar for a stretched front-desk team to hit consistently, especially outside standard hours — which is exactly when a growing share of consumer calls now happen.' },
      { type: 'image', caption: 'Split visual: "Without a voice agent" (missed call, frustrated customer) vs "With a voice agent" (call answered, booking confirmed)' },
      { type: 'h2', text: 'Where AI voice receptionists change the economics' },
      { type: 'p', text: 'This is the gap AI voice receptionists are built to close. Instead of a call falling through to voicemail when the desk is busy, an AI agent answers immediately, in the language the caller starts speaking in, and either resolves the query or books it directly into the calendar. Because the agent can hold unlimited simultaneous calls, a busy period that would previously overflow into missed calls becomes just another set of answered calls — no queue, no voicemail, no lost booking.' },
      { type: 'p', text: 'The economics are straightforward: the monthly cost of an AI voice agent is typically a fraction of even one missed high-value booking, and it scales without the hiring, training and after-hours premium that comes with adding human headcount. Run the same calculation from earlier in this article, but this time model what happens if the missed-call rate drops from a third of calls to close to zero — for most businesses, the AI agent pays for itself inside the first month, and every month after that is close to pure recovered revenue.' },
      { type: 'p', text: 'For businesses where the phone is still the primary channel — clinics, collections teams, real estate agencies, contact centres — that’s not a marginal improvement. It’s the difference between a front desk that copes and one that actually captures every opportunity that calls in.' },
      { type: 'p', text: 'There’s a second-order benefit that rarely gets factored into the initial decision: every call an AI agent answers is transcribed and logged automatically, which means a business finally has visibility into what customers are actually calling about. That data — the recurring questions, the common objections, the peak-hour patterns — is usually more valuable to a growing business than the cost saving alone, because it turns a previously invisible part of the business into something that can be actively managed and improved.' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'Every unanswered call is a measurable, recoverable cost — not an unavoidable one. Run the calculation above on your own call logs before you decide whether this is worth fixing; most owners find the number is larger, and the fix cheaper, than they assumed. Businesses that treat call coverage as seriously as they treat stock levels or staffing rosters consistently outperform competitors who still think of a missed call as a minor inconvenience. In a market as call-driven as South Africa’s, closing that gap is one of the highest-leverage changes a business can make this year.' },
      { type: 'image', caption: 'Closing visual — a phone being answered on the first ring, checkmark or "booked" confirmation overlay' }
    ],
    faqs: [
      { q: 'How much does a missed call actually cost my business?', a: 'It depends on your call volume, close rate and average transaction value, but most businesses handling more than fifty calls a day find the annual cost runs into six figures once lost bookings, referrals and repeat business are factored in. Use the four-step calculation in this article to work out your own number.' },
      { q: 'What counts as a "missed call" for this calculation?', a: 'Any inbound call that goes to voicemail, rings out unanswered, or is abandoned by the caller while waiting on hold. All three represent a caller who didn’t get through to a person or system that could help them.' },
      { q: 'Do WhatsApp or SMS replies count as recovering a missed call?', a: 'Partially, but not fully. Messaging works for simple follow-ups, but urgent, complex or emotionally sensitive calls are far more likely to convert when handled in real time by voice rather than left for an asynchronous text reply.' },
      { q: 'How quickly can an AI voice agent reduce my missed-call rate?', a: 'Most businesses see their missed-call rate drop close to zero within days of going live, since the agent answers every call immediately regardless of how busy the desk is or what time it is.' },
      { q: 'Does after-hours coverage really make a measurable difference?', a: 'Yes — a growing share of consumer calls happen outside standard business hours, and businesses that only cover 9-to-5 are missing that entire segment of demand by default.' }
    ]
  },
  {
    slug: 'popia-ai-voice-agents',
    title: 'POPIA and AI Voice Agents: A Compliance Checklist for South African Businesses',
    excerpt: 'Every phone call to your business is a data-processing event. The caller’s number, what they say, and often a recording of the conversation itself all fall under the…',
    category: 'Compliance',
    author: 'KallUs Team',
    date: 'Jul 7, 2026',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'Every phone call to your business is a data-processing event. The caller’s number, what they say, and often a recording of the conversation itself all fall under the Protection of Personal Information Act (POPIA) — and that doesn’t change because the voice answering the phone is artificial rather than human. If anything, deploying an AI voice agent raises the compliance bar, because now there’s a system, not just a person, making decisions about how that data is captured and used. The Information Regulator has made clear that automated processing is not exempt from POPIA’s conditions — it simply means the responsibility for compliance sits with whoever configured the system.' },
      { type: 'p', text: 'This matters more for voice than for almost any other channel a business uses. An email or web form only captures what the customer deliberately types. A phone call captures everything — tone, hesitation, background detail a caller didn’t mean to disclose, and sometimes special categories of information like health status or financial hardship that carry extra weight under POPIA. A business that would never dream of storing a customer’s medical history in a spreadsheet without safeguards can end up doing exactly that, unintentionally, through an unmanaged call recording pipeline.' },
      { type: 'image', caption: 'Hero image — abstract representation of a phone call with a data/shield icon, South African flag colours subtly present' },
      { type: 'h2', text: 'What POPIA actually requires on a phone call' },
      { type: 'p', text: 'POPIA doesn’t single out AI, but its core principles apply directly to any automated system handling calls: processing must be lawful and for a specific, defined purpose; the person being recorded must be informed that they are being recorded and why; personal information must be kept no longer than necessary; and reasonable technical safeguards must protect the data from loss or unauthorised access. For a voice agent, this translates into a handful of concrete obligations rather than abstract principles.' },
      { type: 'p', text: 'It also helps to understand who POPIA holds accountable. Your business is the "responsible party" — the entity that decides why and how personal information is processed — even if the actual AI infrastructure is run by a third-party vendor, who is legally a mere "operator" acting on your instruction. That distinction matters in practice: if your voice AI vendor mishandles caller data, regulatory responsibility still lands on your business first, which is exactly why vendor due diligence deserves the same rigor you’d apply to any other data processor you contract with.' },
      { type: 'h2', text: 'The eight conditions, applied to a voice call' },
      { type: 'p', text: 'POPIA sets out eight conditions for lawful processing, and it helps to see how each one maps onto an AI-handled phone call rather than treating them as abstract legal language. Accountability means someone in the business is formally responsible for how the voice agent handles data, not just the vendor. Processing limitation means the agent should only collect what it needs to resolve the call. Purpose specification means the caller should be told why their information is being captured — for booking, for account verification, for compliance disclosure. Further processing limitation means call data shouldn’t quietly get reused for marketing or analytics beyond its original purpose without fresh consent.' },
      { type: 'bullets', items: ['Information quality — transcripts and captured details should be accurate and kept up to date, particularly where they feed into bookings or account records.', 'Openness — callers should be able to find out, on request, what categories of information a business collects through its voice agent.', 'Security safeguards — recordings and transcripts need encryption at rest and in transit, plus access controls limiting who inside the business can hear or read them.', 'Data subject participation — a caller can ask what was recorded about them and request correction or deletion, and the business needs a real process to action that request.'] },
      { type: 'table', headers: ['POPIA Condition', 'What It Means', 'Voice-Agent Example'], rows: [['Accountability', 'Someone owns compliance for the system', 'A named person signs off on the agent’s call-handling defaults'], ['Processing limitation', 'Collect only what’s needed', 'Agent doesn’t ask for ID numbers on a booking call'], ['Purpose specification', 'Caller told why data is captured', 'Disclosure states the call is recorded for quality and booking'], ['Further processing limitation', 'No silent reuse of data', 'Call transcripts aren’t repurposed for marketing without consent'], ['Information quality', 'Data stays accurate', 'Booking details are confirmed back to the caller before saving'], ['Openness', 'Caller can find out what’s collected', 'Privacy notice explains what the voice agent records'], ['Security safeguards', 'Data is protected', 'Recordings encrypted at rest and in transit'], ['Data subject participation', 'Caller can access or delete data', 'A documented process handles access requests']] },
      { type: 'h2', text: 'The compliance checklist' },
      { type: 'bullets', items: ['Clear disclosure at the start of the call — the caller must be told they’re speaking with an AI system and that the call may be recorded, before any personal information is captured.', 'A working opt-out — callers need a straightforward way to be transferred to a human or to decline recording, and that request has to be honoured, not just offered.', 'Purpose limitation — the agent should only capture and retain information relevant to resolving the caller’s query, not open-ended conversational data "just in case".', 'Defined retention periods — call transcripts and recordings need a retention policy, with automatic deletion once the operational or legal need has passed.', 'Data residency — knowing where recordings and transcripts are actually stored, and whether that involves cross-border transfer, which triggers additional POPIA conditions.', 'Access and correction rights — a process for a caller to request what data was captured about them, and to have it corrected or deleted.'] },
      { type: 'image', caption: 'Checklist-style graphic summarising the six compliance points above' },
      { type: 'h2', text: 'Cross-border data transfer: the point most businesses miss' },
      { type: 'p', text: 'A large share of AI voice platforms route audio processing, transcription or storage through servers outside South Africa — often in the US or EU, where the underlying speech models were built and hosted. Under POPIA, transferring personal information across a border is only lawful if the receiving country has adequate data-protection laws, the caller has consented, or one of a narrow set of other conditions applies. Many businesses adopt a voice AI platform without ever asking this question, and only discover the exposure during a compliance audit or after a customer complaint. Ask any vendor for a straight answer: which countries does call data physically pass through and rest in, and under which of POPIA’s cross-border conditions is that transfer justified?' },
      { type: 'h2', text: 'Where most AI voice deployments actually fall short' },
      { type: 'p', text: 'In practice, the gap is rarely the technology — it’s the defaults. Many voice AI platforms are built for markets without a POPIA-equivalent regime and treat disclosure, retention and data residency as optional configuration rather than a baseline requirement. A business adopting one of these platforms without checking those settings can end up POPIA non-compliant on day one, even though the underlying AI is technically sound. The fix isn’t avoiding AI — it’s choosing a platform where compliant defaults are built in rather than bolted on.' },
      { type: 'p', text: 'This is often a simple procurement mistake rather than a deliberate cut corner: a business signs up for a platform built primarily for the US market, where disclosure and retention norms differ meaningfully from POPIA, and simply never reconfigures the defaults for South African requirements. The lesson isn’t that these platforms are untrustworthy — it’s that "works well in another market" and "compliant in this one" are two separate questions, and only one of them gets asked in most sales conversations.' },
      { type: 'h2', text: 'What happens when it goes wrong' },
      { type: 'p', text: 'The Information Regulator has enforcement powers ranging from formal warnings to administrative fines, and the reputational cost of a public compliance failure is often larger than any fine. Consider a debt-collection business whose AI agent fails to disclose recording at the start of a call: the recording itself may become inadmissible in a dispute over what was agreed, and the business is left both non-compliant and without evidence to support its own position. Compliance failures in voice AI rarely come from a single dramatic breach — they accumulate from small, unreviewed defaults across thousands of ordinary calls, which is exactly why the checklist above needs to be verified once at setup and re-checked whenever a vendor updates its platform.' },
      { type: 'p', text: 'There’s also a slower, quieter cost that rarely makes headlines: customer trust. A caller who later learns their call was recorded without proper disclosure, or that their information sat on a server in a jurisdiction they never agreed to, doesn’t usually file a complaint with the regulator — they simply stop doing business with that company and tell others why. For a business built on repeat callers and referrals, that quiet attrition is often more expensive than any formal enforcement action.' },
      { type: 'h2', text: 'Where AI voice agents actually strengthen compliance' },
      { type: 'p', text: 'Handled correctly, an AI voice agent can be more consistently compliant than a busy human team. A person under pressure might skip the recording disclosure on a hectic Monday morning; a properly configured agent delivers it on every single call, without exception, and logs that it did. Retention policies that would require manual enforcement across a team of receptionists become a single configuration setting applied uniformly. And because every call is transcribed by default, a business has a complete, searchable audit trail if a regulator or a customer ever asks what was said and agreed on a call — something most human-staffed call centres can’t produce on demand.' },
      { type: 'image', caption: 'Side-by-side comparison: manual compliance (inconsistent, hard to audit) vs automated compliance (consistent, logged, auditable)' },
      { type: 'h2', text: 'Questions to ask before you sign' },
      { type: 'p', text: 'Before committing to any AI voice platform, ask directly: where is call data stored, and does that involve a transfer outside South Africa? What is the default retention period, and can it be shortened? Does the disclosure script meet POPIA’s informed-consent standard, and can it be customised for regulated industries like collections or healthcare? Is there a documented process for handling a data subject access request? A vendor that can answer these clearly and specifically — not with a generic "we take privacy seriously" — is one that has actually built compliance into the product rather than treating it as a sales talking point.' },
      { type: 'image', caption: 'A business owner reviewing a vendor contract or compliance checklist on a laptop' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'POPIA compliance for voice AI isn’t a blocker to adoption — it’s a due-diligence exercise that takes an afternoon to work through properly. Map the eight conditions against your vendor’s actual defaults, confirm where your data lives, and put a retention policy in writing. Businesses that do that work upfront get the efficiency of automated call handling without inheriting new regulatory risk, and often end up more auditable than they were with a fully human front desk.' },
      { type: 'image', caption: 'Closing visual — a shield or compliance badge alongside a phone icon, conveying "protected call data"' }
    ],
    faqs: [
      { q: 'Does POPIA apply if I use a US-based AI voice vendor?', a: 'Yes. POPIA applies to any processing of South African callers’ personal information, regardless of where the vendor is headquartered. Using a foreign vendor also raises cross-border transfer questions that need to be answered separately.' },
      { q: 'Do I need explicit consent to record calls in South Africa?', a: 'You need to inform the caller that the call may be recorded and give them a genuine opportunity to opt out or be transferred to a human, delivered before any personal information is captured.' },
      { q: 'How long can I legally keep call recordings?', a: 'POPIA doesn’t set a fixed number of days — it requires that you keep data no longer than necessary for the purpose it was collected for. Most businesses set a defined retention window (for example 90 days to 12 months depending on the industry) and delete automatically after that.' },
      { q: 'What happens if my voice AI vendor is non-compliant?', a: 'Your business remains the responsible party under POPIA even if a vendor mishandles data, so the regulatory and reputational risk lands on you first. This is why vendor due diligence matters as much as your own internal policies.' },
      { q: 'Can callers request their call data be deleted?', a: 'Yes — data subject participation is one of POPIA’s eight conditions, and callers can request access to, correction of, or deletion of their personal information. Your business needs a documented process to action these requests.' }
    ]
  },
  {
    slug: 'ai-voice-vs-call-centre-cost',
    title: 'AI Voice Receptionists vs Traditional Call Centres: What SA Businesses Actually Save',
    excerpt: 'When call volume outgrows a single front-desk person, the traditional next step is obvious: hire another receptionist, or outsource to a call centre. It’s also,…',
    category: 'Business Ops',
    author: 'KallUs Team',
    date: 'Jun 30, 2026',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'When call volume outgrows a single front-desk person, the traditional next step is obvious: hire another receptionist, or outsource to a call centre. It’s also, increasingly, the wrong first move. Before adding headcount, it’s worth actually running the numbers on what a human answering line costs versus what an AI voice agent costs to handle the same volume — because the gap is larger than most businesses expect, and it only widens as call volume grows.' },
      { type: 'p', text: 'This isn’t a hypothetical trade-off either. Businesses across retail, healthcare, financial services and property management are already running this comparison in practice, and the pattern holds regardless of industry: the moment call volume exceeds what one or two people can comfortably handle, the cost curve for human coverage bends sharply upward while the cost curve for an AI agent stays close to flat. Understanding exactly why that happens is the difference between making this decision on gut feel and making it on numbers.' },
      { type: 'image', caption: 'Hero image — a split-screen concept: a traditional call centre floor on one side, a clean AI dashboard/waveform on the other' },
      { type: 'h2', text: 'The real cost of a human answering line' },
      { type: 'p', text: 'A single receptionist’s salary is only the starting number. Layer on UIF and other statutory contributions, recruitment and onboarding costs, ongoing training (especially for multilingual coverage), paid leave and sick-day cover, and the inevitable cost of turnover in a role with historically high attrition, and the effective cost per answered call climbs well above what the base salary implies. Outsourced call centres remove the direct-employment overhead but replace it with per-seat or per-minute fees that scale linearly with volume — there’s rarely a discount for growth, and after-hours or multilingual coverage usually carries a premium.' },
      { type: 'h2', text: 'The AI voice agent cost structure' },
      { type: 'p', text: 'AI voice receptionists are typically priced on a subscription plus usage-minutes model, with no separate line item for recruitment, training, benefits, or after-hours premiums — the agent works the same at 2pm and 2am. Setup is a one-time cost measured in hours, not weeks, since the "training" is describing your business in plain language rather than running a new hire through weeks of onboarding.' },
      { type: 'h2', text: 'A worked example' },
      { type: 'p', text: 'Consider a business handling around 1,200 inbound calls a month — a busy but not unusual volume for a multi-line retail operation or a mid-sized clinic group. A single full-time receptionist, fully loaded with statutory contributions and benefits, costs the business a meaningful five-figure sum every month before any overtime or after-hours cover is added — and one person alone can’t realistically cover 1,200 calls without significant overflow to voicemail during peak hours. Adding a second hire to cover the gap roughly doubles that cost. An outsourced call centre handling the same volume typically bills per minute or per seat, and that bill rises in lockstep with every marketing campaign or seasonal spike that drives more calls in. An AI voice agent handling the same 1,200 calls, by contrast, sits on a flat or lightly usage-scaled subscription that in most cases costs a fraction of a single receptionist’s salary — while covering every call, in every language, at every hour, without ever calling in sick.' },
      { type: 'h2', text: 'Side-by-side comparison' },
      { type: 'bullets', items: ['Headcount cost: human line requires salary + statutory contributions + benefits, per person, per line. AI agent requires a single subscription regardless of call volume growth.', 'Scaling for peak volume: human line needs additional hires or overtime to cover surges; AI agent handles unlimited simultaneous calls at the same cost.', 'After-hours and weekend coverage: human line requires shift premiums or a separate night team; AI agent covers 24/7 by default at no extra cost.', 'Multilingual coverage: human line needs to hire or train for each language; AI agent switches languages mid-call without additional headcount.', 'Ramp time: a new human hire typically needs several weeks to reach full competence; an AI agent is production-ready within days of setup.', 'Consistency: human performance varies by person, shift and day; AI agent delivers the same script quality and compliance disclosure on every call.'] },
      { type: 'table', headers: ['Cost Factor', 'In-House Receptionist', 'Outsourced Call Centre', 'AI Voice Agent'], rows: [['Base monthly cost', 'Salary + benefits + UIF', 'Per-seat or per-minute fees', 'Flat or usage-based subscription'], ['After-hours coverage', 'Shift premium required', 'Often a separate premium', 'Included by default'], ['Multilingual coverage', 'Hire or train per language', 'Premium add-on', 'Included, switches mid-call'], ['Peak-volume scaling', 'Overtime or new hires', 'Extra seats billed', 'Unlimited concurrent calls, same price'], ['Ramp-up time', 'Weeks of onboarding', 'Days to weeks', 'Hours to days'], ['Consistency across calls', 'Varies by person and shift', 'Varies by agent, hard to audit', 'Same script quality every call']] },
      { type: 'image', caption: 'Simple cost-comparison table graphic: monthly cost of 1 receptionist vs outsourced call centre vs AI voice agent, at equivalent call volume' },
      { type: 'h2', text: 'The hidden costs of outsourced call centres' },
      { type: 'p', text: 'Outsourcing looks attractive on a rate card, but the real cost often shows up after the contract is signed. Offshore or shared-agent centres frequently struggle with South African accents, place names and product terminology, which drags out average call handling time and frustrates customers. Quality control is harder to enforce at a distance — a business rarely hears the calls its outsourced team is actually taking, and only finds out about a problem after a customer complains. Most outsourcing contracts also lock in minimum monthly volumes or multi-year terms, so a business that overestimates its call volume, or wants to change providers, is stuck paying for capacity it doesn’t use. None of these costs show up on the initial rate card, but they show up on the invoice, and in customer satisfaction scores, within the first few months.' },
      { type: 'p', text: 'Shared-agent outsourcing carries a subtler cost too: the agents on the other end of the line are usually split across several client accounts, meaning your business is competing for their attention and product knowledge with every other company they represent that week. A dedicated in-house hire gives full attention but at full cost; a shared outsourced agent gives partial attention at a lower headline rate that often turns out not to be lower once handling time, escalations and rework are factored in.' },
      { type: 'h2', text: 'What AI still doesn’t replace' },
      { type: 'p', text: 'This isn’t a case for removing humans entirely, and a credible vendor won’t claim otherwise. Complex complaint resolution, emotionally sensitive conversations, and genuinely novel requests that fall outside a defined script still need a human decision-maker — and a well-built AI agent is designed to recognise those moments and route the call to one, rather than trying to force every conversation through a script. The realistic model isn’t "AI instead of people"; it’s AI handling the high-volume, repeatable 80% of calls — bookings, FAQs, status checks, appointment changes — so the humans on the team spend their time on the 20% that actually needs judgement.' },
      { type: 'p', text: 'That reallocation is itself a cost saving that’s easy to overlook. A skilled team member spending their day on routine bookings and status updates is doing work well below their actual value to the business. Freeing that time for retention calls, complex problem-solving or sales conversations doesn’t show up as a line-item saving, but it shows up in the outcomes those higher-value conversations produce.' },
      { type: 'image', caption: 'A human team member handling an escalated or complex call, calm and focused — representing the 20% AI hands off' },
      { type: 'h2', text: 'A simple framework to run your own comparison' },
      { type: 'p', text: 'Pull three numbers before you decide: your current monthly call volume, your fully loaded cost per staffed line (salary, benefits, overtime, and any outsourcing fees combined), and the share of those calls that are genuinely routine versus complex. Multiply your routine-call share by your current cost per line to see how much you’re spending on calls an AI agent could fully handle today. Compare that to a voice AI subscription at your volume, and you have a like-for-like number rather than a vendor’s marketing claim.' },
      { type: 'h2', text: 'What the first 90 days typically look like' },
      { type: 'p', text: 'Most businesses that switch see a similar pattern. In the first two to three weeks, the agent is handling a narrow set of well-defined call types — bookings, status checks — while the team monitors transcripts closely and refines the script. By week four, coverage typically expands to the full call flow, including after-hours calls that were previously going to voicemail entirely. By day 90, most businesses have enough call data to run the missed-call-cost calculation from our companion article and see the recovered revenue directly, rather than relying on an estimate. That 90-day window is also the right point to formally compare the AI agent’s cost against what the same volume would have cost through hiring or outsourcing, using real invoices rather than projections.' },
      { type: 'h2', text: 'Where the savings show up fastest' },
      { type: 'p', text: 'Businesses see the clearest return in roles that are call-heavy but low-complexity: appointment scheduling, order status enquiries, basic collections reminders, and after-hours triage. These are exactly the calls that currently either overflow to voicemail or tie up a receptionist who could be doing higher-value work. Redirecting that volume to an AI agent doesn’t just cut cost — it frees the human team to focus on retention, upsells, and the conversations that genuinely need a person.' },
      { type: 'image', caption: '"Where the savings show up" visual — a funnel or pie chart showing the ~80% routine calls vs ~20% complex calls split' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'For most South African SMEs, the choice isn’t AI versus people — it’s AI handling the calls that don’t need a person, so the people on the team can focus on the calls that do. Run the comparison on your own call volume and the case tends to make itself: the cost of covering every call with human headcount or an outsourced contract rises in a straight line, while the cost of an AI voice agent barely moves.' },
      { type: 'p', text: 'The businesses that benefit most are rarely the ones already fully staffed and comfortable — they’re the ones stuck in the uncomfortable middle, where call volume has outgrown one receptionist but doesn’t yet justify a full outsourced contract or a second full-time hire. That gap is exactly where an AI voice agent delivers the clearest, fastest return, and it’s worth running the numbers before defaulting to the next hire.' },
      { type: 'image', caption: 'Closing visual — a rising cost line for human headcount vs a flat cost line for AI, converging toward a "savings" callout' }
    ],
    faqs: [
      { q: 'Is an AI voice agent really cheaper than hiring a receptionist?', a: 'For most call volumes, yes — a subscription-based AI agent typically costs a fraction of a fully loaded receptionist salary, and it doesn’t carry the added cost of overtime, benefits or after-hours premiums.' },
      { q: 'Can an AI agent fully replace my call centre?', a: 'It can handle the high-volume, repeatable share of calls — bookings, FAQs, status checks — but complex complaints and emotionally sensitive conversations still route to a human. Most businesses run a blended model rather than full replacement.' },
      { q: 'How long does it take to set up an AI voice agent?', a: 'Initial setup is typically measured in hours to a few days, since "training" means describing your business and call flows in plain language rather than running weeks of new-hire onboarding.' },
      { q: 'What happens when a call is too complex for the AI to handle?', a: 'A well-built agent recognises when a call needs human judgement and transfers it, ideally with context passed along so the caller doesn’t have to repeat themselves.' },
      { q: 'Will switching disrupt my existing phone number or workflow?', a: 'No — most platforms let you keep your existing number and simply forward your line, and integrate with your existing calendar or booking system rather than requiring you to change how you work.' }
    ]
  },
  {
    slug: 'multilingual-ai-voice-agents',
    title: 'Multilingual by Default: How AI Voice Agents Handle isiZulu, Afrikaans and isiXhosa Calls',
    excerpt: 'South Africa has eleven official languages, and real conversations rarely stay in just one of them. A caller might open in isiZulu, switch to English mid-sentence to…',
    category: 'Product',
    author: 'KallUs Team',
    date: 'Jun 23, 2026',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'South Africa has eleven official languages, and real conversations rarely stay in just one of them. A caller might open in isiZulu, switch to English mid-sentence to clarify a technical term, and slip back into isiZulu to finish the thought. Any system built to answer South African phones has to handle that fluidly — not with a menu of "press 1 for English, press 2 for Afrikaans," but the way a genuinely bilingual receptionist would: by simply following the conversation wherever it goes.' },
      { type: 'p', text: 'For a business, getting this right isn’t a matter of politeness — it’s a direct driver of conversion and trust. Customers are consistently more likely to complete a booking, disclose sensitive information accurately, and rate a business favourably when the conversation happens in the language they’re most comfortable in. Getting it wrong doesn’t just create friction; it signals to the caller that the business wasn’t really built with them in mind, which is a difficult first impression to undo.' },
      { type: 'image', caption: 'Hero image — a phone/call icon surrounded by speech bubbles in different languages, representing multilingual conversation' },
      { type: 'h2', text: 'A genuinely multilingual market, not a niche use case' },
      { type: 'p', text: 'isiZulu and isiXhosa are each spoken as a first language by more South Africans than English, and Afrikaans, Sepedi, Setswana, Sesotho, Xitsonga, siSwati, Tshivenda and isiNdebele all carry official status alongside them. Most South Africans are functionally multilingual, code-switching between two or three languages within a single conversation depending on who they’re speaking to and what they’re describing. A phone system that only handles one language at a time isn’t supporting a small edge case — it’s misunderstanding the default behaviour of the market it’s meant to serve.' },
      { type: 'p', text: 'This diversity varies by region too. A contact centre serving customers nationally might field isiZulu-heavy calls from KwaZulu-Natal, Afrikaans-heavy calls from the Western and Northern Cape, and Sesotho or Setswana calls from the Free State and North West in the same hour. A single-language or even dual-language system simply can’t serve a genuinely national customer base — which is exactly why "multilingual" needs to mean broad, real-time coverage rather than a second language bolted onto an English-first design.' },
      { type: 'table', headers: ['Language', 'Most Common Region', 'Typical Business Use Case'], rows: [['isiZulu', 'KwaZulu-Natal, Gauteng', 'Retail, healthcare, collections'], ['isiXhosa', 'Eastern Cape, Western Cape', 'Healthcare, home services'], ['English', 'Nationwide', 'General business, professional services'], ['Afrikaans', 'Western Cape, Northern Cape', 'Real estate, automotive, agriculture'], ['Sesotho', 'Free State', 'Retail, financial services'], ['Setswana', 'North West', 'Retail, home services'], ['Xitsonga', 'Limpopo, Mpumalanga', 'Retail, healthcare'], ['Sepedi', 'Limpopo', 'Retail, healthcare']] },
      { type: 'h2', text: 'Why the old IVR model doesn’t match how people actually talk' },
      { type: 'p', text: 'Traditional phone menus force a single, upfront language choice before the conversation even starts — and they break the moment a caller needs to switch mid-call, which happens constantly in multilingual households and workplaces. A caller who starts in Afrikaans but needs to read out an English product name, or one who begins in English but is more comfortable explaining a medical symptom in isiXhosa, gets stuck in a system that was never designed for how South Africans actually speak on the phone.' },
      { type: 'p', text: 'The friction compounds for callers who are already stressed or in a hurry — exactly the callers a business most needs to serve well. Someone reporting a burst pipe or trying to reach a doctor’s office doesn’t want to navigate a language menu before getting help; they want to start talking and be understood immediately, in whichever language the words come out in first.' },
      { type: 'h2', text: 'How native-audio AI models handle this differently' },
      { type: 'p', text: 'Modern voice AI built on native-audio processing doesn’t transcribe speech to text, translate it, and generate a scripted reply — it listens and responds in audio directly, which means it can track a language switch in real time instead of visibly stalling to "figure out" what changed. Practically, that means a caller can open in isiZulu, ask a follow-up in English, and get a response in whichever language they just used, without ever being asked to restart or select an option from a menu.' },
      { type: 'p', text: 'The older approach — speech-to-text, machine translation, then text-to-speech back out — adds two full translation steps into every exchange, and each step introduces both latency and a chance for meaning to drift, particularly with idioms and culturally specific phrasing that don’t translate literally. Native-audio models remove those intermediate steps entirely, which is also why they tend to feel faster and more natural: there’s simply less machinery between what the caller says and what the agent says back.' },
      { type: 'image', caption: 'Example call transcript graphic — caller switching from isiZulu to English mid-conversation, agent following naturally' },
      { type: 'h2', text: 'A short example' },
      { type: 'p', text: 'A caller opens with "Sawubona, ngingathola usizo ngomkhiqizo?" (Hello, can I get help with a product?). The agent responds in isiZulu, confirming it can help. Midway through, the caller switches: "Actually, can we switch to English?" The agent doesn’t pause, apologise, or restart the flow — it simply continues in English from that point forward: "Of course. How can I help you today?" To the caller, this feels less like navigating a system and more like talking to someone who happens to speak both languages well. That’s the bar a good multilingual AI agent needs to clear.' },
      { type: 'h2', text: 'Where multilingual systems typically fail' },
      { type: 'p', text: 'Not every system marketed as "multilingual" clears that bar. The most common failure is accent bias — models trained mostly on American or British English speech patterns misrecognise South African English accents at a noticeably higher error rate, which cascades into wrong bookings and frustrated callers. The second is mishandled code-switching, where a system either freezes when the caller changes language mid-sentence or, worse, responds in the wrong language entirely. The third is literal translation without register — a system that translates the right words but delivers them in a tone that feels robotic or culturally off, which erodes trust even when the information itself is correct. Any of these three failure modes will quietly undo the goodwill a multilingual feature is supposed to build.' },
      { type: 'p', text: 'There’s a fourth, less obvious failure worth watching for: uneven quality across languages. A vendor might demo flawless English and reasonable Afrikaans, but noticeably weaker isiZulu or Sepedi performance simply because less training data or engineering attention went into those languages. This is exactly the kind of gap that never shows up in a generic sales demo and only becomes visible once you test each language your customers actually use, individually and deliberately.' },
      { type: 'h2', text: 'Where this matters most' },
      { type: 'bullets', items: ['Healthcare — patients describing symptoms are more accurate and more comfortable in their first language, which directly affects triage quality.', 'Debt collection and financial services — clear, in-language communication is not just good practice, it’s a compliance safeguard against disputes over what was disclosed or agreed.', 'Retail and e-commerce — a customer who can ask about a product in the language they think in converts at a noticeably higher rate than one navigating a menu in their second language.', 'Real estate and property — buyers and tenants often prefer to negotiate sensitive details like budget and timelines in their home language.'] },
      { type: 'image', caption: 'Icons representing the four industries above, arranged in a simple grid' },
      { type: 'p', text: 'In each of these industries, the cost of getting language support wrong isn’t just a lower satisfaction score — it’s a measurable drop in resolution rate. A debt collections call where the customer only half-understands the repayment terms is more likely to result in a missed payment and a repeat call. A healthcare intake call where a symptom is mistranslated can mean the wrong triage priority. Multilingual accuracy isn’t a soft nice-to-have in these contexts; it directly affects outcomes.' },
      { type: 'h2', text: 'Beyond translation: getting tone and register right' },
      { type: 'p', text: 'Language coverage on its own isn’t enough — a good agent also needs to match tone and formality to context. A collections call requires a calm, respectful register regardless of language; a retail enquiry can be warmer and more casual. Well-built voice agents carry that tone consistently across every language they operate in, rather than defaulting to a stiff, literal-translation voice the moment a caller switches away from English.' },
      { type: 'image', caption: 'Visual contrasting tone — a calm, formal collections call vs a warm, casual retail enquiry, same agent adapting register' },
      { type: 'h2', text: 'How to evaluate multilingual quality before you commit' },
      { type: 'p', text: 'Don’t take a vendor’s language list at face value. Ask for a live call in each language your customers actually use, and specifically test a mid-call language switch rather than just a single-language conversation — that’s where most systems reveal their weaknesses. Listen for natural pacing, correct pronunciation of local place names and terminology, and whether the tone shifts appropriately between a formal and a casual context. A short, deliberate test call in isiZulu, Afrikaans or isiXhosa will tell you more about a platform’s real multilingual quality than any spec sheet.' },
      { type: 'p', text: 'If you serve customers in a specific region, test with speakers from that region rather than relying on a generic evaluation. A platform that performs well with standard broadcast-style pronunciation may still struggle with strong regional accents or local slang, and the only way to know is to test with the actual voices your business needs to understand.' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'Multilingual support isn’t a nice-to-have feature for South African businesses — it’s the baseline expectation of the market they operate in. An AI voice agent that treats language switching as a first-class, real-time capability rather than a static menu choice will consistently outperform — in caller satisfaction and in conversion — any system that forces a single-language conversation on a genuinely multilingual country.' },
      { type: 'p', text: 'The businesses that get this right treat language as a design requirement from day one, not a feature to bolt on once English-language support is working. That single decision — building multilingual, real-time conversation into the foundation rather than adding it later — is usually what separates a voice AI deployment that genuinely serves South African callers from one that merely claims to.' },
      { type: 'image', caption: 'Closing visual — South African flag colours with speech-bubble icons in multiple languages converging into one conversation' }
    ],
    faqs: [
      { q: 'Which South African languages does the AI voice agent support?', a: 'Native-audio voice agents can be configured to support the country’s major official languages, including isiZulu, isiXhosa, Afrikaans, Sesotho, Setswana and English, alongside others depending on the platform.' },
      { q: 'Can the agent really switch languages mid-call?', a: 'Yes — native-audio models track a language switch in real time and respond in whichever language the caller just used, without restarting the conversation or asking the caller to select an option.' },
      { q: 'Does language switching slow down the response time?', a: 'No, not with native-audio processing. Because there’s no intermediate translation step, response times stay consistent whether the conversation is in one language or several.' },
      { q: 'What happens if a caller mixes languages in the same sentence?', a: 'A well-built agent follows the conversation naturally, the way a genuinely bilingual person would, rather than freezing or defaulting to a single language when code-switching happens mid-sentence.' },
      { q: 'Can I customise the tone for different call types in each language?', a: 'Yes — tone and formality (calm and formal for collections, warm and casual for retail, for example) can be configured per use case and carries consistently across every supported language.' }
    ]
  },
  {
    slug: 'buyers-guide-ai-voice-receptionist',
    title: 'How to Choose an AI Voice Receptionist: A Buyer’s Guide for South African SMEs',
    excerpt: 'The AI voice receptionist market has grown quickly, and with growth comes a wide spread in quality — from genuinely production-ready platforms to thin wrappers around…',
    category: 'Buyer\'s Guide',
    author: 'KallUs Team',
    date: 'Jun 16, 2026',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'The AI voice receptionist market has grown quickly, and with growth comes a wide spread in quality — from genuinely production-ready platforms to thin wrappers around generic, US-built voice models that stumble on South African accents, networks and compliance requirements. For a business owner evaluating options for the first time, it’s hard to tell the difference from a demo alone, since demos are, by design, run under ideal conditions. This guide covers the criteria that actually predict how a platform performs once it’s answering real calls, from real customers, on real South African networks.' },
      { type: 'p', text: 'Treat this decision with the same rigor you’d apply to hiring a senior team member, not a software subscription you can quietly cancel if it doesn’t work out. A voice agent becomes the first voice most of your customers hear — it shapes first impressions, handles sensitive information, and directly affects revenue. The seven criteria below are the ones that consistently separate platforms that hold up under real conditions from ones that only perform well in a sales call.' },
      { type: 'image', caption: 'Hero image — a decision-making or checklist visual, business owner comparing options on a laptop or tablet' },
      { type: 'h2', text: '1. Latency on South African networks' },
      { type: 'p', text: 'A voice agent that takes two seconds to respond feels broken to a caller, even if the eventual answer is correct — natural conversation has response gaps measured in a few hundred milliseconds, not seconds. Ask any vendor for real, measured latency figures on Vodacom, MTN, Telkom and Cell C specifically, not just a general claim of "low latency." Platforms built and tested primarily on US or European networks often perform noticeably worse on South African mobile infrastructure, and that gap only shows up under real call conditions, not in a curated demo. Ask specifically how the platform performs during network congestion, not just on a clean fibre line in a demo environment.' },
      { type: 'p', text: 'It’s worth testing this yourself rather than relying on a vendor’s claim. Call the demo line from a mobile connection during a typically busy period — lunchtime or early evening — rather than from an office fibre line during a quiet morning slot. A platform that only performs well under ideal conditions will show its weaknesses immediately under real network load, which is exactly the condition your customers will actually be calling in.' },
      { type: 'h2', text: '2. Genuine multilingual coverage, not just translation' },
      { type: 'p', text: 'Confirm which South African languages are natively supported — not translated after the fact — and specifically ask whether the agent can handle a language switch mid-call, since that’s how South Africans actually speak. Request a live demo in the languages your customers actually use, not just English, and listen for natural pacing and correct pronunciation rather than a stilted, obviously-translated delivery.' },
      { type: 'image', caption: 'Checklist graphic covering criteria 1–3: latency, language coverage, and network compatibility' },
      { type: 'h2', text: '3. POPIA compliance built in, not bolted on' },
      { type: 'p', text: 'As covered in our POPIA guide, this is non-negotiable for any business handling customer calls. Ask directly where call data is stored, what the default retention period is, whether disclosure and opt-out are built into the standard call flow, and whether the platform can produce an audit trail on request. A vendor that treats these as configurable defaults rather than an afterthought is one that understands the market it’s selling into.' },
      { type: 'h2', text: '4. Ownership of your data and your setup' },
      { type: 'p', text: 'Some platforms lock your call scripts, transcripts and configuration inside their system with no meaningful export option — which becomes a real problem if you ever want to switch providers or self-host for compliance reasons. Ask whether you retain full ownership and portability of your data and configuration, and whether a self-hosted or dedicated-instance option exists for businesses in regulated industries that need tighter control.' },
      { type: 'p', text: 'This question matters more than it first appears. A business that builds a year of call scripts, FAQ knowledge and customer preferences into a platform, only to find that data is non-exportable, is effectively locked in regardless of what the contract says about cancellation terms. Ask for a written answer on data export format and turnaround time before you sign, not after you decide to leave.' },
      { type: 'h2', text: '5. Integration with how your business already runs' },
      { type: 'bullets', items: ['Does it integrate with your existing calendar or booking system, or does it require you to change how you schedule?', 'Can it look up information from your own documents and knowledge base (RAG), or does it only work from a fixed script?', 'Does it forward or escalate to a human seamlessly when a call needs one, without the caller having to repeat themselves?', 'Can you keep your existing phone number, or does adoption require porting to a new one?'] },
      { type: 'image', caption: 'Icons showing integration points: calendar, documents/knowledge base, human handoff, existing phone number' },
      { type: 'p', text: 'The businesses that get the most value from an AI voice agent are usually the ones that resist the urge to rebuild their operations around the new tool. The best platforms fit into your existing calendar, your existing number, and your existing escalation path — the burden of adaptation should sit with the software, not with your team.' },
      { type: 'h2', text: '6. Pricing that matches how you’ll actually use it' },
      { type: 'p', text: 'Usage-based pricing (per-minute or per-call) suits businesses with variable or seasonal call volume; flat-fee pricing suits businesses with steady, predictable volume. Watch for hidden costs — setup fees, per-language surcharges, or premium pricing for after-hours coverage that should reasonably be included by default. Ask for a total cost projection at your actual expected call volume, not just the advertised starting price.' },
      { type: 'image', caption: 'Simple visual comparing usage-based vs flat-fee pricing models, with a "watch for hidden costs" callout' },
      { type: 'h2', text: '7. Reliability, uptime and what happens when something breaks' },
      { type: 'p', text: 'A voice agent that answers every call brilliantly except during its own outages isn’t solving the missed-call problem — it’s relocating it. Ask for a documented uptime guarantee, what the fallback behaviour is during an outage (does the call ring through to a human, or simply fail?), and what support looks like when something goes wrong on a Friday evening. A platform without a clear answer to "what happens when your system is down" is asking you to take that risk on faith.' },
      { type: 'p', text: 'It’s worth asking, too, how the vendor itself finds out about an outage — do they detect it proactively, or do they rely on you to notice and report it? A vendor with real-time monitoring and a documented incident-response process is fundamentally different from one that finds out about a problem the same way you do: from an angry customer.' },
      { type: 'h2', text: 'Red flags to watch for during a demo' },
      { type: 'bullets', items: ['The demo only runs in English, and language-switching requests are deflected or scheduled for "a follow-up call."', 'Latency figures are described as "fast" or "low" without specific millisecond numbers on named South African networks.', 'POPIA and data-residency questions get a marketing answer rather than a specific, technical one.', 'There’s no clear answer on data portability if you decide to leave the platform later.', 'Pricing requires a sales call to understand rather than being available upfront in writing.'] },
      { type: 'h2', text: 'Running a pilot before you commit' },
      { type: 'p', text: 'Most reputable vendors will support a limited pilot — a single phone line or a defined subset of call types — before a full rollout. Use that window deliberately: route a genuinely representative slice of your call volume through it, including after-hours calls and at least one call in each language your customers use, and track the same close-rate and satisfaction metrics you’d use to judge a new hire. A two-to-four-week pilot is usually enough to separate a platform that performs well in a sales demo from one that performs well on your actual phone line.' },
      { type: 'p', text: 'Keep a simple log during the pilot: how many calls were handled fully by the agent, how many were escalated to a human and why, and whether any callers complained about not understanding the agent or being misunderstood. That log becomes your evidence for the full-rollout decision, and it also gives you a documented baseline to hold the vendor accountable to once you’re a paying, non-pilot customer.' },
      { type: 'h2', text: 'A simple evaluation framework' },
      { type: 'p', text: 'Score each vendor you’re considering from 1–5 across latency, language coverage, POPIA compliance, data ownership, integration fit, pricing fit and reliability. A platform that scores well across all seven is a safe choice; one that scores brilliantly on two and poorly on the rest is a platform optimised for a demo, not for your business. Share the scorecard with whoever else is involved in the decision — a second perspective often catches a weak score one person talked themselves out of noticing.' },
      { type: 'table', headers: ['Criterion', 'What to Ask', 'Score (1–5)'], rows: [['Latency', 'Measured response time on Vodacom/MTN/Telkom/Cell C?', '__'], ['Language coverage', 'Native support and mid-call switching in your languages?', '__'], ['POPIA compliance', 'Data residency, retention, disclosure built in by default?', '__'], ['Data ownership', 'Full export and portability of scripts and transcripts?', '__'], ['Integration fit', 'Works with your calendar, docs and existing number?', '__'], ['Pricing fit', 'Total cost projected at your actual call volume?', '__'], ['Reliability', 'Documented uptime and outage fallback behaviour?', '__']] },
      { type: 'image', caption: 'A simple 1–5 scorecard table graphic across the seven evaluation criteria, ready to fill in per vendor' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'The right AI voice receptionist for a South African SME isn’t necessarily the one with the flashiest demo — it’s the one that performs on local networks, genuinely handles the languages your customers speak, meets POPIA head-on, and fits into how your business already runs. Take the time to test these seven criteria directly, run a proper pilot, and rely on measured results rather than a vendor’s marketing claims. The right choice becomes obvious fast once you do.' },
      { type: 'p', text: 'And once you’ve made the choice, don’t treat it as a set-and-forget decision. Revisit the same seven criteria every six to twelve months — vendors update their models, expand language coverage, and sometimes change their data-handling defaults without much fanfare. A platform that was the right choice at signup is worth re-checking periodically to make sure it still is.' }
    ],
    faqs: [
      { q: 'How long should a pilot period run before committing?', a: 'Two to four weeks is usually enough, provided you route a genuinely representative slice of call volume through it, including after-hours calls and at least one call in each language your customers use.' },
      { q: 'What\'s a reasonable price range for an AI voice receptionist in South Africa?', a: 'Pricing varies by vendor and model (usage-based versus flat-fee), but it should be a fraction of a single receptionist’s fully loaded salary at comparable call volumes — get a total cost projection at your actual expected volume before comparing options.' },
      { q: 'Do I need technical staff to set this up?', a: 'No — most platforms are designed to be configured in plain language by a business owner or manager, not a developer. Setup is typically measured in hours, not weeks.' },
      { q: 'What should I do if a vendor won\'t share latency figures?', a: 'Treat it as a red flag. A vendor confident in its performance on South African networks will give you specific, measured millisecond figures on named networks rather than a vague "fast" or "low latency" claim.' },
      { q: 'Can I switch vendors later without losing my data?', a: 'You should be able to — confirm data export format and portability before you sign, not after you decide to leave, since some platforms make switching difficult by design.' }
    ]
  },
];

export const credits = [
  { amount: '$20', note: 'Try it out', minutes: '~130–200 minutes' },
  { amount: '$50', note: 'Most popular', minutes: '~330–500 minutes' },
  { amount: '$100', note: 'Best value', minutes: '~660–1,000 minutes' },
];

export const useCases = [
  {
    tag: '01',
    title: 'Inbound',
    desc: 'Answer every incoming call on the first ring — book appointments, qualify leads, and take messages without a single caller hitting voicemail.',
  },
  {
    tag: '02',
    title: 'After-hours',
    desc: 'Cover nights, weekends, and holidays so every caller is answered on the first ring — no voicemail, no missed patients or leads.',
  },
  {
    tag: '03',
    title: 'Global',
    desc: 'Greet callers in their own language and switch mid-conversation, so one agent covers every market on every line.',
  },
];

export const testimonials = [
  {
    quote: 'Our collections reminders go out consistently and compliantly. The cost per resolved call dropped sharply.',
    name: 'George Harrison',
    role: 'Collections Director · Coastal Credit, Durban',
    metric: '',
  },
  {
    quote: 'Setup took an afternoon. The isiZulu and Afrikaans handling is genuinely natural, and POPIA was sorted out of the box.',
    name: 'Sophia Mitchell',
    role: 'COO · Atlantic Pay, Cape Town',
    metric: '',
  },
  {
    quote: "We answer every after-hours call now, in the customer's own language. Our missed-call rate basically disappeared.",
    name: 'James Anderson',
    role: 'Head of Customer Care · Meridian Contact Group, Johannesburg',
    metric: '',
  },
];

export const faqs = [
  {
    q: 'Does it really sound human?',
    a: 'Yes. NIXXY uses native audio-to-audio processing with sub-300ms responses, so there are no robotic pauses. Callers can interrupt and the agent keeps up naturally.',
  },
  {
    q: 'Do I need to change my phone number?',
    a: 'No. Keep your existing numbers and carrier. You simply forward your line to NIXXY and you can route back to a human anytime.',
  },
  {
    q: 'How does it answer questions about my business?',
    a: 'You connect your own knowledge — FAQs, documents, menus, policies — and the agent answers from that using retrieval, so responses stay accurate and on-brand.',
  },
  {
    q: 'Can it book appointments?',
    a: 'It books, reschedules, and confirms directly on your connected calendar, qualifies leads, takes messages, and warm-transfers when a human is needed.',
  },
  {
    q: 'What does it cost?',
    a: 'Simple monthly plans starting at $31/mo. Each plan includes voice agents and minutes; if you go over, you are billed per second at your plan\'s effective rate (as low as $0.11/min).',
  },
  {
    q: 'How fast can I go live?',
    a: 'Most teams launch the same day: design the agent, connect your knowledge, forward your number. No new hardware or long migrations.',
  },
];

export const homeFaqs = [
  {
    q: 'Do your AI voice agents work in South African languages?',
    a: 'Yes. Our agents speak all 11 official South African languages, including English, Afrikaans, isiZulu, isiXhosa, Sesotho, Setswana and Sepedi, and can switch to the caller’s preferred language automatically during a call.',
  },
  {
    q: 'Are AI calling agents POPIA-compliant in South Africa?',
    a: 'Our platform is built for POPIA. It includes consent capture, opt-out handling, call-recording disclosure, data localisation and an audit trail, plus ICASA-compliant connectivity over licensed South African carriers. We recommend a quick review with your compliance team before launching outbound campaigns.',
  },
  {
    q: 'Which networks do you support?',
    a: 'Inbound and outbound calls run over Vodacom, MTN, Telkom and Cell C. You can provision local geographic and national numbers, or port your existing number through our SIP trunk.',
  },
  {
    q: 'How quickly can we go live?',
    a: 'Most teams build and test an agent in hours and go live on a South African number the same day, once connectivity and POPIA consent settings are in place.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing is wallet-based in Rands, with a per-minute rate plus included minutes shown up front, local numbers from a low monthly fee, and POPIA compliance standard on every plan.',
  },
  {
    q: 'Do I need an engineering team?',
    a: 'No. You design the agent in plain English, connect your documents and tools, test it in a sandbox, and go live. No code required.',
  },
];

export const integrations = [
  {
    cat: 'Integrations',
    title: 'Scheduling & calendars',
    desc: 'Native Google, Outlook, and Calendly integrations. Book, reschedule, and confirm — all over voice.',
    widget: 'scheduling',
  },
  {
    cat: 'Integrations',
    title: 'CRM sync',
    desc: 'Every call logs to HubSpot, Salesforce, or Zoho automatically, with transcripts and outcomes attached.',
    widget: 'crm',
  },
  {
    cat: 'Integrations',
    title: 'WhatsApp & SMS',
    desc: 'Send confirmations, reminders, and follow-ups automatically the moment a call ends.',
    widget: 'messaging',
  },
  {
    cat: 'Integrations',
    title: 'Zapier & webhooks',
    desc: 'Trigger any workflow in 5,000+ apps the moment a call ends — no engineering required.',
    widget: 'automation',
  },
];
