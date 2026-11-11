import Link from "next/link";
import CartButton from "./shop/CartButton";
import { Aperture, Bandaids, Brain, Briefcase, CaretDown, ChalkboardTeacher, FileText, Handshake, Info, Question, Sparkle, Stack, Sun, Tooth, Trophy, UsersThree, Watch } from "@phosphor-icons/react/dist/ssr";

/* Site header with the Company / Technology / Products mega menus.
   `active` highlights the current top-level section: home | company | technology | products | resources | shop | contact */
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
                <Link href="/about" className={linkClass("company")} aria-current={active === "company" ? "page" : undefined}>Company</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-about" aria-label="Show Company menu"><CaretDown weight="regular" className="pi" aria-hidden="true" /></button>
                <div className="nav__sub nav__mega" id="sub-about">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Company</p>
                    <p className="mega__lead">Sascan Meditech, Thiruvananthapuram — biophotonics and early cancer screening since 2015.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/about" className="nav__sublink"><span className="nav__subicon"><Info weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">About Sascan</span><span className="nav__subdesc">Our story, vision &amp; mission and certifications.</span></span></Link></li>
                    <li><Link href="/team" className="nav__sublink"><span className="nav__subicon"><UsersThree weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Our Team</span><span className="nav__subdesc">Meet the founders and the people behind Sascan.</span></span></Link></li>
                    <li><Link href="/partners" className="nav__sublink"><span className="nav__subicon"><Handshake weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Partners &amp; Collaborators</span><span className="nav__subdesc">Investors, supporters and clinical partners.</span></span></Link></li>
                    <li><Link href="/advisors" className="nav__sublink"><span className="nav__subicon"><ChalkboardTeacher weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Board of Advisors</span><span className="nav__subdesc">Strategic insight from industry leaders.</span></span></Link></li>
                    <li><Link href="/careers" className="nav__sublink"><span className="nav__subicon"><Briefcase weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Careers</span><span className="nav__subdesc">Open roles in engineering and design.</span></span></Link></li>
                  </ul>
                  <Link className="mega__feature" href="/about">
                    <img src="/assets/sascan-award.webp" alt="Sascan team receiving an award" loading="lazy" decoding="async" />{" "}<span className="mega__caption">Revolutionizing cancer screening with biophotonics.</span>{" "}<span className="mega__cta">About Sascan</span>
                  </Link>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/#technology" className={linkClass("technology")} aria-current={active === "technology" ? "page" : undefined}>Technology</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-technology" aria-label="Show Technology menu"><CaretDown weight="regular" className="pi" aria-hidden="true" /></button>
                <div className="nav__sub nav__mega" id="sub-technology">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Technology</p>
                    <p className="mega__lead">Light-based technologies for non-invasive screening and therapy.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/pbmt" className="nav__sublink"><span className="nav__subicon"><Sun weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Photobiomodulation Therapy (PBMT)</span><span className="nav__subdesc">Red and near-infrared light to treat pain, reduce inflammation and repair tissue.</span></span></Link></li>
                    <li><Link href="/multimodal-imaging" className="nav__sublink"><span className="nav__subicon"><Stack weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Multimodal Imaging</span><span className="nav__subdesc">Multispectral imaging platform for early oral and cervical cancer screening.</span></span></Link></li>
                  </ul>
                  <div className="mega__feature mega__feature--tech">
                    <span className="mega__caption">Clinically validated, point-of-care cancer screening technology.</span>
                  </div>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/#products" className={linkClass("products")} aria-current={active === "products" ? "page" : undefined}>Products</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-products" aria-label="Show Products menu"><CaretDown weight="regular" className="pi" aria-hidden="true" /></button>
                <div className="nav__sub nav__mega" id="sub-products">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Products</p>
                    <p className="mega__lead">Non-invasive devices for early cancer screening and light-based therapy.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/oralscan" className="nav__sublink"><span className="nav__subicon"><Tooth weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">OralScan</span><span className="nav__subdesc">Handheld multimodal imaging device for oral cancer screening and biopsy guidance.</span></span></Link></li>
                    <li><Link href="/cerviscan" className="nav__sublink"><span className="nav__subicon"><Aperture weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">CerviScan</span><span className="nav__subdesc">Next-generation alternative to conventional digital colposcopy.</span></span></Link></li>
                    <li><Link href="/vaguslite" className="nav__sublink"><span className="nav__subicon"><Brain weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">VagusLite</span><span className="nav__subdesc">PBM based vagus nerve stimulation device for gut health and mood disorders.</span></span></Link></li>
                  </ul>
                  <Link className="mega__feature mega__feature--product" href="/oralscan">
                    <img src="/assets/oralscan/oralscan-kit-laptop.webp" alt="OralScan kit with laptop running the OralScan software" loading="lazy" decoding="async" />{" "}<span className="mega__caption">Detect Early. Heal Better.</span>{" "}<span className="mega__cta">Explore OralScan</span>
                  </Link>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/faq" className={linkClass("resources")} aria-current={active === "resources" ? "page" : undefined}>Resources</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-resources" aria-label="Show Resources menu"><CaretDown weight="regular" className="pi" aria-hidden="true" /></button>
                <div className="nav__sub nav__mega" id="sub-resources">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Resources</p>
                    <p className="mega__lead">Answers and support for OralScan users.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/faq" className="nav__sublink"><span className="nav__subicon"><Question weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">FAQ</span><span className="nav__subdesc">Frequently asked questions about OralScan screening, the device and software.</span></span></Link></li>
                    <li><Link href="/publications" className="nav__sublink"><span className="nav__subicon"><FileText weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Publications</span><span className="nav__subdesc">Research papers and journal articles on Sascan technologies.</span></span></Link></li>
                    <li><Link href="/awards" className="nav__sublink"><span className="nav__subicon"><Trophy weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">Awards</span><span className="nav__subdesc">Recognized for innovation and excellence.</span></span></Link></li>
                  </ul>
                  <a className="mega__feature mega__feature--tech mega__feature--support" href="https://wa.me/919446697551" target="_blank" rel="noopener">
                    <span className="mega__caption">Need assistance? Our support team is here to help - contact us!</span>
                    <span className="mega__cta">WhatsApp Support</span>
                  </a>
                </div>
              </li>
              <li className="nav__item has-sub">
                <Link href="/curelite" className={linkClass("shop")} aria-current={active === "shop" ? "page" : undefined}>Shop</Link>{" "}<button className="nav__caret" type="button" aria-expanded="false" aria-controls="sub-shop" aria-label="Show Shop menu"><CaretDown weight="regular" className="pi" aria-hidden="true" /></button>
                <div className="nav__sub nav__mega" id="sub-shop">
                  <div className="mega__intro">
                    <p className="mega__eyebrow label mono">Shop</p>
                    <p className="mega__lead">Buy Sascan wellness products online.</p>
                  </div>
                  <ul className="mega__links">
                    <li><Link href="/curelite" className="nav__sublink"><span className="nav__subicon"><Sparkle weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">CureLite</span><span className="nav__subdesc">Low-level laser therapy device for pain relief.</span></span></Link></li>
                    <li><Link href="/curewrap" className="nav__sublink"><span className="nav__subicon"><Bandaids weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">CureWrap</span><span className="nav__subdesc">Wearable red and near-infrared light therapy wrap.</span></span></Link></li>
                    <li><Link href="/curelaze" className="nav__sublink"><span className="nav__subicon"><Watch weight="light" className="pi ico" aria-hidden="true" /></span><span className="nav__subtext"><span className="nav__subtitle">CureLaze</span><span className="nav__subdesc">Laser and light therapy watch for blood circulation.</span></span></Link></li>
                  </ul>
                  <a className="mega__feature mega__feature--tech mega__feature--support" href="https://wa.me/919446697551" target="_blank" rel="noopener">
                    <span className="mega__caption">Need assistance? Our support team is here to help - contact us!</span>
                    <span className="mega__cta">WhatsApp Support</span>
                  </a>
                </div>
              </li>
            </ul>
            <div className="nav__mobile-actions">
              <a href="http://sascanonline.com/" className="btn btn--secondary" target="_blank" rel="noopener">Login</a>{" "}<Link href="/contact" className="btn btn--secondary">Contact us</Link>
            </div>
          </nav>

          <div className="header__actions">
            {" "}<a href="http://sascanonline.com/" className="header__link" target="_blank" rel="noopener">Login</a>{" "}<CartButton />{" "}<Link href="/contact" className="btn btn--secondary header__cta" aria-current={active === "contact" ? "page" : undefined}>Contact us</Link>{" "}<button className="icon-btn menu-toggle" id="menuToggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>
  );
}
