import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import NotFound from './NotFound.jsx';

const headingId = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const scrollToHeading = (e, id) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFound />;

  const toc = post.body.filter((b) => b.type === 'h2').map((b) => ({ text: b.text, id: headingId(b.text) }));

  return (
    <div className="kallus-theme">
      <section className="page-hero container">
        <Reveal>
          <Link to="/blog" className="text-link">← Back to blog</Link>
          <p className="eyebrow" style={{ marginTop: 18 }}>{post.category}</p>
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

      <div className="container page-body">
        <Reveal className="article">
          {toc.length > 0 && (
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
          )}
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 id={headingId(block.text)} key={i}>{block.text}</h2>;
            if (block.type === 'p') return <p key={i}>{block.text}</p>;
            if (block.type === 'bullets') {
              return (
                <ul className="article-list" key={i}>
                  {block.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              );
            }
            if (block.type === 'image') {
              return (
                <div className="article-image-placeholder" key={i}>
                  <span>Image placeholder</span>
                  <p>{block.caption}</p>
                </div>
              );
            }
            return null;
          })}
        </Reveal>

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
