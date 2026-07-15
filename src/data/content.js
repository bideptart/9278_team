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
  },
  {
    name: 'Legal services', desc: 'Intake new clients 24/7, screen matters, and book consultations without tying up paralegals.',
    sample: { caller: 'I need to talk to someone about a contract dispute.', agent: 'I can set up a consultation. Are mornings or afternoons better?' },
  },
  {
    name: 'Healthcare & dental', desc: 'Book, reschedule, and confirm appointments, answer insurance questions, and triage after hours.',
    sample: { caller: 'Can I move my cleaning to next week?', agent: "Done — you're rebooked for Tuesday at 9:30am." },
  },
  {
    name: 'Home services', desc: 'Answer every job call, dispatch urgent requests, and quote standard work while your crews are on site.',
    sample: { caller: "My water heater's leaking — can someone come today?", agent: "I'm flagging this as urgent and dispatching a tech now." },
  },
  {
    name: 'Restaurants', desc: 'Take reservations and to-go orders, answer hours and menu questions, and stop missing the dinner rush.',
    sample: { caller: 'Table for four tonight around 7?', agent: 'I have 7:15 on the patio — want me to hold it?' },
  },
  {
    name: 'Automotive', desc: 'Schedule service, answer parts and pricing questions, and follow up on quotes automatically.',
    sample: { caller: 'When can you fit me in for an oil change?', agent: "Thursday at 8am works — I'll add it to the schedule." },
  },
  {
    name: 'E-commerce & retail', desc: 'Handle order status, returns, and product questions across every line at once.',
    sample: { caller: "Where's my order? It's been a week.", agent: 'It shipped Monday — arriving tomorrow by 8pm. Want the tracking link?' },
  },
  {
    name: 'Professional services', desc: 'Qualify inbound interest, route to the right team, and book discovery calls around the clock.',
    sample: { caller: 'Do you have time for a discovery call this week?', agent: "I do — Wednesday at 3pm. I'll send a calendar invite." },
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

export const blogCategories = ['All', 'Patient Care', 'Practice Ops', 'Compliance', 'Onboarding'];

export const blogStats = [
  { value: '60+', label: 'Articles published' },
  { value: '1.8M+', label: 'Patient calls analyzed' },
  { value: '12', label: 'Contributing clinicians' },
  { value: 'Weekly', label: 'New posts' },
];

export const blogPosts = [
  {
    slug: 'after-hours-calls-cost-clinics',
    category: 'Patient Care',
    author: 'Dr. Priya Nandakumar',
    date: 'Jul 10, 2026',
    readTime: '6 min read',
    title: 'What after-hours calls are really costing your clinic',
    excerpt: 'Missed calls after 6pm aren\'t just inconvenient — they\'re lost patients. Here\'s what we found analyzing thousands of after-hours voicemails.',
  },
  {
    slug: 'ai-receptionist-vs-answering-service',
    category: 'Practice Ops',
    author: 'Marcus Bell',
    date: 'Jun 28, 2026',
    readTime: '5 min read',
    title: 'AI receptionist vs. answering service: what\'s actually different',
    excerpt: 'Both promise to pick up when you can\'t. Only one books the appointment, checks insurance, and remembers the caller next time.',
  },
  {
    slug: 'hipaa-and-your-ai-receptionist',
    category: 'Compliance',
    author: 'Elena Ruiz',
    date: 'Jun 21, 2026',
    readTime: '7 min read',
    title: 'HIPAA and your AI receptionist: what to ask before you sign',
    excerpt: 'Call recording, transcripts, and patient data all pass through your voice agent. Here\'s the compliance checklist to run before go-live.',
  },
  {
    slug: 'go-live-same-day-checklist',
    category: 'Onboarding',
    author: 'Dr. Priya Nandakumar',
    date: 'Jun 14, 2026',
    readTime: '4 min read',
    title: 'Going live the same day: a practice manager\'s checklist',
    excerpt: 'Forward your number, connect your calendar, write your greeting. Most teams are answering calls with an AI receptionist in under an hour.',
  },
  {
    slug: 'insurance-verification-calls',
    category: 'Practice Ops',
    author: 'Marcus Bell',
    date: 'Jun 5, 2026',
    readTime: '5 min read',
    title: 'Insurance verification calls: the most repetitive job at your front desk',
    excerpt: 'Coverage checks eat up hours every week. Here\'s how clinics are routing the routine questions to a voice agent and keeping staff for the hard cases.',
  },
  {
    slug: 'patient-no-shows-and-reminders',
    category: 'Patient Care',
    author: 'Elena Ruiz',
    date: 'May 30, 2026',
    readTime: '5 min read',
    title: 'Cutting no-shows without hiring another front-desk hire',
    excerpt: 'Confirmations, reschedules, and reminders handled on the same line that answers the phone — no extra headcount required.',
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
    quote: 'It picks up on the first ring at 2am and books the job. We stopped losing after-hours calls overnight.',
    name: 'Marcus Bell',
    role: 'Owner, Bell Plumbing & Heating',
    metric: '+41% booked jobs',
  },
  {
    quote: 'Callers genuinely think it\'s a person. Our front desk finally has time to handle patients in the room.',
    name: 'Dr. Priya Nandakumar',
    role: 'Practice Lead, Northgate Dental',
    metric: '58% fewer holds',
  },
  {
    quote: 'We pointed our main line at NIXXY in an afternoon. Lead response went from hours to seconds.',
    name: 'Elena Ruiz',
    role: 'Head of Sales, Vantage Realty',
    metric: '2.7x qualified leads',
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
