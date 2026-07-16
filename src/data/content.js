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
    price: '₹2,999',
    blurb: 'Pilot a single clinic line.',
    meta: '250 included min · ₹12/min eff. · 2 agents',
    features: [
      '2 AI voice agents',
      '250 included minutes',
      '₹12/min effective rate · ₹12/min overage',
      'Inbound patient calls',
      'Per-second billing',
      'Standard voice stack',
      'Call recording',
      'Real-time transcription',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '₹8,799',
    blurb: 'Most practices start here.',
    meta: '800 included min · ₹11/min eff. · 10 agents',
    featured: true,
    features: [
      '10 AI voice agents',
      '800 included minutes',
      '₹11/min effective rate',
      'Inbound patient calls',
      'Per-second billing',
      'Standard + premium voices',
      'Call recording',
      'Real-time transcription',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    price: '₹29,999',
    blurb: 'High-volume clinics & hospital networks.',
    meta: '3,000 included min · ₹10/min eff. · Unlimited agents',
    features: [
      'Unlimited AI voice agents',
      '3,000 included minutes',
      '₹10/min effective rate',
      'Inbound patient calls',
      'Per-second billing',
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
    readTime: '4 min read',
    body: [
      { type: 'p', text: 'A phone that rings out doesn’t just cost you one booking. It costs you the booking, the referral that customer would have made, and — increasingly — the review they leave about how hard you were to reach. For South African businesses juggling load shedding, network congestion and lean front-desk teams, the missed call isn’t an edge case. It’s a daily leak in the business.' },
      { type: 'image', caption: 'Hero image — a busy South African front desk or reception counter with a phone ringing unanswered' },
      { type: 'h2', text: 'Why the problem is bigger here than the global averages suggest' },
      { type: 'p', text: 'Most call-answering benchmarks are built around US and European contact centres with dedicated headcount and predictable call volumes. South African businesses operate under different pressure: single-receptionist front desks covering multiple roles, mobile networks that get congested at peak times, and customers who call rather than email because data costs still shape behaviour. Add after-hours enquiries from customers who only have time to phone in the evening, and the gap between "open for business" and "actually answering the phone" widens fast.' },
      { type: 'p', text: 'Industry surveys across retail, healthcare and financial services consistently find that a large share of inbound calls to small and mid-sized businesses go unanswered during business hours — not because the business is closed, but because whoever would answer is already on another call, serving a walk-in customer, or simply hasn’t got to the desk yet. Every one of those calls represents a customer who was ready to spend money at the exact moment nobody picked up.' },
      { type: 'h2', text: 'What "missed" actually costs you' },
      { type: 'bullets', items: ['The immediate booking or sale — a caller who wanted an appointment, a quote, or a table tonight, not next week.', 'The compounding cost of the second call — most callers who reach voicemail don’t call back; they call your competitor instead.', 'Reputation damage — "nobody answers the phone" is one of the most common complaints in local business reviews, and it’s one of the few complaints that’s entirely preventable.', 'Compliance exposure — in regulated sectors like collections and insurance, missed or mishandled calls can mean missed disclosure windows and slower resolution times.', 'Staff burnout — a receptionist fielding a constant backlog of missed-call voicemails is doing the stressful part of the job twice.'] },
      { type: 'image', caption: 'A simple bar chart or infographic comparing "calls received" vs "calls answered" across a typical business day' },
      { type: 'h2', text: 'A short example' },
      { type: 'p', text: 'Take a mid-sized dental practice with two reception lines. On an average day it receives around 90 calls — bookings, reschedules, billing queries, and new-patient enquiries. During peak morning hours, when the desk is also checking patients in, roughly a third of those calls go to voicemail. If even half of the callers who hit voicemail were new patients looking to book, and the average patient is worth several thousand rand a year across cleanings, treatments and referrals, the practice isn’t losing a phone call — it’s losing a five-figure sum annually, quietly, without ever showing up on a P&L line.' },
      { type: 'image', caption: 'Illustrative photo — a reception desk at a clinic or small business, phone and appointment book visible' },
      { type: 'h2', text: 'What "answered" needs to mean in 2026' },
      { type: 'p', text: 'Answering the phone isn’t enough on its own. To actually capture the value of an inbound call, a business needs to answer on the first ring, in the caller’s preferred language, with enough context to either resolve the query or book the next step immediately. That’s a hard bar for a stretched front-desk team to hit consistently, especially outside standard hours — which is exactly when a growing share of consumer calls now happen.' },
      { type: 'image', caption: 'Split visual: "Without a voice agent" (missed call, frustrated customer) vs "With a voice agent" (call answered, booking confirmed)' },
      { type: 'h2', text: 'Where AI voice receptionists change the economics' },
      { type: 'p', text: 'This is the gap AI voice receptionists are built to close. Instead of a call falling through to voicemail when the desk is busy, an AI agent answers immediately, in the language the caller starts speaking in, and either resolves the query or books it directly into the calendar. Because the agent can hold unlimited simultaneous calls, a busy period that would previously overflow into missed calls becomes just another set of answered calls — no queue, no voicemail, no lost booking.' },
      { type: 'p', text: 'The economics are straightforward: the monthly cost of an AI voice agent is typically a fraction of even one missed high-value booking, and it scales without the hiring, training and after-hours premium that comes with adding human headcount. For businesses where the phone is still the primary channel — clinics, collections teams, real estate agencies, contact centres — that’s not a marginal improvement. It’s the difference between a front desk that copes and one that actually captures every opportunity that calls in.' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'Every unanswered call is a measurable, recoverable cost — not an unavoidable one. Businesses that treat call coverage as seriously as they treat stock levels or staffing rosters consistently outperform competitors who still think of a missed call as a minor inconvenience. In a market as call-driven as South Africa’s, closing that gap is one of the highest-leverage changes a business can make this year.' },
      { type: 'image', caption: 'Closing visual — a phone being answered on the first ring, checkmark or "booked" confirmation overlay' }
    ],
  },
  {
    slug: 'popia-ai-voice-agents',
    title: 'POPIA and AI Voice Agents: A Compliance Checklist for South African Businesses',
    excerpt: 'Every phone call to your business is a data-processing event. The caller’s number, what they say, and often a recording of the conversation itself all fall under the…',
    category: 'Compliance',
    author: 'KallUs Team',
    date: 'Jul 7, 2026',
    readTime: '4 min read',
    body: [
      { type: 'p', text: 'Every phone call to your business is a data-processing event. The caller’s number, what they say, and often a recording of the conversation itself all fall under the Protection of Personal Information Act (POPIA) — and that doesn’t change because the voice answering the phone is artificial rather than human. If anything, deploying an AI voice agent raises the compliance bar, because now there’s a system, not just a person, making decisions about how that data is captured and used.' },
      { type: 'image', caption: 'Hero image — abstract representation of a phone call with a data/shield icon, South African flag colours subtly present' },
      { type: 'h2', text: 'What POPIA actually requires on a phone call' },
      { type: 'p', text: 'POPIA doesn’t single out AI, but its core principles apply directly to any automated system handling calls: processing must be lawful and for a specific, defined purpose; the person being recorded must be informed that they are being recorded and why; personal information must be kept no longer than necessary; and reasonable technical safeguards must protect the data from loss or unauthorised access. For a voice agent, this translates into a handful of concrete obligations rather than abstract principles.' },
      { type: 'h2', text: 'The compliance checklist' },
      { type: 'bullets', items: ['Clear disclosure at the start of the call — the caller must be told they’re speaking with an AI system and that the call may be recorded, before any personal information is captured.', 'A working opt-out — callers need a straightforward way to be transferred to a human or to decline recording, and that request has to be honoured, not just offered.', 'Purpose limitation — the agent should only capture and retain information relevant to resolving the caller’s query, not open-ended conversational data "just in case".', 'Defined retention periods — call transcripts and recordings need a retention policy, with automatic deletion once the operational or legal need has passed.', 'Data residency — knowing where recordings and transcripts are actually stored, and whether that involves cross-border transfer, which triggers additional POPIA conditions.', 'Access and correction rights — a process for a caller to request what data was captured about them, and to have it corrected or deleted.'] },
      { type: 'image', caption: 'Checklist-style graphic summarising the six compliance points above' },
      { type: 'h2', text: 'Where most AI voice deployments actually fall short' },
      { type: 'p', text: 'In practice, the gap is rarely the technology — it’s the defaults. Many voice AI platforms are built for markets without a POPIA-equivalent regime and treat disclosure, retention and data residency as optional configuration rather than a baseline requirement. A business adopting one of these platforms without checking those settings can end up POPIA non-compliant on day one, even though the underlying AI is technically sound. The fix isn’t avoiding AI — it’s choosing a platform where compliant defaults are built in rather than bolted on.' },
      { type: 'h2', text: 'Where AI voice agents actually strengthen compliance' },
      { type: 'p', text: 'Handled correctly, an AI voice agent can be more consistently compliant than a busy human team. A person under pressure might skip the recording disclosure on a hectic Monday morning; a properly configured agent delivers it on every single call, without exception, and logs that it did. Retention policies that would require manual enforcement across a team of receptionists become a single configuration setting applied uniformly. And because every call is transcribed by default, a business has a complete, searchable audit trail if a regulator or a customer ever asks what was said and agreed on a call — something most human-staffed call centres can’t produce on demand.' },
      { type: 'image', caption: 'Side-by-side comparison: manual compliance (inconsistent, hard to audit) vs automated compliance (consistent, logged, auditable)' },
      { type: 'h2', text: 'Questions to ask before you sign' },
      { type: 'p', text: 'Before committing to any AI voice platform, ask directly: where is call data stored, and does that involve a transfer outside South Africa? What is the default retention period, and can it be shortened? Does the disclosure script meet POPIA’s informed-consent standard, and can it be customised for regulated industries like collections or healthcare? Is there a documented process for handling a data subject access request? A vendor that can answer these clearly and specifically — not with a generic "we take privacy seriously" — is one that has actually built compliance into the product rather than treating it as a sales talking point.' },
      { type: 'image', caption: 'A business owner reviewing a vendor contract or compliance checklist on a laptop' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'POPIA compliance for voice AI isn’t a blocker to adoption — it’s a due-diligence exercise that takes an afternoon to work through properly. Businesses that do that work upfront get the efficiency of automated call handling without inheriting new regulatory risk, and often end up more auditable than they were with a fully human front desk.' },
      { type: 'image', caption: 'Closing visual — a shield or compliance badge alongside a phone icon, conveying "protected call data"' }
    ],
  },
  {
    slug: 'ai-voice-vs-call-centre-cost',
    title: 'AI Voice Receptionists vs Traditional Call Centres: What SA Businesses Actually Save',
    excerpt: 'When call volume outgrows a single front-desk person, the traditional next step is obvious: hire another receptionist, or outsource to a call centre. It’s also,…',
    category: 'Business Ops',
    author: 'KallUs Team',
    date: 'Jun 30, 2026',
    readTime: '4 min read',
    body: [
      { type: 'p', text: 'When call volume outgrows a single front-desk person, the traditional next step is obvious: hire another receptionist, or outsource to a call centre. It’s also, increasingly, the wrong first move. Before adding headcount, it’s worth actually running the numbers on what a human answering line costs versus what an AI voice agent costs to handle the same volume — because the gap is larger than most businesses expect.' },
      { type: 'image', caption: 'Hero image — a split-screen concept: a traditional call centre floor on one side, a clean AI dashboard/waveform on the other' },
      { type: 'h2', text: 'The real cost of a human answering line' },
      { type: 'p', text: 'A single receptionist’s salary is only the starting number. Layer on UIF and other statutory contributions, recruitment and onboarding costs, ongoing training (especially for multilingual coverage), paid leave and sick-day cover, and the inevitable cost of turnover in a role with historically high attrition, and the effective cost per answered call climbs well above what the base salary implies. Outsourced call centres remove the direct-employment overhead but replace it with per-seat or per-minute fees that scale linearly with volume — there’s rarely a discount for growth, and after-hours or multilingual coverage usually carries a premium.' },
      { type: 'h2', text: 'The AI voice agent cost structure' },
      { type: 'p', text: 'AI voice receptionists are typically priced on a subscription plus usage-minutes model, with no separate line item for recruitment, training, benefits, or after-hours premiums — the agent works the same at 2pm and 2am. Setup is a one-time cost measured in hours, not weeks, since the "training" is describing your business in plain language rather than running a new hire through weeks of onboarding.' },
      { type: 'h2', text: 'Side-by-side comparison' },
      { type: 'bullets', items: ['Headcount cost: human line requires salary + statutory contributions + benefits, per person, per line. AI agent requires a single subscription regardless of call volume growth.', 'Scaling for peak volume: human line needs additional hires or overtime to cover surges; AI agent handles unlimited simultaneous calls at the same cost.', 'After-hours and weekend coverage: human line requires shift premiums or a separate night team; AI agent covers 24/7 by default at no extra cost.', 'Multilingual coverage: human line needs to hire or train for each language; AI agent switches languages mid-call without additional headcount.', 'Ramp time: a new human hire typically needs several weeks to reach full competence; an AI agent is production-ready within days of setup.', 'Consistency: human performance varies by person, shift and day; AI agent delivers the same script quality and compliance disclosure on every call.'] },
      { type: 'image', caption: 'Simple cost-comparison table graphic: monthly cost of 1 receptionist vs outsourced call centre vs AI voice agent, at equivalent call volume' },
      { type: 'h2', text: 'What AI still doesn’t replace' },
      { type: 'p', text: 'This isn’t a case for removing humans entirely, and a credible vendor won’t claim otherwise. Complex complaint resolution, emotionally sensitive conversations, and genuinely novel requests that fall outside a defined script still need a human decision-maker — and a well-built AI agent is designed to recognise those moments and route the call to one, rather than trying to force every conversation through a script. The realistic model isn’t "AI instead of people"; it’s AI handling the high-volume, repeatable 80% of calls — bookings, FAQs, status checks, appointment changes — so the humans on the team spend their time on the 20% that actually needs judgement.' },
      { type: 'image', caption: 'A human team member handling an escalated or complex call, calm and focused — representing the 20% AI hands off' },
      { type: 'h2', text: 'Where the savings show up fastest' },
      { type: 'p', text: 'Businesses see the clearest return in roles that are call-heavy but low-complexity: appointment scheduling, order status enquiries, basic collections reminders, and after-hours triage. These are exactly the calls that currently either overflow to voicemail or tie up a receptionist who could be doing higher-value work. Redirecting that volume to an AI agent doesn’t just cut cost — it frees the human team to focus on retention, upsells, and the conversations that genuinely need a person.' },
      { type: 'image', caption: '"Where the savings show up" visual — a funnel or pie chart showing the ~80% routine calls vs ~20% complex calls split' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'For most South African SMEs, the choice isn’t AI versus people — it’s AI handling the calls that don’t need a person, so the people on the team can focus on the calls that do. Run the comparison on your own call volume and the case tends to make itself: the cost of covering every call with human headcount rises in a straight line, while the cost of an AI voice agent barely moves.' },
      { type: 'image', caption: 'Closing visual — a rising cost line for human headcount vs a flat cost line for AI, converging toward a "savings" callout' }
    ],
  },
  {
    slug: 'multilingual-ai-voice-agents',
    title: 'Multilingual by Default: How AI Voice Agents Handle isiZulu, Afrikaans and isiXhosa Calls',
    excerpt: 'South Africa has eleven official languages, and real conversations rarely stay in just one of them. A caller might open in isiZulu, switch to English mid-sentence to…',
    category: 'Product',
    author: 'KallUs Team',
    date: 'Jun 23, 2026',
    readTime: '3 min read',
    body: [
      { type: 'p', text: 'South Africa has eleven official languages, and real conversations rarely stay in just one of them. A caller might open in isiZulu, switch to English mid-sentence to clarify a technical term, and slip back into isiZulu to finish the thought. Any system built to answer South African phones has to handle that fluidly — not with a menu of "press 1 for English, press 2 for Afrikaans," but the way a genuinely bilingual receptionist would: by simply following the conversation wherever it goes.' },
      { type: 'image', caption: 'Hero image — a phone/call icon surrounded by speech bubbles in different languages, representing multilingual conversation' },
      { type: 'h2', text: 'Why the old IVR model doesn’t match how people actually talk' },
      { type: 'p', text: 'Traditional phone menus force a single, upfront language choice before the conversation even starts — and they break the moment a caller needs to switch mid-call, which happens constantly in multilingual households and workplaces. A caller who starts in Afrikaans but needs to read out an English product name, or one who begins in English but is more comfortable explaining a medical symptom in isiXhosa, gets stuck in a system that was never designed for how South Africans actually speak on the phone.' },
      { type: 'h2', text: 'How native-audio AI models handle this differently' },
      { type: 'p', text: 'Modern voice AI built on native-audio processing doesn’t transcribe speech to text, translate it, and generate a scripted reply — it listens and responds in audio directly, which means it can track a language switch in real time instead of visibly stalling to "figure out" what changed. Practically, that means a caller can open in isiZulu, ask a follow-up in English, and get a response in whichever language they just used, without ever being asked to restart or select an option from a menu.' },
      { type: 'image', caption: 'Example call transcript graphic — caller switching from isiZulu to English mid-conversation, agent following naturally' },
      { type: 'h2', text: 'A short example' },
      { type: 'p', text: 'A caller opens with "Sawubona, ngingathola usizo ngomkhiqizo?" (Hello, can I get help with a product?). The agent responds in isiZulu, confirming it can help. Midway through, the caller switches: "Actually, can we switch to English?" The agent doesn’t pause, apologise, or restart the flow — it simply continues in English from that point forward: "Of course. How can I help you today?" To the caller, this feels less like navigating a system and more like talking to someone who happens to speak both languages well. That’s the bar a good multilingual AI agent needs to clear.' },
      { type: 'h2', text: 'Where this matters most' },
      { type: 'bullets', items: ['Healthcare — patients describing symptoms are more accurate and more comfortable in their first language, which directly affects triage quality.', 'Debt collection and financial services — clear, in-language communication is not just good practice, it’s a compliance safeguard against disputes over what was disclosed or agreed.', 'Retail and e-commerce — a customer who can ask about a product in the language they think in converts at a noticeably higher rate than one navigating a menu in their second language.', 'Real estate and property — buyers and tenants often prefer to negotiate sensitive details like budget and timelines in their home language.'] },
      { type: 'image', caption: 'Icons representing the four industries above, arranged in a simple grid' },
      { type: 'h2', text: 'Beyond translation: getting tone and register right' },
      { type: 'p', text: 'Language coverage on its own isn’t enough — a good agent also needs to match tone and formality to context. A collections call requires a calm, respectful register regardless of language; a retail enquiry can be warmer and more casual. Well-built voice agents carry that tone consistently across every language they operate in, rather than defaulting to a stiff, literal-translation voice the moment a caller switches away from English.' },
      { type: 'image', caption: 'Visual contrasting tone — a calm, formal collections call vs a warm, casual retail enquiry, same agent adapting register' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'Multilingual support isn’t a nice-to-have feature for South African businesses — it’s the baseline expectation of the market they operate in. An AI voice agent that treats language switching as a first-class, real-time capability rather than a static menu choice will consistently outperform — in caller satisfaction and in conversion — any system that forces a single-language conversation on a genuinely multilingual country.' },
      { type: 'image', caption: 'Closing visual — South African flag colours with speech-bubble icons in multiple languages converging into one conversation' }
    ],
  },
  {
    slug: 'buyers-guide-ai-voice-receptionist',
    title: 'How to Choose an AI Voice Receptionist: A Buyer’s Guide for South African SMEs',
    excerpt: 'The AI voice receptionist market has grown quickly, and with growth comes a wide spread in quality — from genuinely production-ready platforms to thin wrappers around…',
    category: 'Buyer\'s Guide',
    author: 'KallUs Team',
    date: 'Jun 16, 2026',
    readTime: '4 min read',
    body: [
      { type: 'p', text: 'The AI voice receptionist market has grown quickly, and with growth comes a wide spread in quality — from genuinely production-ready platforms to thin wrappers around generic, US-built voice models that stumble on South African accents, networks and compliance requirements. For a business owner evaluating options for the first time, it’s hard to tell the difference from a demo alone. This guide covers the criteria that actually predict how a platform performs once it’s answering real calls.' },
      { type: 'image', caption: 'Hero image — a decision-making or checklist visual, business owner comparing options on a laptop or tablet' },
      { type: 'h2', text: '1. Latency on South African networks' },
      { type: 'p', text: 'A voice agent that takes two seconds to respond feels broken to a caller, even if the eventual answer is correct — natural conversation has response gaps measured in a few hundred milliseconds, not seconds. Ask any vendor for real, measured latency figures on Vodacom, MTN, Telkom and Cell C specifically, not just a general claim of "low latency." Platforms built and tested primarily on US or European networks often perform noticeably worse on South African mobile infrastructure, and that gap only shows up under real call conditions, not in a curated demo.' },
      { type: 'h2', text: '2. Genuine multilingual coverage, not just translation' },
      { type: 'p', text: 'Confirm which South African languages are natively supported — not translated after the fact — and specifically ask whether the agent can handle a language switch mid-call, since that’s how South Africans actually speak. Request a live demo in the languages your customers actually use, not just English, and listen for natural pacing and correct pronunciation rather than a stilted, obviously-translated delivery.' },
      { type: 'image', caption: 'Checklist graphic covering criteria 1–3: latency, language coverage, and network compatibility' },
      { type: 'h2', text: '3. POPIA compliance built in, not bolted on' },
      { type: 'p', text: 'As covered in our POPIA guide, this is non-negotiable for any business handling customer calls. Ask directly where call data is stored, what the default retention period is, whether disclosure and opt-out are built into the standard call flow, and whether the platform can produce an audit trail on request. A vendor that treats these as configurable defaults rather than an afterthought is one that understands the market it’s selling into.' },
      { type: 'h2', text: '4. Ownership of your data and your setup' },
      { type: 'p', text: 'Some platforms lock your call scripts, transcripts and configuration inside their system with no meaningful export option — which becomes a real problem if you ever want to switch providers or self-host for compliance reasons. Ask whether you retain full ownership and portability of your data and configuration, and whether a self-hosted or dedicated-instance option exists for businesses in regulated industries that need tighter control.' },
      { type: 'h2', text: '5. Integration with how your business already runs' },
      { type: 'bullets', items: ['Does it integrate with your existing calendar or booking system, or does it require you to change how you schedule?', 'Can it look up information from your own documents and knowledge base (RAG), or does it only work from a fixed script?', 'Does it forward or escalate to a human seamlessly when a call needs one, without the caller having to repeat themselves?', 'Can you keep your existing phone number, or does adoption require porting to a new one?'] },
      { type: 'image', caption: 'Icons showing integration points: calendar, documents/knowledge base, human handoff, existing phone number' },
      { type: 'h2', text: '6. Pricing that matches how you’ll actually use it' },
      { type: 'p', text: 'Usage-based pricing (per-minute or per-call) suits businesses with variable or seasonal call volume; flat-fee pricing suits businesses with steady, predictable volume. Watch for hidden costs — setup fees, per-language surcharges, or premium pricing for after-hours coverage that should reasonably be included by default. Ask for a total cost projection at your actual expected call volume, not just the advertised starting price.' },
      { type: 'image', caption: 'Simple visual comparing usage-based vs flat-fee pricing models, with a "watch for hidden costs" callout' },
      { type: 'h2', text: 'A simple evaluation framework' },
      { type: 'p', text: 'Score each vendor you’re considering from 1–5 across latency, language coverage, POPIA compliance, data ownership, integration fit and total cost at your volume. A platform that scores well across all six is a safe choice; one that scores brilliantly on two and poorly on the rest is a platform optimised for a demo, not for your business.' },
      { type: 'image', caption: 'A simple 1–5 scorecard table graphic across the six evaluation criteria, ready to fill in per vendor' },
      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: 'The right AI voice receptionist for a South African SME isn’t necessarily the one with the flashiest demo — it’s the one that performs on local networks, genuinely handles the languages your customers speak, meets POPIA head-on, and fits into how your business already runs. Take the time to test these six criteria directly rather than relying on a vendor’s marketing claims, and the right choice becomes obvious fast.' }
    ],
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
