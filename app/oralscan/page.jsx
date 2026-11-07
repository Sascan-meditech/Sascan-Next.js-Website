import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "OralScan — Oral Cancer Screening Device | Sascan Meditech",
  description:
    "OralScan is an optical imaging multimodal device for the early detection of (pre-) cancerous lesions of the oral cavity. CE marked, clinically validated, point-of-care.",
};

export default function OralScanPage() {
  return (
    <>
      <Header active="products" />
      <div className="page-product">
        <main id="main">
            <section className="sp-hero" id="overview">
              <div className="container">
                <div className="tag-badge reveal"><span>Products / OralScan</span></div>
                <div className="sp-hero__row reveal">
                  <h1 className="sp-title">OralScan</h1>
                  <div className="sp-hero__side">
                    <p className="sp-lead">OralScan is an optical imaging multimodal device for the early detection of (pre-) cancerous lesions of the oral cavity.</p>
                    <div className="sp-actions">
                      <a href="#demo" data-demo="OralScan" className="btn btn--primary btn--hook">Request a demo</a>{" "}<Link href="/#contact" className="btn btn--secondary">Get a free Quote</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="device">
              <div className="container sp-device">
                <div className="reveal">
                  <span className="label mono ab-eyebrow">How it works</span>
                  <h2 className="sp-h2">Oral Cancer Screening Device</h2>
                  <p className="pb-p">OralScan is an optical imaging multimodal device for the early detection of (pre-) cancerous lesions of the oral cavity. The device operates on the principle of diffuse reflectance and tissue autofluorescence wherein light undergoes multiple absorption and scattering events before emerging from the tissue surface. Tumour tissues undergo biochemical and morphological changes during the process of carcinogenesis, which is reflected in the optical signals emanating from the tissue.</p>
                  <p className="pb-p">The device uses an optical system with custom-built software and algorithms for tissue analysis. OralScan enables the physician to visualize and discriminate between healthy and potentially malignant sites of the oral cavity before they perform a biopsy. The diagnostic advantages of OralScan include non-invasive in vivo procedures and services, wide-field imaging of the oral cavity, utilization of a cloud-based machine learning algorithm for real-time feedback on tissue status, and application of oxygenated haemoglobin (HbO2) absorption maps for biopsy guidance.</p>
                </div>
                <figure className="sp-fig reveal">
                  <figcaption className="sp-fig__cap mono"><span>Fig. 01 — OralScan kit</span><span className="accent">Model OS-01</span></figcaption>
                  <div className="sp-fig__img sp-fade">
                    <img src="/assets/oralscan/oralscan-kit-laptop.webp" width="1200" height="1200" alt="OralScan kit with laptop running the OralScan software" decoding="async" />{" "}<img src="/assets/oralscan/oralscan-kit-case.webp" width="1200" height="1200" alt="OralScan kit in its protective carry case" decoding="async" />
                  </div>
                  <p className="sp-fig__foot mono"><span>Handheld</span><span>Point-of-care</span><span>CE Marked</span></p>
                </figure>
              </div>
            </section>

            <section className="section section--rule sx" id="specifications">
              <div className="container">
                <h2 className="sp-h2 sx-title reveal">Specifications</h2>
                <ul className="sx-list reveal">
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Non-invasive, hand-held intraoral multimodal imaging device integrated with a high resolution (5MPx) monochrome CMOS sensor (2592×1944 resolution, 2.2 micron size pixels)</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Quantitative and real time feedback on tissue status with the help of a cloud based Machine Learning (ML) algorithm</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Clinically validated device for screening and early detection of oral potentially malignant lesions (OPML)</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Tissue illumination with violet (405nm), green (542nm) and red (610nm) LEDs</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Portable for use along with a Windows Tablet or Laptop in remote locations</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Trained health workers and paramedical staff can operate the instrument</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Suitable for periodic reviews following surgical/radiation treatments</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>Quick and pain free screening</span></li>
                </ul>
              </div>
            </section>

            <section className="section section--rule" id="testimonials">
              <div className="container">
                <div className="sp-sechead reveal"><span className="label mono ab-eyebrow">Testimonials</span><h2 className="sp-h2">What they say about <span className="accent">OralScan</span></h2></div>
                <div className="sp-quotes reveal">
                  <figure className="sp-quote">
                    <p className="sp-quote__tag"><span className="os-stars" aria-label="Rated 4.5 out of 5"><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star os-star--half"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span></span></p>
                    <blockquote>We are impressed by the innovation and effort behind this device. Our Dean, Trustee, and faculty appreciate its outstanding performance.</blockquote>
                    <figcaption><img src="/assets/oralscan/dr-devarsh-mavani.webp" width="160" height="160" alt="" loading="lazy" /><span><strong>Dr Devarsh Mavani</strong><span className="mono">Ahmedabad Dental College</span></span></figcaption>
                  </figure>
                  <figure className="sp-quote">
                    <p className="sp-quote__tag"><span className="os-stars" aria-label="Rated 4.5 out of 5"><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star os-star--half"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span></span></p>
                    <blockquote>As a non-invasive imaging solution, provides valuable support in clinical decision-making and has the potential to improve diagnostics</blockquote>
                    <figcaption><img src="/assets/oralscan/dr-anita-balan.webp" width="160" height="160" alt="" loading="lazy" /><span><strong>Dr Anita Balan</strong><span className="mono">Principal, GDC, Thiruvananthapuram</span></span></figcaption>
                  </figure>
                  <figure className="sp-quote">
                    <p className="sp-quote__tag"><span className="os-stars" aria-label="Rated 5 out of 5"><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span><span className="os-star"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z" /></svg></span></span></p>
                    <blockquote>OralScan-guided biopsy successfully diagnosed a well-differentiated cell carcinoma (SCC), highlighting its strong clinical potential.</blockquote>
                    <figcaption><img src="/assets/oralscan/dr-sanjay-cj.webp" width="160" height="160" alt="" loading="lazy" /><span><strong>Dr Sanjay C. J., MDS</strong><span className="mono">Business Owner / Dental Practitioner</span></span></figcaption>
                  </figure>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="screening">
              <div className="container">
                <div className="sp-sechead reveal"><span className="label mono ab-eyebrow">Field work</span><h2 className="sp-h2">Screening Programs &amp; Awareness Campaigns</h2></div>
                <div className="os-events reveal">
                  <article className="os-event">
                    <div className="os-event__img"><img src="/assets/oralscan/camp-champavu.webp" width="675" height="900" alt={"Oral Cancer Screening & Dental Check-up Camp"} loading="lazy" decoding="async" /><span className="os-event__date"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>24th May 2026</span></div>
                    <h3 className="os-event__title">Oral Cancer Screening &amp; Dental Check-up Camp</h3>
                    <p>Oral Cancer Screening &amp; Dental Check-up Camp organized by the Indian Dental Association on 24th May 2026 at Karmala Matha Church, Champavu.</p>
                  </article>
                  <article className="os-event">
                    <div className="os-event__img"><img src="/assets/oralscan/nellai-cancer-institute.webp" width="900" height="675" alt="Demonstration camp done at Nellai Cancer Institute" loading="lazy" decoding="async" /><span className="os-event__date"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>31st Jan 2026</span></div>
                    <h3 className="os-event__title">Demonstration camp done at Nellai Cancer Institute</h3>
                    <p>Conducted a demonstration of our revolutionary OralScan device for medical, dental, and AYUSH doctors, along with nursing staff and the paramedical team.</p>
                  </article>
                  <article className="os-event">
                    <div className="os-event__img"><img src="/assets/oralscan/meherbai-tata-memorial.webp" width="900" height="675" alt="Demonstration and training session at Meherbai Tata Memorial Hospital" loading="lazy" decoding="async" /><span className="os-event__date"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>12th Jan 2026</span></div>
                    <h3 className="os-event__title">Demonstration and training session at Meherbai Tata Memorial Hospital</h3>
                    <p>We recently conducted a hands-on demonstration and training session for medical officers at Meherbai Tata Memorial Hospital, Jamshedpur</p>
                  </article>
                </div>
              </div>
            </section>

          </main>
      </div>
      <Footer />
    </>
  );
}
