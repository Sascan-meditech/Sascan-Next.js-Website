import Link from "next/link";
import Header from "../Header";
import Footer from "../Footer";
import AddToCart from "./AddToCart";
import { PRODUCTS, formatINR } from "../../lib/products";

/* Shared single-product (shop) page: gallery + buy box, details accordion, related products.
   Used by /curelite and /curelaze. Content is passed in; layout and styles live here and in globals.css (cl-*). */

const WHATSAPP = "https://wa.me/919446697551";

const ICONS = {
  overview: <><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></>,
  description: <><path d="M7 4h10v16H7z" /><path d="M10 8h4M10 12h4M10 16h2" /></>,
  specs: <><path d="M4 7h10M18 7h2M4 17h4M12 17h8" /><circle cx="16" cy="7" r="2" /><circle cx="10" cy="17" r="2" /></>,
  safety: <><path d="M12 3l9.5 17h-19z" /><path d="M12 10v4.5M12 17.5v.01" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.01" /></>,
  care: <><path d="M12 3c3 4 6 7 6 10.5A6 6 0 0 1 6 13.5C6 10 9 7 12 3z" /><path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" /></>,
  warranty: <><path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
};

const Tick = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>;

/* ---- Building blocks for accordion content ---- */
export function SpecTable({ rows }) {
  return (
    <dl className="cl-spec">
      {rows.map(([k, v]) => (
        <div key={k} className="cl-spec__row">
          <dt>{k}</dt>
          <dd>{Array.isArray(v) ? <ul>{v.map((x) => <li key={x}>{x}</li>)}</ul> : v}</dd>
        </div>
      ))}
    </dl>
  );
}

/* items: [title, description?] */
export function TickList({ items }) {
  return (
    <ul className="cl-adv">
      {items.map(([t, d]) => (
        <li key={t} className="cl-adv__item">
          <span className="cl-adv__tick"><Tick /></span>
          <div>{d ? <><h4 className="cl-adv__term">{t}</h4><p className="cl-adv__desc">{d}</p></> : <p className="cl-adv__term cl-adv__term--plain">{t}</p>}</div>
        </li>
      ))}
    </ul>
  );
}

/* A paragraph (children) or a list of points (items) in the amber warning box */
export function Warning({ children, items }) {
  return (
    <div className="cl-warn">
      <span className="cl-warn__icon"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS.safety}</svg></span>
      {items ? <ul className="cl-warn__list">{items.map((t) => <li key={t}>{t}</li>)}</ul> : <p>{children}</p>}
    </div>
  );
}

export function WarrantyBadge({ years = 1, text }) {
  return (
    <div className="cl-warranty">
      <span className="cl-warranty__badge"><strong>{years}</strong><span className="mono">Year{years > 1 ? "s" : ""}</span></span>
      <p>{text}</p>
    </div>
  );
}

function ProductLink({ p, className, children }) {
  return p.href.startsWith("/")
    ? <Link href={p.href} className={className}>{children}</Link>
    : <a href={p.href} className={className} target="_blank" rel="noopener">{children}</a>;
}

/* ---- Page ---- */
export default function ProductPage({ productId, category, subtitle, intro, chips, images, details, related }) {
  const p = PRODUCTS[productId];
  return (
    <>
      <Header active="shop" />
      <main id="main" className="cl">
        <section className="cl-top">
          <div className="container">
            <nav className="cl-crumbs mono" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span>
              <span>Wellness</span><span aria-hidden="true">/</span>
              <span aria-current="page">{p.name}</span>
            </nav>

            <div className="cl-product">
              <div className="cl-gallery" data-shop-gallery>
                <div className="cl-gallery__stage">
                  <span className="cl-sale mono">Sale</span>
                  {images.map((im, i) => (
                    <img
                      key={im.src}
                      className={`cl-gallery__img${i === 0 ? " is-active" : ""}`}
                      src={im.src}
                      width={im.w}
                      height={im.h}
                      alt={im.alt}
                      decoding="async"
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : undefined}
                      aria-hidden={i === 0 ? undefined : "true"}
                    />
                  ))}
                  {images.length > 1 && (
                    <>
                      <button className="cl-gallery__nav cl-gallery__nav--prev" type="button" aria-label="Previous image" data-prev>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
                      </button>
                      <button className="cl-gallery__nav cl-gallery__nav--next" type="button" aria-label="Next image" data-next>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                      </button>
                      <span className="cl-gallery__count mono" data-count>1 / {images.length}</span>
                    </>
                  )}
                </div>
                {images.length > 1 && (
                  <div className="cl-thumbs" role="group" aria-label="Product images">
                    {images.map((im, i) => (
                      <button key={im.src} type="button" className={`cl-thumb${i === 0 ? " is-active" : ""}`} aria-label={`Show image ${i + 1}`} aria-pressed={i === 0 ? "true" : "false"} data-thumb={i}>
                        <img src={im.src} width={im.w} height={im.h} alt="" loading="lazy" decoding="async" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="cl-buy">
                <p className="cl-buy__cat mono">{category}</p>
                <h1 className="cl-buy__title">{p.name}</h1>
                <p className="cl-buy__sub">{subtitle}</p>

                <div className="cl-price">
                  <span className="cl-price__now">{formatINR(p.price)}</span>
                  <del className="cl-price__was" aria-label={`Original price ${formatINR(p.mrp)}`}>{formatINR(p.mrp)}</del>
                  <span className="cl-price__save mono">Save {Math.round((1 - p.price / p.mrp) * 100)}%</span>
                </div>

                <p className="cl-buy__desc">{intro}</p>

                <ul className="cl-chips">
                  {chips.map(([v, k]) => (
                    <li key={v + k}><span className="cl-chips__v">{v}</span><span className="cl-chips__k">{k}</span></li>
                  ))}
                </ul>

                <AddToCart productId={p.id} name={p.name} />
                <a className="cl-ask" href={WHATSAPP} target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /></svg>
                  Questions before you buy? Ask us on WhatsApp
                </a>

                <ul className="cl-trust">
                  <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6h11v9H2zM13 9h4l3 3v3h-7" /><circle cx="6" cy="17.5" r="1.6" /><circle cx="16.5" cy="17.5" r="1.6" /></svg>Free shipping across India</li>
                  <li><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>Secure Payment</li>
                  <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 13a8 8 0 0 1 16 0" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /></svg>Customer support</li>
                  <li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5L12 3l9 4.5v9L12 21l-9-4.5z" /><path d="M3 7.5L12 12l9-4.5M12 12v9" /></svg>Fast dispatch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--rule cl-info">
          <div className="container">
            <div className="cl-acc reveal" id="details">
              {details.map((d, i) => (
                <details key={d.title} className="cl-acc__item" name="cl-details" open={i === 0}>
                  <summary className="cl-acc__head">
                    <span className="cl-acc__icon"><svg viewBox="0 0 24 24" aria-hidden="true">{ICONS[d.icon]}</svg></span>
                    <span className="cl-acc__title">{d.title}</span>
                    <span className="cl-acc__pm" aria-hidden="true" />
                  </summary>
                  <div className="cl-acc__body">{d.body}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--rule cl-related">
          <div className="container">
            <div className="cl-related__head reveal">
              <h2 className="cl-h2">Related products</h2>
            </div>
            <ul className="cl-related__grid">
              {related.map((id) => {
                const r = PRODUCTS[id];
                return (
                  <li key={id} className="reveal">
                    <div className="cl-card">
                      <ProductLink p={r} className="cl-card__link">
                        <span className="cl-card__img">
                          <span className="cl-sale mono">Sale</span>
                          <img src={r.image} width="400" height="300" alt={r.name} loading="lazy" decoding="async" />
                        </span>
                        <span className="cl-card__body">
                          <span className="cl-card__name">{r.name}</span>
                          <span className="cl-card__price"><span>{formatINR(r.price)}</span><del>{formatINR(r.mrp)}</del></span>
                        </span>
                      </ProductLink>
                      <div className="cl-card__foot">
                        <ProductLink p={r} className="cl-card__cta">View product<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg></ProductLink>
                        <AddToCart productId={r.id} name={r.name} compact />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
