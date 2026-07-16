import { useState } from 'react';

const WELCOME = { from: 'bot', text: "Hi! 👋 How can I help you today?" };
const AUTO_REPLY = "Thanks for reaching out — someone from our team will get back to you shortly. In the meantime, check out our Pricing or Contact page.";

export default function ChatWidget() {
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
    <div className="chat-widget">
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
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}
