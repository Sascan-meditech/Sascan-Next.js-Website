import fs from "node:fs";
import path from "node:path";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact Us | Sascan Meditech",
  description:
    "Get in touch with Sascan Meditech for inquiries, collaborations, or product details. TIMed, 5th Floor, MSV Building, SCTIMST, Poojapura.",
};

const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/sascanmeditech/", icon: <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22z" /> },
  { label: "X (Twitter)", href: "https://x.com/Sascanmeditech", icon: <path d="M17.8 3h3.3l-7.2 8.2L22.4 21h-6.6l-5.2-6.8L4.6 21H1.3l7.7-8.8L1 3h6.8l4.7 6.2zm-1.2 16h1.8L7.5 4.9H5.5z" /> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCM6I548_6yxXqXrfodbqbww", icon: <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.7 3.1z" /> },
  { label: "LinkedIn", href: "https://in.linkedin.com/company/sascan-meditech-pvt.-ltd.", icon: <path d="M4 9h4v11H4zM6 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.8v1.6c.6-1 1.9-1.9 3.7-1.9 3.4 0 4.5 2 4.5 5.4V20h-4v-5.2c0-1.4-.3-2.6-1.8-2.6s-2.2 1-2.2 2.6V20h-4z" /> },
  { label: "Instagram", href: "https://www.instagram.com/sascan_meditech/", stroke: true, icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" /></> },
];

/* Office photo: drop the file into public/assets/contact/ as office.webp (or .jpg / .jpeg / .png)
   and rebuild. Until then a placeholder box is shown. */
const OFFICE_PHOTO = ['webp', 'jpg', 'jpeg', 'png']
  .map((ext) => "/assets/contact/office." + ext)
  .find((p) => fs.existsSync(path.join(process.cwd(), 'public', p)));

const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Sascan+Meditech+Pvt+Ltd";

const ICONS = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
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
      <Header />
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
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                  Google Map
                </a>
              </div>

              <div className="ct-loc__right">
                <ul className="ct-cards">
                  {CARDS.map((c) => (
                    <li key={c.href} className="ct-ccard reveal">
                      <span className="ct-ccard__icon" aria-hidden="true"><svg viewBox="0 0 24 24">{ICONS[c.icon]}</svg></span>
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
                        <svg className={s.stroke ? "is-stroke" : undefined} viewBox="0 0 24 24">{s.icon}</svg>
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
