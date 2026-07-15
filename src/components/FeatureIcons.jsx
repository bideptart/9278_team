// Inline stroke icons for the Features page (capability cards + integrations).
// Kept local (no icon dependency) and inherit colour via currentColor.

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
  className: 'fx-icon',
};

/* Human-sounding voice — stopwatch */
const Stopwatch = () => (
  <svg {...base}>
    <circle cx="12" cy="13.5" r="7.5" />
    <path d="M12 10v3.5l2.2 2.2" />
    <path d="M9.5 2h5M12 2v2.5" />
  </svg>
);

/* Speaks their language — globe */
const Globe = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
    <path d="M12 3c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21c-2.4-2.4-3.6-5.4-3.6-9S9.6 5.4 12 3z" />
  </svg>
);

/* Talk over it, anytime — conversation bubble */
const Chat = () => (
  <svg {...base}>
    <path d="M20.5 11.5a7.5 7.5 0 0 1-7.5 7.5H8.4L4 21.8v-4.6a7.5 7.5 0 0 1 4.4-13.2h4.6a7.5 7.5 0 0 1 7.5 7.5z" />
    <path d="M8.5 10h7M8.5 13.5h4.5" />
  </svg>
);

/* Never a busy signal — concurrency grid */
const Grid = () => (
  <svg {...base}>
    <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
  </svg>
);

/* Books and routes / scheduling — calendar */
const Calendar = () => (
  <svg {...base}>
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

/* Knows your business — book */
const Book = () => (
  <svg {...base}>
    <path d="M4 4.5A2 2 0 0 1 6 2.5h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 4.5v16M8 7h7M8 10.5h7" />
  </svg>
);

/* Bring your own numbers — phone */
const Phone = () => (
  <svg {...base}>
    <path d="M8.4 3.5l2 4.2-2 1.7a11 11 0 0 0 5.4 5.4l1.7-2 4.2 2v3.3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.2 5.7 2 2 0 0 1 5.2 3.5z" />
  </svg>
);

/* Every call, in your CRM — bar chart */
const Chart = () => (
  <svg {...base}>
    <path d="M3 20.5h18" />
    <rect x="5" y="11" width="3.6" height="6.4" rx="1" />
    <rect x="10.2" y="5.5" width="3.6" height="11.9" rx="1" />
    <rect x="15.4" y="13.5" width="3.6" height="3.9" rx="1" />
  </svg>
);

/* CRM sync — two-way arrows */
const Sync = () => (
  <svg {...base}>
    <path d="M4 7h13.5L14 3.5M20 17H6.5L10 20.5" />
  </svg>
);

/* WhatsApp & SMS — speech bubble with dots */
const Message = () => (
  <svg {...base}>
    <path d="M20.5 11.5a7.5 7.5 0 0 1-7.5 7.5H8.4L4 21.8v-4.6a7.5 7.5 0 0 1 4.4-13.2h4.6a7.5 7.5 0 0 1 7.5 7.5z" />
    <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" strokeWidth="2.6" />
  </svg>
);

/* Zapier & webhooks — lightning bolt */
const Zap = () => (
  <svg {...base}>
    <path d="M12.5 2.5 4 14h6.5l-1 7.5L20 10h-6.5l-1-7.5z" strokeLinejoin="round" />
  </svg>
);

/* Bullet tick, used under a feature card when it has a `bullet` line */
export const Check = () => (
  <svg {...base} className="feat-tick">
    <circle cx="12" cy="12" r="9" />
    <path d="M8.2 12.2l2.5 2.5 5-5.2" />
  </svg>
);

// Keyed by feature title, for the sticky capability-card stack.
export const NIXXY_ICONS = {
  'Human-sounding voice': Stopwatch,
  'Talk over it, anytime': Chat,
  'Never a busy signal': Grid,
  'Knows your business': Book,
  'Speaks their language': Globe,
  'Books and routes': Calendar,
  'Bring your own numbers': Phone,
  'Every call, in your CRM': Chart,
};

// Keyed by the integration's `widget` value, for the integrations marquee.
export const INTEGRATION_ICONS = {
  scheduling: Calendar,
  crm: Sync,
  messaging: Message,
  automation: Zap,
};
