import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Board of Advisors | Sascan Meditech",
  description:
    "Meet the Sascan Meditech board of advisors — strategic insight from industry leaders.",
};

export default function AdvisorsPage() {
  return (
    <>
      <Header active="company" />
      <div className="page-team">
        <main id="main">
            <section className="sp-hero pt-hero" id="overview">
              <div className="container">
                <div className="tag-badge reveal"><span>Advisors</span></div>
                <div className="sp-hero__row reveal">
                  <h1 className="sp-title pt-title">Meet our board of advisors</h1>
                  <p className="pt-quote">“Strategic insight from industry leaders.”</p>
                </div>
              </div>
            </section>

            <section className="section section--rule pt" id="advisors">
              <div className="container">
                <div className="pt-panel is-on">
                  <ul className="pt-grid pt-grid--3">
                    <li className="pt-card pt-card--person" style={{ "--i": "0" }}>
                      <span className="pt-card__photo"><img src="/assets/advisors/dr-vishal-rao.webp" width="500" height="500" alt="Dr Vishal Rao U.S." loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__body">
                        <span className="pt-card__person">Dr Vishal Rao U.S.</span>{" "}<span className="pt-card__role">Head &amp; Neck Surgeon (HCG) Cancer Centre Bangalore</span>
                      </span>
                    </li>
                    <li className="pt-card pt-card--person" style={{ "--i": "1" }}>
                      <span className="pt-card__photo"><img src="/assets/advisors/dr-shyam-vasudev-rao.webp" width="500" height="500" alt="Dr. Shyam Vasudev Rao" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__body">
                        <span className="pt-card__person">Dr. Shyam Vasudev Rao</span>{" "}<span className="pt-card__role">Founder Director, Forus Health Pvt Ltd &amp; Renalyx Systems Pvt Ltd, Bangalore</span>
                      </span>
                    </li>
                    <li className="pt-card pt-card--person" style={{ "--i": "2" }}>
                      <span className="pt-card__photo"><img src="/assets/advisors/avelo-roy.webp" width="500" height="500" alt="Avelo Roy" loading="lazy" decoding="async" /></span>{" "}<span className="pt-card__body">
                        <span className="pt-card__person">Avelo Roy</span>{" "}<span className="pt-card__role">MD, Kolkata Ventures, Former Startup Advisor of Prime Minister of Nepal</span>
                      </span>
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
