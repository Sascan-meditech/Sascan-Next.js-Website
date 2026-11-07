import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Partners & Collaborators | Sascan Meditech",
  description:
    "Sascan Meditech is backed by visionary investors and supported by leading clinical partners and collaborators.",
};

export default function PartnersPage() {
  return (
    <>
      <Header active="company" />
      <div className="page-team">
        <main id="main">
            <section className="sp-hero pt-hero" id="overview">
              <div className="container">
                <div className="tag-badge reveal"><span>Partners &amp; Collaborators</span></div>
                <div className="sp-hero__row reveal">
                  <h1 className="sp-title pt-title">Our Network</h1>
                </div>
              </div>
            </section>

            <section className="section section--rule pt" id="network">
              <div className="container" data-partner-tabs="">
                <div className="pt-tabs reveal" role="tablist" aria-label="Partner groups">
                  <button type="button" className="pt-tab is-on" role="tab" id="tab-investors" aria-controls="investors" aria-selected="true">Our Investors</button>{" "}<button type="button" className="pt-tab" role="tab" id="tab-supported-by" aria-controls="supported-by" aria-selected="false" tabIndex={-1}>We are supported by</button>{" "}<button type="button" className="pt-tab" role="tab" id="tab-clinical-partners" aria-controls="clinical-partners" aria-selected="false" tabIndex={-1}>Clinical Partners &amp; Collaborators</button>{" "}<span className="pt-tabs__ink" aria-hidden="true"></span>
                </div>
                <div className="pt-panel is-on" role="tabpanel" id="investors" aria-labelledby="tab-investors">
                  <p className="pt-intro">Backed by visionary investors who share our commitment to improving healthcare through innovative medical technologies.</p>
                  <ul className="pt-grid pt-grid--4">
                    <li className="pt-card" style={{ "--i": "0" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/timed.webp" width="520" height="200" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">TIMed – Sree Chitra Tirunal Institute for Medical Sciences and Technology</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "1" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/fischer-medical-ventures.webp" width="378" height="347" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Fischer Medical Ventures Ltd</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "2" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/unicorn-india-ventures.webp" width="520" height="244" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Unicorn India Ventures</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "3" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/kiit-tbi.webp" width="520" height="237" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">KIIT Technology Business Incubator (KIIT-TBI)</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-panel" role="tabpanel" id="supported-by" aria-labelledby="tab-supported-by" hidden>
                  <ul className="pt-grid pt-grid--4">
                    <li className="pt-card" style={{ "--i": "0" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/timed.webp" width="520" height="200" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">TIMed – Sree Chitra Tirunal Institute for Medical Sciences and Technology</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "1" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/kerala-startup-mission.webp" width="392" height="231" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Kerala Startup Mission</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "2" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/birac.webp" width="520" height="385" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">BIRAC – Biotechnology Industry Research Assistance Council</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "3" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/startup-karnataka.webp" width="520" height="380" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Startup Karnataka</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-panel" role="tabpanel" id="clinical-partners" aria-labelledby="tab-clinical-partners" hidden>
                  <ul className="pt-grid pt-grid--5">
                    <li className="pt-card" style={{ "--i": "0" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/sctimst.webp" width="421" height="520" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Sree Chitra Tirunal Institute for Medical Sciences and Technology, Trivandrum</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "1" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/gdc-thiruvananthapuram.webp" width="520" height="515" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Government Dental College, Thiruvananthapuram</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "2" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/rcc-thiruvananthapuram.webp" width="218" height="221" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Regional Cancer Centre, Thiruvananthapuram</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "3" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/mch-thiruvananthapuram.webp" width="520" height="148" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Medical College, Thiruvananthapuram</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "4" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/gdc-kottayam.webp" width="486" height="469" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Government Dental College, Kottayam</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "5" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/ims-sum-hospital.webp" width="517" height="520" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Institute of Medical Sciences &amp; SUM Hospital, Siksha 'O' Anusandhan</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "6" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/sree-balaji-dental-college.webp" width="385" height="353" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Sree Balaji Dental College &amp; Hospital, Chennai</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "7" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/kasturba-medical-college.webp" width="427" height="520" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">Kasturba Medical College</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "8" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/hcg.webp" width="520" height="147" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">HCG – The Specialist in Cancer Care</span>
                    </li>
                    <li className="pt-card" style={{ "--i": "9" }}>
                      <span className="pt-card__logo"><img src="/assets/partners/pms-dental-college.webp" width="410" height="520" alt="" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__name">PMS College of Dental Science &amp; Research</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
      </div>
      <Footer />
    </>
  );
}
