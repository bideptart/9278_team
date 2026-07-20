import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories, blogStats } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'KallUS Blog',
  description: 'Research, product notes, and practical playbooks on AI voice agents for South African businesses.',
  blogPost: blogPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.excerpt,
    url: `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${p.slug}`,
    author: { '@type': 'Organization', name: p.author },
  })),
};

export default function Blog() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const scrollToPosts = () =>
    document.getElementById('posts')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const byCategory = category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category);
  const q = search.trim().toLowerCase();
  const posts = q
    ? byCategory.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
    : byCategory;
  const [featured, ...rest] = posts;

  return (
    <div className="kallus-theme">
      <Seo
        title="Blog"
        description="Research, product notes, and practical playbooks on AI voice agents — call handling, POPIA compliance, and multilingual support for South African businesses."
        jsonLd={blogPosts.length > 0 ? blogJsonLd : null}
      />
      <section className="page-hero container blog-hero">
        <Reveal>
          <p className="eyebrow">Blog</p>
          <h1 style={{ fontSize: 'clamp(38px,6.4vw,72px)', maxWidth: '16ch', margin: '0 auto' }}>
            Field notes from <span className="grad">South Africa's front desk.</span>
          </h1>
          <p className="lead" style={{ marginTop: 24, maxWidth: '58ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Research, product notes, and practical playbooks from the team
            building AI voice agents for South African businesses.
          </p>
          <div className="cta-row" style={{ marginTop: 36, justifyContent: 'center' }}>
            <button type="button" className="btn btn-cta" onClick={scrollToPosts}>
              Read the latest <span className="arrow">↓</span>
            </button>
            <Link to="/contact" className="btn btn-cta">Talk to sales</Link>
          </div>
        </Reveal>

        <Reveal className="blog-search-wrap">
          <div className="blog-stats">
            {blogStats.map((m) => (
              <div className="blog-stat-card" key={m.label}>
                <div className="blog-stat-value">{m.value}</div>
                <div className="blog-stat-label">{m.label}</div>
              </div>
            ))}
          </div>

          <form
            className="blog-search"
            style={{ marginTop: 28 }}
            onSubmit={(e) => { e.preventDefault(); scrollToPosts(); }}
          >
            <span className="blog-search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, authors, topics…"
              aria-label="Search blog posts"
            />
            <button type="submit" className="btn btn-sheen">Search <span className="arrow">→</span></button>
          </form>
        </Reveal>
      </section>

      <div className="container page-body" id="posts">
        {posts.length === 0 ? (
          <p className="lead" style={{ textAlign: 'center', padding: '60px 0' }}>
            No posts yet — check back soon.
          </p>
        ) : (
          <>
            <div className="section-head" style={{ marginTop: 0 }}>
              <p className="eyebrow">Categories</p>
              <h2 style={{ fontSize: 'clamp(24px,3.6vw,38px)' }}>Browse by categories.</h2>
              <p className="lead" style={{ marginTop: 12 }}>
                Cost breakdowns, compliance guides, and product deep dives our team ships every week.
              </p>
            </div>

            {blogCategories.length > 1 ? (
              <div className="blog-filters" style={{ marginTop: 28 }}>
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
            ) : (
              <div className="blog-filters" style={{ marginTop: 28 }}>
                <button type="button" className="chip-btn active">All</button>
              </div>
            )}

            {featured && (
              <Reveal as={Link} to={`/blog/${featured.slug}`} className="blog-featured" style={{ marginTop: 40 }}>
                <div className="blog-featured-media">
                  {featured.image
                    ? <img src={featured.image} alt={featured.title} loading="lazy" />
                    : <div className="blog-featured-placeholder" aria-hidden="true" />}
                </div>
                <div className="blog-featured-body">
                  <p className="blog-featured-kicker">Featured · {featured.category}</p>
                  <h2>{featured.title}</h2>
                  <p>{featured.excerpt}</p>
                  <div className="blog-featured-meta">
                    <span className="blog-avatar" aria-hidden="true">{featured.author?.[0] || '?'}</span>
                    <div>
                      <div className="blog-featured-author">{featured.author}</div>
                      <div className="blog-featured-sub">{featured.date} · {featured.readTime}</div>
                    </div>
                  </div>
                  <span className="text-link">Read the full piece →</span>
                </div>
              </Reveal>
            )}

            {rest.length > 0 && (
              <div className="blog-grid">
                {rest.map((post) => (
                  <Reveal as={Link} to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                    <div className="blog-card-media">
                      {post.image
                        ? <img src={post.image} alt={post.title} loading="lazy" />
                        : <div className="blog-card-placeholder" aria-hidden="true" />}
                      <span className="blog-card-tag">{post.category}</span>
                    </div>
                    <div className="blog-card-body">
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <p className="blog-meta">{post.author} · {post.readTime}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </>
        )}

      </div>

      <section className="cta-band hiw-cta">
        <div className="glow glow-cta" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="hiw-badge hiw-badge--center hiw-badge--star">★ Ready when you are</p>
            <h2>Give your front desk an AI receptionist.</h2>
            <p>Pick a plan, forward your number, and start answering every call the same day.</p>
            <div className="cta-row" style={{ justifyContent: 'center' }}>
              <Link to="/pricing" className="btn btn-sheen">See pricing <span className="arrow">→</span></Link>
              <Link to="/contact" className="btn btn-ghost hiw-cta-ghost">Talk to sales</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
