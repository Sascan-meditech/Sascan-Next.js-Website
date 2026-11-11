import fs from "node:fs";
import path from "node:path";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import { EnvelopeSimple, FacebookLogo, InstagramLogo, LinkedinLogo, MapPin, Phone, XLogo, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Contact Us | Sascan Meditech",
  description:
    "Get in touch with Sascan Meditech for inquiries, collaborations, or product details. TIMed, 5th Floor, MSV Building, SCTIMST, Poojapura.",
};

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/sascanmeditech/", icon: <FacebookLogo weight="regular" className="pi" aria-hidden="true" /> },
  { label: "X (Twitter)", href: "https://x.com/Sascanmeditech", icon: <XLogo weight="regular" className="pi" aria-hidden="true" /> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCM6I548_6yxXqXrfodbqbww", icon: <YoutubeLogo weight="regular" className="pi" aria-hidden="true" /> },
  { label: "LinkedIn", href: "https://in.linkedin.com/company/sascan-meditech-pvt.-ltd.", icon: <LinkedinLogo weight="regular" className="pi" aria-hidden="true" /> },
  { label: "Instagram", href: "https://www.instagram.com/sascan_meditech/", icon: <InstagramLogo weight="regular" className="pi" aria-hidden="true" /> },
];

/* Office photo: drop the file into public/assets/contact/ as office.webp (or .jpg / .jpeg / .png)
   and rebuild. Until then a placeholder box is shown. */
const OFFICE_PHOTO = ['webp', 'jpg', 'jpeg', 'png']
  .map((ext) => "/assets/contact/office." + ext)
  .find((p) => fs.existsSync(path.join(process.cwd(), 'public', p)));

const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Sascan+Meditech+Pvt+Ltd";

const ICONS = {
  phone: <Phone weight="light" className="pi" aria-hidden="true" />,
  email: <EnvelopeSimple weight="light" className="pi" aria-hidden="true" />,
};

const CARDS = [
  { label: "Phone", value: "(+91) 9188851148", href: "tel:+919188851148", icon: "phone" },
  { label: "Phone", value: "9446697551", href: "tel:+919446697551", icon: "phone" },
  { label: "Email", value: "sascanmeditech@gmail.com", href: "mailto:sascanmeditech@gmail.com", icon: "email" },
  { label: "Email", value: "info@sascan.in", href: "mailto:info@sascan.in", icon: "email" },
];

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main id="main">
        {/* Hero: heading on the left, tabbed form on the right */}
        <section className="ct-hero" id="overview">
          <div className="container ct-hero__grid">
            <div className="ct-hero__copy">
              <div className="tag-badge reveal"><span>Contact Us</span></div>
              <h1 className="ct-hero__title reveal">Get In Touch With Us</h1>
              <p className="ct-hero__lead reveal">Reach out for inquiries, collaborations, or product details.</p>
              <p className="ct-hero__sub reveal">Message us, we will be in touch shortly</p>
            </div>
            <div className="ct-hero__form reveal">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Location: office photo + address on the left, contact cards on the right */}
        <section className="section section--rule ct-loc" id="location">
          <div className="container">
            <div className="ct-loc__grid">
              <div className="ct-place reveal">
                <figure className={OFFICE_PHOTO ? "ct-place__photo" : "ct-place__photo is-empty"}>
                  {OFFICE_PHOTO ? (
                    <img src={OFFICE_PHOTO} alt="Sascan Meditech office" loading="lazy" decoding="async" />
                  ) : (
                    <span className="ct-place__placeholder">Office photo</span>
                  )}
                </figure>
                <div className="ct-place__title">
                  <span className="ct-flag" aria-hidden="true"><i /><i /><i /></span>
                  <h2>INDIA</h2>
                </div>
                <address className="ct-place__addr"><strong>Sascan Meditech Pvt Ltd.</strong><br />TIMed, 5th Floor, MSV Building, SCTIMST,<br />Poojapura, Thiruvananthapuram,<br />Kerala 695012, India</address>
                <a className="ct-place__link" href={MAP_LINK} target="_blank" rel="noopener">
                  <MapPin weight="light" className="pi" aria-hidden="true" />
                  Google Map
                </a>
              </div>

              <div className="ct-loc__right">
                <ul className="ct-cards">
                  {CARDS.map((c) => (
                    <li key={c.href} className="ct-ccard reveal">
                      <span className="ct-ccard__icon" aria-hidden="true">{ICONS[c.icon]}</span>
                      <span className="ct-ccard__info">
                        <span className="ct-ccard__label">{c.label}</span>
                        <a className="ct-ccard__value" href={c.href}>{c.value}</a>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="ct-follow reveal">
                  <p className="ct-follow__label mono">Follow our social media</p>
                  <div className="socials">
                    {SOCIALS.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
