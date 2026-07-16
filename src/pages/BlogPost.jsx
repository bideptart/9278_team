import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import NotFound from './NotFound.jsx';

const headingId = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const scrollToHeading = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function ImagePlaceholder({ caption }) {
  return (
    <div className="article-image-placeholder">
      <span>Image placeholder</span>
      <p>{caption}</p>
    </div>
  );
}

function ArticleTable({ headers, rows }) {
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const heroImageIndex = post.body.findIndex((b) => b.type === 'image');
  const heroImage = heroImageIndex !== -1 ? post.body[heroImageIndex] : null;
  const bodyBlocks = heroImageIndex !== -1
    ? post.body.filter((_, i) => i !== heroImageIndex)
    : post.body;

  const toc = post.body.filter((b) => b.type === 'h2').map((b) => ({ text: b.text, id: headingId(b.text) }));
  const [activeId, setActiveId] = useState(toc[0]?.id ?? null);
  const tocIds = useRef(toc.map((t) => t.id)).current;

  useEffect(() => {
    if (tocIds.length === 0) return;
    const headings = tocIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (headings.length === 0) return;

    const OFFSET = 120;
    const onScroll = () => {
      let current = headings[0].id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top - OFFSET <= 0) current = h.id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug, tocIds]);

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="kallus-theme">
      <section className="page-hero container">
        <Reveal>
          <Link to="/blog" className="text-link" style={{ display: 'block', marginBottom: 22 }}>← Back to blog</Link>
          <p className="eyebrow">{post.category}</p>
          <h1 style={{ fontSize: 'clamp(30px,4.6vw,52px)', maxWidth: '20ch' }}>{post.title}</h1>
          <div className="blog-featured-meta" style={{ marginTop: 22 }}>
            <span className="blog-avatar" aria-hidden="true">{post.author[0]}</span>
            <div>
              <div className="blog-featured-author">{post.author}</div>
              <div className="blog-featured-sub">{post.date} · {post.readTime}</div>
            </div>
          </div>
        </Reveal>
      </section>

      {heroImage && (
        <Reveal className="container" style={{ marginBottom: 8 }}>
          <ImagePlaceholder caption={heroImage.caption} />
        </Reveal>
      )}

      <div className="container page-body">
        <div className="article-layout">
          {toc.length > 0 && (
            <aside className="article-sidebar">
              <nav className="article-toc" aria-label="Table of contents">
                <p className="article-toc-title">— Table of contents</p>
                <ul>
                  {toc.map((item, i) => (
                    <li key={item.id} className={item.id === activeId ? 'active' : ''}>
                      <a href={`#${item.id}`} onClick={(e) => scrollToHeading(e, item.id)}>
                        <span className="article-toc-num">{i + 1}.</span>
                        <span className="article-toc-label">{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}

          <Reveal className="article" as="div">
            {bodyBlocks.map((block, i) => {
              if (block.type === 'h2') return <h2 id={headingId(block.text)} key={i}>{block.text}</h2>;
              if (block.type === 'p') return <p key={i}>{block.text}</p>;
              if (block.type === 'bullets') {
                return (
                  <ul className="article-list" key={i}>
                    {block.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                );
              }
              if (block.type === 'table') return <ArticleTable headers={block.headers} rows={block.rows} key={i} />;
              if (block.type === 'image') return <ImagePlaceholder caption={block.caption} key={i} />;
              return null;
            })}

            {post.faqs?.length > 0 && (
              <>
                <h2 id="frequently-asked-questions">Frequently Asked Questions</h2>
                <div className="faq">
                  {post.faqs.map((f) => (
                    <details className="faq-item" name={`faq-${post.slug}`} key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}
          </Reveal>
        </div>

        <div className="cta-band" style={{ marginTop: 80, borderRadius: 20 }}>
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ justifyContent: 'center' }}>Ready when you are</p>
              <h2>Give your front desk an AI receptionist.</h2>
              <p>Pick a plan, forward your number, and start answering every call the same day.</p>
              <div className="cta-row" style={{ justifyContent: 'center' }}>
                <Link to="/pricing" className="btn btn-sheen">See pricing <span className="arrow">→</span></Link>
                <Link to="/contact" className="btn btn-ghost">Talk to sales</Link>
              </div>
            </Reveal>
          </div>
        </div>

        {related.length > 0 && (
          <section className="related-posts" style={{ marginTop: 80 }}>
            <Reveal className="section-head" style={{ textAlign: 'center' }}>
              <p className="eyebrow" style={{ justifyContent: 'center' }}>Keep reading</p>
              <h2>Related reading</h2>
              <p className="lead" style={{ margin: '12px auto 0' }}>Hand-picked next reads from the KallUs blog.</p>
            </Reveal>
            <div className="blog-grid" style={{ marginTop: 32 }}>
              {related.map((p) => (
                <Reveal as={Link} to={`/blog/${p.slug}`} className="blog-card" key={p.slug}>
                  <div className="blog-card-media">
                    <div className="blog-card-placeholder" aria-hidden="true" />
                    <span className="blog-card-tag">{p.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <p className="blog-meta">{p.author} · {p.readTime}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
