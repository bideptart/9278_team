// Hero visual for the Industries page: a central "AI orb" with waveform + mic,
// connected to floating capability cards (call, calendar, contact, chat) plus
// a detail card, replacing the earlier laptop mockup.
import { motion } from 'framer-motion';
import { Phone, Calendar, User, MessageCircleMore, Mic, Check } from 'lucide-react';

const CARDS = [
  { key: 'phone', Icon: Phone, className: 'ind-orb-card-phone' },
  { key: 'calendar', Icon: Calendar, className: 'ind-orb-card-calendar' },
  { key: 'person', Icon: User, className: 'ind-orb-card-person' },
  { key: 'chat', Icon: MessageCircleMore, className: 'ind-orb-card-chat' },
];

const WAVE_HEIGHTS = [30, 55, 40, 70, 45, 85, 50, 75, 35, 60, 40, 55, 30];

export default function IndustriesHeroMotif() {
  return (
    <div className="ind-orb-hero" aria-hidden="true">
      <div className="ind-orb-bg">
        <svg className="ind-orb-swoosh" viewBox="0 0 520 430" fill="none">
          <circle cx="470" cy="30" r="130" />
          <path d="M520 200 a260 260 0 0 1 -190 250" strokeWidth="40" fill="none" />
          <path d="M520 260 a300 300 0 0 1 -230 170" strokeWidth="30" fill="none" />
        </svg>
        <span className="ind-orb-dotgrid ind-orb-dotgrid-tr" />
        <span className="ind-orb-dotgrid ind-orb-dotgrid-bl" />
      </div>

      <svg className="ind-orb-lines" viewBox="0 0 520 430" fill="none">
        <circle className="ind-orb-arc" cx="260" cy="181" r="150" strokeDasharray="0.5 9" strokeLinecap="round" />
        <path d="M55 90 L160 150 L185 171" />
        <path d="M460 120 L365 160 L275 171" />
        <path d="M55 275 L160 235 L180 191" />
        <path d="M460 320 L370 260 L280 206" />
        <circle className="ind-orb-dot" cx="160" cy="150" r="4" />
        <circle className="ind-orb-dot" cx="365" cy="160" r="4" />
        <circle className="ind-orb-dot" cx="160" cy="235" r="4" />
        <circle className="ind-orb-dot" cx="370" cy="260" r="4" />
      </svg>

      <div className="ind-orb-core">
        <motion.div
          className="ind-orb-core-pulse"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="ind-orb-ring ind-orb-ring-1" />
          <span className="ind-orb-ring ind-orb-ring-2" />
          <div className="ind-orb-waveform" aria-hidden="true">
            {WAVE_HEIGHTS.map((h, i) => (
              <motion.span
                key={i}
                style={{ height: `${h}%` }}
                animate={{ scaleY: [0.4, 1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.07 }}
              />
            ))}
          </div>
          <Mic className="ind-orb-mic" strokeWidth={1.4} />
        </motion.div>
      </div>

      {CARDS.map(({ key, Icon, className }, i) => (
        <motion.div
          className={`ind-orb-card ${className}`}
          key={key}
          initial={{ opacity: 0, y: 12, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Icon
            className="ind-orb-card-icon"
            fill="currentColor"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <span className="ind-orb-check">
            <Check strokeWidth={2.4} />
          </span>
        </motion.div>
      ))}
    </div>
  );
}
