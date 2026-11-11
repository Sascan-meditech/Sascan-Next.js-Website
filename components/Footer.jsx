import Link from "next/link";
import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

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
                <a href="https://www.facebook.com/sascanmeditech/" target="_blank" rel="noopener" aria-label="Sascan on Facebook"><FacebookLogo weight="regular" className="pi" aria-hidden="true" /></a>{" "}<a href="https://x.com/Sascanmeditech" target="_blank" rel="noopener" aria-label="Sascan on X (Twitter)"><XLogo weight="regular" className="pi" aria-hidden="true" /></a>{" "}<a href="https://www.youtube.com/channel/UCM6I548_6yxXqXrfodbqbww" target="_blank" rel="noopener" aria-label="Sascan on YouTube"><YoutubeLogo weight="regular" className="pi" aria-hidden="true" /></a>{" "}<a href="https://in.linkedin.com/company/sascan-meditech-pvt.-ltd." target="_blank" rel="noopener" aria-label="Sascan on LinkedIn"><LinkedinLogo weight="regular" className="pi" aria-hidden="true" /></a>{" "}<a href="https://www.instagram.com/sascan_meditech/" target="_blank" rel="noopener" aria-label="Sascan on Instagram"><InstagramLogo weight="regular" className="pi is-stroke" aria-hidden="true" /></a>
              </div>
            </div>
            <div className="footer__col">
              <h4 className="mono">Company</h4>
              <ul><li><Link href="/about">About Us</Link></li><li><Link href="/team">Our Team</Link></li><li><Link href="/partners">Partners &amp; Collaborators</Link></li><li><Link href="/advisors">Board of Advisors</Link></li><li><Link href="/awards">Awards</Link></li><li><Link href="/careers">Careers</Link></li></ul>
            </div>
            <div className="footer__col">
              <h4 className="mono">Products</h4>
              <ul><li><Link href="/oralscan">OralScan</Link></li><li><Link href="/cerviscan">CerviScan</Link></li><li><Link href="/vaguslite">VagusLite</Link></li><li><Link href="/curelite">CureLite</Link></li><li><Link href="/curelaze">CureLaze</Link></li><li><Link href="/curewrap">CureWrap</Link></li></ul>
            </div>
            <div className="footer__col">
              <h4 className="mono">Support</h4>
              <ul><li><Link href="/contact">Contact Us</Link></li><li><a href="#demo">Request a Demo</a></li><li><Link href="/faq">FAQ</Link></li><li><Link href="/#news">News &amp; Events</Link></li><li><a href="https://wa.me/919446697551" target="_blank" rel="noopener">Help &amp; WhatsApp Support</a></li></ul>
            </div>
          </div>
          <div className="footer__bottom mono">
            <p>© <span id="year">2026</span> Sascan Meditech Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  );
}
