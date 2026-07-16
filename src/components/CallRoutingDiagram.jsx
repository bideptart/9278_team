const branches = [
  { label: 'Customer Support', sub: 'Answer & resolve', x: 110 },
  { label: 'Sales', sub: 'Qualify & book', x: 370 },
  { label: 'Billing', sub: 'Payments & invoices', x: 630 },
  { label: 'Feedback', sub: 'Route to the team', x: 890 },
];

const ROOT_X = 500;
const ROOT_Y = 40;
const NODE_Y = 170;

export default function CallRoutingDiagram() {
  return (
    <div className="route-diagram" aria-hidden="true">
      <div className="route-canopy">
        <svg className="route-lines" viewBox="0 0 1000 170" preserveAspectRatio="none">
          {branches.map((b) => (
            <path
              key={b.label}
              d={`M${ROOT_X},${ROOT_Y} C${ROOT_X},${(ROOT_Y + NODE_Y) / 2} ${b.x},${(ROOT_Y + NODE_Y) / 2} ${b.x},${NODE_Y}`}
              fill="none"
            />
          ))}
        </svg>

        <div className="route-root" style={{ left: `${(ROOT_X / 1000) * 100}%` }}>
          <span className="live-dot" />
          Incoming call
          <small>AI receptionist</small>
        </div>
      </div>

      <div className="route-branches">
        {branches.map((b, i) => (
          <div className="route-branch" key={b.label} style={{ left: `${(b.x / 1000) * 100}%`, '--i': i }}>
            <div className="route-node">{b.label}</div>
            <div className="route-sub">{b.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
