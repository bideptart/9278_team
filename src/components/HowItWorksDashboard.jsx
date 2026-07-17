import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, LogIn, Settings2, Database, PhoneCall,
  History, CheckCircle2, Mic2, RefreshCw,
} from 'lucide-react';

const QUICK_ACTIONS = [
  { icon: LogIn, title: 'Sign in', sub: 'Create account' },
  { icon: Settings2, title: 'Design agent', sub: 'Voice & guardrails' },
  { icon: Database, title: 'Connect', sub: 'FAQs & CRM' },
  { icon: PhoneCall, title: 'Go live', sub: 'Forward your line' },
];

const ACTIVITY = [
  { icon: CheckCircle2, title: 'Call answered', sub: '0.3s pickup', tone: 'live' },
  { icon: Mic2, title: 'Live transcript', sub: '32+ languages', tone: 'mono' },
  { icon: RefreshCw, title: 'CRM synced', sub: 'HubSpot · contact +1', tone: 'deep' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorksDashboard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 1300);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      className="call-card hiw-dash-card"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      aria-hidden="true"
    >
      <motion.div variants={itemVariants} className="hiw-dash-search">
        <Search size={17} className="hiw-dash-search-icon" />
        <span>Search calls, contacts, or type a command…</span>
        <kbd>⌘K</kbd>
      </motion.div>

      <motion.div variants={containerVariants} className="hiw-dash-actions">
        {QUICK_ACTIONS.map((a, i) => (
          <motion.div key={a.title} variants={itemVariants} className={`hiw-dash-action${tick % QUICK_ACTIONS.length === i ? ' is-active' : ''}`}>
            <span className="hiw-dash-action-icon"><a.icon size={19} /></span>
            <p className="hiw-dash-action-title">{a.title}</p>
            <p className="hiw-dash-action-sub">{a.sub}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="hiw-dash-section">
        <div className="hiw-dash-section-head"><History size={15} /><h3>Recent on every call</h3></div>
        <motion.div variants={containerVariants} className="hiw-dash-list">
          {ACTIVITY.map((item, i) => {
            const active = tick % ACTIVITY.length === i;
            return (
              <motion.div key={item.title} variants={itemVariants} className={`hiw-dash-row hiw-dash-row--${item.tone}${active ? ' is-active' : ''}`}>
                <span className="hiw-dash-row-icon"><item.icon size={17} /></span>
                <div className="hiw-dash-row-copy">
                  <div className="hiw-dash-row-title">{item.title}</div>
                  <div className="hiw-dash-row-sub">{item.sub}</div>
                </div>
                {active && <span className="live-dot hiw-dash-row-dot" />}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
