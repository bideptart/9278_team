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
                <p className="article-toc-title">Table of contents</p>
                <ul>
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} onClick={(e) => scrollToHeading(e, item.id)}>{item.text}</a>
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
              if (block.type === 'image') return <ImagePlaceholder caption={block.caption} key={i} />;
              return null;
            })}
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
      </div>
    </div>
  );
}
