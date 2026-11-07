import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <Link href="/#home" className="logo logo--footer" aria-label="Sascan home">
              <img className="logo__img" src="/assets/sascan-logo-1.png" width="286" height="53" alt="Sascan – Saving Lives" />
            </Link>
              <p>Innovating medical technology for better healthcare. Committed to quality, safety, and clinical excellence.</p>
              <div className="socials">
                <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22z" /></svg></a>{" "}<a href="#" aria-label="X (Twitter)"><svg viewBox="0 0 24 24"><path d="M17.8 3h3.3l-7.2 8.2L22.4 21h-6.6l-5.2-6.8L4.6 21H1.3l7.7-8.8L1 3h6.8l4.7 6.2zm-1.2 16h1.8L7.5 4.9H5.5z" /></svg></a>{" "}<a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1z" /></svg></a>{" "}<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4 9h4v11H4zM6 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.8v1.6c.6-1 1.9-1.9 3.7-1.9 3.4 0 4.5 2 4.5 5.4V20h-4v-5.2c0-1.4-.3-2.6-1.8-2.6s-2.2 1-2.2 2.6V20h-4z" /></svg></a>{" "}<a href="#" aria-label="Instagram"><svg className="is-stroke" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" /></svg></a>
              </div>
            </div>
            <div className="footer__col">
              <h4 className="mono">Company</h4>
              <ul><li><Link href="/about">About Us</Link></li><li><Link href="/team">Our Team</Link></li><li><Link href="/partners">Partners &amp; Collaborators</Link></li><li><Link href="/awards">Awards</Link></li><li><Link href="/careers">Careers</Link></li></ul>
            </div>
            <div className="footer__col">
              <h4 className="mono">Products</h4>
              <ul><li><Link href="/oralscan">OralScan</Link></li><li><Link href="/curelite">CureLite</Link></li><li><Link href="/curelaze">CureLaze</Link></li><li><Link href="/curewrap">CureWrap</Link></li></ul>
            </div>
            <div className="footer__col">
              <h4 className="mono">Support</h4>
              <ul><li><Link href="/#contact">Contact Us</Link></li><li><a href="#demo">Request a Demo</a></li><li><Link href="/faq">FAQ</Link></li><li><Link href="/#news">News &amp; Events</Link></li><li><a href="https://wa.me/919446697551" target="_blank" rel="noopener">Help &amp; WhatsApp Support</a></li></ul>
            </div>
          </div>
          <div className="footer__bottom mono">
            <p>© <span id="year">2026</span> Sascan Meditech Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  );
}
