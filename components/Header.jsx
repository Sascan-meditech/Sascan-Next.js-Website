import Link from "next/link";
import CartButton from "./shop/CartButton";

/* Site header with the Company / Technology / Products mega menus.
   `active` highlights the current top-level section: home | company | technology | products | resources | shop */
export default function Header({ active }) {
  const linkClass = (key) => (active === key ? 'nav__link is-active' : 'nav__link');
  return (
    <header className="header" id="header">
        <div className="container header__inner">
          <Link href="/#home" className="logo" aria-label="Sascan home">
              <img className="logo__img" src="/assets/sascan-logo-1.png" width="286" height="53" alt="Sascan – Saving Lives" />
            </Link>

          <nav className="nav" id="nav" aria-label="Main">
            <ul className="nav__list">
              <li><Link href="/#home" className={linkClass("home")} aria-current={active === "home" ? "page" : undefined}>Home</Link></li>
              <li className="nav__item has-sub">
                <Link href="/about" className={linkClass("company")} aria-current={active === "company" ? "page" : undefined}>Company</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-about" aria-label="Show Company menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button>
                <div className="nav__sub nav__mega" id="sub-about">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Company</p>
                    <p className="mega__lead">Sascan Meditech, Thiruvananthapuram — biophotonics and early cancer screening since 2015.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/about" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5v.01" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">About Sascan</span><span className="nav__subdesc">Our story, vision &amp; mission and certifications.</span></span></Link></li>
                    <li><Link href="/team" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5" /><circle cx="17" cy="9" r="2.5" /><path d="M16.5 14.6c2.6.2 4.4 1.9 5 4.9" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Our Team</span><span className="nav__subdesc">Meet the founders and the people behind Sascan.</span></span></Link></li>
                    <li><Link href="/partners" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 12l2.5 2.5a1.8 1.8 0 0 0 2.5 0l4-4" /><path d="M2.5 9.5l4-4 3 1.5 2.5-1.5 2.5 1.5 3-1.5 4 4-3 3" /><path d="M5.5 12.5l4.5 4.5a1.8 1.8 0 0 0 2.5 0l1-1" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Partners &amp; Collaborators</span><span className="nav__subdesc">Investors, supporters and clinical partners.</span></span></Link></li>
                    <li><Link href="/advisors" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.5" /><path d="M5 20c.7-3.8 3.5-6 7-6s6.3 2.2 7 6" /><path d="M17.5 3.5l1 2 2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2-1.5-1.4 2-.3z" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Board of Advisors</span><span className="nav__subdesc">Strategic insight from industry leaders.</span></span></Link></li>
                    <li><Link href="/careers" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Careers</span><span className="nav__subdesc">Open roles in engineering and design.</span></span></Link></li>
                  </ul>
                  <Link className="mega__feature" href="/about">
                    <img src="/assets/sascan-award.webp" alt="Sascan team receiving an award" loading="lazy" decoding="async" />{" "}<span className="mega__caption">Revolutionizing cancer screening with biophotonics.</span>{" "}<span className="mega__cta">About Sascan <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                  </Link>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/#technology" className={linkClass("technology")} aria-current={active === "technology" ? "page" : undefined}>Technology</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-technology" aria-label="Show Technology menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button>
                <div className="nav__sub nav__mega" id="sub-technology">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Technology</p>
                    <p className="mega__lead">Light-based technologies for non-invasive screening and therapy.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/pbmt" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Photobiomodulation Therapy (PBMT)</span><span className="nav__subdesc">Red and near-infrared light to treat pain, reduce inflammation and repair tissue.</span></span></Link></li>
                    <li><Link href="/multimodal-imaging" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /><path d="M3 17.5l9 5 9-5" opacity=".6" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Multimodal Imaging</span><span className="nav__subdesc">Multispectral imaging platform for early oral and cervical cancer screening.</span></span></Link></li>
                  </ul>
                  <div className="mega__feature mega__feature--tech">
                    <span className="mega__caption">Clinically validated, point-of-care cancer screening technology.</span>
                  </div>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/#products" className={linkClass("products")} aria-current={active === "products" ? "page" : undefined}>Products</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-products" aria-label="Show Products menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button>
                <div className="nav__sub nav__mega" id="sub-products">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Products</p>
                    <p className="mega__lead">Non-invasive devices for early cancer screening and light-based therapy.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/oralscan" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9c2-4 14-4 16 0-1 6-4 10-8 10S5 15 4 9z" /><path d="M8 10.5c2.5 1.5 5.5 1.5 8 0" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">OralScan</span><span className="nav__subdesc">Handheld multimodal imaging device for oral cancer screening and biopsy guidance.</span></span></Link></li>
                    <li><Link href="/cerviscan" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><path d="M12 3.5v5M12 15.5v5" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">CerviScan</span><span className="nav__subdesc">Next-generation alternative to conventional digital colposcopy.</span></span></Link></li>
                    <li><Link href="/vaguslite" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18" /><path d="M12 7c-3 0-5 2-5 4M12 11c3 0 5 2 5 4M12 15c-2.5 0-4 1.5-4 3" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">VagusLite</span><span className="nav__subdesc">PBM based vagus nerve stimulation device for gut health and mood disorders.</span></span></Link></li>
                  </ul>
                  <Link className="mega__feature mega__feature--product" href="/oralscan">
                    <img src="/assets/oralscan/oralscan-kit-laptop.webp" alt="OralScan kit with laptop running the OralScan software" loading="lazy" decoding="async" />{" "}<span className="mega__caption">Detect Early. Heal Better.</span>{" "}<span className="mega__cta">Explore OralScan <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                  </Link>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/faq" className={linkClass("resources")} aria-current={active === "resources" ? "page" : undefined}>Resources</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-resources" aria-label="Show Resources menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button>
                <div className="nav__sub nav__mega" id="sub-resources">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Resources</p>
                    <p className="mega__lead">Answers and support for OralScan users.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/faq" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M9.5 9.2a2.6 2.6 0 0 1 5 1c0 1.8-2.5 2.2-2.5 3.8" /><path d="M12 17.2v.01" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">FAQ</span><span className="nav__subdesc">Frequently asked questions about OralScan screening, the device and software.</span></span></Link></li>
                    <li><Link href="/publications" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5" /><path d="M9 12h7M9 15.5h7M9 19h4" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Publications</span><span className="nav__subdesc">Research papers and journal articles on Sascan technologies.</span></span></Link></li>
                    <li><Link href="/awards" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="5.5" /><path d="M8.5 13.3L7 21l5-2.6 5 2.6-1.5-7.7" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">Awards</span><span className="nav__subdesc">Recognized for innovation and excellence.</span></span></Link></li>
                  </ul>
                  <a className="mega__feature mega__feature--tech mega__feature--support" href="https://wa.me/919446697551" target="_blank" rel="noopener">
                    <span className="mega__caption">Need assistance? Our support team is here to help - contact us!</span>
                    <span className="mega__cta">WhatsApp Support <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                  </a>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/curelite" className={linkClass("shop")} aria-current={active === "shop" ? "page" : undefined}>Shop</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-shop" aria-label="Show Shop menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></button>
                <div className="nav__sub nav__mega" id="sub-shop">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Shop</p>
                    <p className="mega__lead">Buy Sascan wellness products online.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/curelite" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">CureLite</span><span className="nav__subdesc">Low-level laser therapy device for pain relief.</span></span></Link></li>
                    <li><Link href="/curewrap" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="8" width="18" height="8" rx="4" /><path d="M8 8v8M12 8v8M16 8v8" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">CureWrap</span><span className="nav__subdesc">Wearable red and near-infrared light therapy wrap.</span></span></Link></li>
                    <li><Link href="/curelaze" className="nav__sublink"><span className="nav__subicon"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="3" /><path d="M9 6l1-3h4l1 3M9 18l1 3h4l1-3M12 9.5V12l1.5 1.5" /></svg></span><span className="nav__subtext"><span className="nav__subtitle">CureLaze</span><span className="nav__subdesc">Laser and light therapy watch for blood circulation.</span></span></Link></li>
                  </ul>
                  <a className="mega__feature mega__feature--tech mega__feature--support" href="https://wa.me/919446697551" target="_blank" rel="noopener">
                    <span className="mega__caption">Need assistance? Our support team is here to help - contact us!</span>
                    <span className="mega__cta">WhatsApp Support <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                  </a>
                </div>
              </li>
            </ul>
            <div className="nav__mobile-actions">
              <a href="#" className="btn btn--secondary">Login</a>{" "}<Link href="/contact" className="btn btn--secondary">Contact us</Link>
            </div>
          </nav>

          <div className="header__actions">
            {" "}<a href="#" className="header__link">Login</a>{" "}<CartButton />{" "}<Link href="/contact" className="btn btn--secondary header__cta">Contact us</Link>{" "}<button className="icon-btn menu-toggle" id="menuToggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
  );
}
