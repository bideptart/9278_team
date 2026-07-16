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
    name: 'Retail & E-commerce', desc: 'Order updates, returns and 24/7 support.',
    sample: { caller: "Where's my order? It's been a week.", agent: 'It shipped Monday — arriving tomorrow by 8pm. Want the tracking link?' },
  },
  {
    name: 'Banking & Insurance', desc: 'Lead qualification, premium and instalment reminders.',
    sample: { caller: 'I got a call about my premium being overdue.', agent: "Yes — it's due Friday. Want me to process the payment now, or send a reminder?" },
  },
  {
    name: 'Debt Collection', desc: 'Consistent, compliant early-stage reminder calls.',
    sample: { caller: "I know I'm behind, I just need a few more days.", agent: "No problem — I'll note that and follow up Monday. Anything else I can help with?" },
  },
  {
    name: 'BPO & Contact Centres', desc: 'Automate tier-1 queues and outbound campaigns at scale.',
    sample: { caller: "I've been on hold forever, I just want a status update.", agent: 'I can pull that up right now — no hold needed. One moment.' },
  },
  {
    name: 'Logistics', desc: 'Delivery confirmations and driver coordination.',
    sample: { caller: 'Has my delivery left the depot yet?', agent: "Yes — it's out with the driver now, arriving by 3pm." },
  },
  {
    name: 'Telecoms & Utilities', desc: 'Service queries, upgrades and outage updates.',
    sample: { caller: 'Is there an outage in my area right now?', agent: 'Yes — crews are on site, expected restore time is 6pm.' },
  },
  {
    name: 'Real Estate', desc: 'Qualify property leads and book viewings 24/7.',
    sample: { caller: 'Is the downtown loft still available to tour?', agent: 'It is — I have Saturday at 11 or 1. Shall I book one for you?' },
  },
  {
    name: 'Healthcare', desc: 'Appointment booking, reminders and patient intake.',
    sample: { caller: 'Can I move my cleaning to next week?', agent: "Done — you're rebooked for Tuesday at 9:30am." },
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

export const blogCategories = ['All'];

export const blogStats = [
  { value: '60+', label: 'Articles published' },
  { value: '1.8M+', label: 'Patient calls analyzed' },
  { value: '12', label: 'Contributing clinicians' },
  { value: 'Weekly', label: 'New posts' },
];

export const blogPosts = [];

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
