import { useState } from 'react';
import { Link } from 'react-router-dom';

const WELCOME = { from: 'bot', text: "Hi! I'm the KallUS assistant. Ask me about pricing, languages, integrations, HIPAA compliance, or how to get started." };
const AUTO_REPLY = "Thanks for reaching out — someone from our team will get back to you shortly. In the meantime, check out our Pricing or Contact page.";

// Common healthcare-practice questions the bot can answer instantly.
const HEALTHCARE_QA = [
  {
    q: 'Is it HIPAA compliant?',
    a: "Yes. Call recording, transcripts, and patient data are handled under a HIPAA-ready setup — consent capture, data protection, and audit trails are built in. We recommend a quick review with your compliance team before launch.",
  },
  {
    q: 'Can it book patient appointments?',
    a: 'Yes — it books, reschedules, and confirms appointments directly on your connected calendar, and can take messages or warm-transfer to your front desk when a human is needed.',
  },
  {
    q: 'Does it handle after-hours calls?',
    a: "Yes. Every plan answers around the clock — nights, weekends, and holidays — so patients never hit voicemail, and urgent calls get triaged immediately.",
  },
  {
    q: 'Can it answer insurance questions?',
    a: 'It can handle common insurance and billing questions using your own knowledge base (FAQs, policies, coverage info), and routes anything complex to your staff.',
  },
  {
    q: 'How much does it cost?',
    a: 'Plans start at ₹2,999/mo, billed as prepaid wallet credit — see the Pricing page for the full breakdown and an effective per-minute rate as low as ₹10/min.',
  },
  {
    q: 'How fast can we go live?',
    a: 'Most practices are live the same day: pick a plan, forward your existing number, and your AI receptionist starts answering — no new hardware required.',
  },
];

function BotAvatar() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path d="M12 2l1.6 4.1L18 8l-4.4 1.9L12 14l-1.6-4.1L6 8l4.4-1.9L12 2z" fill="currentColor" />
      <path d="M19 13l.9 2.3L22 16l-2.1.9L19 19l-.9-2.1L16 16l2.1-.7L19 13z" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path d="M4 4v5h5M20 20v-5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.1 15A8 8 0 1 0 6 7.3L4 9M18.9 9A8 8 0 0 0 18 16.7l2-1.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatFabIcon({ open }) {
  if (open) {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16H10l-4.5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8z" fill="currentColor" />
    </svg>
  );
}

// Very light keyword match against the healthcare FAQ bank, so free-typed
// questions get a real answer when we can find one, before falling back.
function findAnswer(text) {
  const q = text.toLowerCase();
  const hit = HEALTHCARE_QA.find(({ q: question }) =>
    question.toLowerCase().split(/\s+/).filter((w) => w.length > 3).some((word) => q.includes(word))
  );
  return hit ? hit.a : null;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [draft, setDraft] = useState('');
  const [askedQuestions, setAskedQuestions] = useState([]);

  const reply = (userText, botText) => {
    setMessages((m) => [...m, { from: 'user', text: userText }]);
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: botText }]);
    }, 450);
  };

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setDraft('');
    reply(text, findAnswer(text) || AUTO_REPLY);
  };

  const askQuick = (item) => {
    setAskedQuestions((a) => [...a, item.q]);
    reply(item.q, item.a);
  };

  const resetChat = () => {
    setMessages([WELCOME]);
    setAskedQuestions([]);
    setDraft('');
  };

  const remainingQuestions = HEALTHCARE_QA.filter((item) => !askedQuestions.includes(item.q));

  return (
    <div className={`chat-widget${open ? ' is-open' : ''}`}>
      {open && <div className="chat-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      {open && (
        <div className="chat-panel">
          <div className="chat-panel-head">
            <span className="chat-avatar"><BotAvatar /></span>
            <div className="chat-panel-title">
              <span className="chat-panel-name">KallUS Assistant</span>
              <span className="chat-panel-status"><span className="chat-dot" /> Online · usually replies instantly</span>
            </div>
            <div className="chat-panel-actions">
              <button type="button" aria-label="Restart chat" onClick={resetChat}><RefreshIcon /></button>
              <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}><CloseIcon /></button>
            </div>
          </div>
          <div className="chat-panel-body">
            {messages.map((m, i) => (
              m.from === 'bot' ? (
                <div className="chat-row bot" key={i}>
                  <span className="chat-avatar small"><BotAvatar /></span>
                  <div className="chat-bubble bot">{m.text}</div>
                </div>
              ) : (
                <div className="chat-bubble user" key={i}>{m.text}</div>
              )
            ))}
            {remainingQuestions.length > 0 && (
              <div className="chat-try-asking">
                <p className="chat-try-label">Try asking</p>
                <div className="chat-quick-replies">
                  {remainingQuestions.map((item) => (
                    <button type="button" key={item.q} onClick={() => askQuick(item)}>
                      <span>{item.q}</span>
                      <SendIcon />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="chat-panel-footer">
            <form className="chat-panel-input" onSubmit={send}>
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask about pricing, languages, HIPAA…"
                aria-label="Message"
              />
              <button type="submit" aria-label="Send"><SendIcon /></button>
            </form>
            <div className="chat-panel-hint">
              <span>Press Enter to send</span>
              <Link to="/contact">Talk to sales</Link>
            </div>
          </div>
        </div>
      )}
      {!open && (
        <button
          type="button"
          className="chat-fab"
          aria-label="Open chat"
          onClick={() => setOpen(true)}
        >
          <ChatFabIcon open={false} />
        </button>
      )}
    </div>
  );
}
