import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';

const DARK_ROUTES = ['/', '/pricing', '/blog', '/how-it-works', '/features'];

export default function Footer() {
  const { pathname } = useLocation();
  const dark = DARK_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));
  const isIndustries = pathname === '/industries';

  return (
    <footer className={`site-footer${dark ? ' dark' : ''}${isIndustries ? ' industries-footer-theme' : ''}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand"><Logo /></span>
            <p>
              The AI voice receptionist that answers every call, books every
              appointment, and never sleeps — so your team can focus on the work
              that needs a human.
            </p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <Link to="/features">Features</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/industries">Industries</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/blog">Blog</Link>
            <a href="mailto:hello@kall.us">Contact sales</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {isIndustries ? 'KALLUS' : 'KALL.US'} — AI Voice Receptionist. All rights reserved.</span>
          <div className="socials">
            <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
