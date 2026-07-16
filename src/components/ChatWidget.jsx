import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const WELCOME = { from: 'bot', text: "Hi! 👋 How can I help you today?" };
const AUTO_REPLY = "Thanks for reaching out — someone from our team will get back to you shortly. In the meantime, check out our Pricing or Contact page.";

function ChatIcon({ open }) {
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

export default function ChatWidget() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [draft, setDraft] = useState('');

  const send = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setDraft('');
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: AUTO_REPLY }]);
    }, 500);
  };

  return (
    <div className={`chat-widget${isHome ? ' chat-widget-home' : ''}`}>
      {open && (
        <div className="chat-panel">
          <div className="chat-panel-head">
            <span>Chat with us</span>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="chat-panel-body">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.from}`}>{m.text}</div>
            ))}
          </div>
          <form className="chat-panel-input" onSubmit={send}>
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type a message…"
              aria-label="Message"
            />
            <button type="submit" aria-label="Send">→</button>
          </form>
        </div>
      )}
      <button
        type="button"
        className="chat-fab"
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((o) => !o)}
      >
        {isHome ? <ChatIcon open={open} /> : (open ? '✕' : '💬')}
      </button>
    </div>
  );
}
