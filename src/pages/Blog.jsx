import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories, blogStats } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';

export default function Blog() {
  const [category, setCategory] = useState('All');
  const scrollToPosts = () =>
    document.getElementById('posts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const posts = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);

  return (
    <div className="kallus-theme">
      <section className="page-hero container">
        <Reveal>
          <p className="eyebrow">Blog</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '16ch' }}>
            Field notes from the <span className="grad">clinic front desk.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24 }}>
            Research, product notes, and practice-manager playbooks from the team
            building an AI receptionist for clinics and hospital networks.
          </p>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <button type="button" className="btn btn-cta" onClick={scrollToPosts}>
              Read the latest <span className="arrow">↓</span>
            </button>
            <Link to="/contact" className="btn btn-ghost">Talk to sales</Link>
          </div>
        </Reveal>
      </section>

      <div className="metrics-band">
        <div className="container metrics">
          {blogStats.map((m) => (
            <Reveal as="div" className="metric" key={m.label}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container page-body" id="posts">
        <div className="blog-filters">
          {blogCategories.map((c) => (
            <button
              key={c}
              type="button"
              className={`chip-btn${category === c ? ' active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="news-list">
          {posts.map((post) => (
            <Reveal as="div" className="news-item" key={post.slug}>
              <span className="news-date">{post.date}</span>
              <div>
                <span className="tag accent" style={{ marginBottom: 10, display: 'inline-block' }}>{post.category}</span>
                <div className="news-title">{post.title}</div>
                <p className="card-desc" style={{ marginTop: 8 }}>{post.excerpt}</p>
                <p className="blog-meta">{post.author} · {post.readTime}</p>
              </div>
              <span className="news-more">Read more →</span>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
