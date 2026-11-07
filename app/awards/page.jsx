import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Awards | Sascan Meditech",
  description: "Sascan Meditech awards and recognition — recognized for innovation and excellence.",
};

export default function AwardsPage() {
  return (
    <>
      <Header active="resources" />
      <main id="main">
        <section className="sp-hero pt-hero" id="overview">
          <div className="container">
            <div className="tag-badge reveal"><span>Awards</span></div>
            <div className="sp-hero__row reveal">
              <h1 className="sp-title pt-title">Recognized for Innovation and Excellence</h1>
            </div>
          </div>
        </section>

        <section className="section section--rule" id="awards">
          <div className="container">
            <div className="aw-filter reveal" role="toolbar" aria-label="Filter awards by year" data-aw-filters>
              <button type="button" className="aw-chip is-on" data-aw-filter="all" aria-pressed="true">All</button>
              <button type="button" className="aw-chip" data-aw-filter="2025" aria-pressed="false">2025</button>
              <button type="button" className="aw-chip" data-aw-filter="2024" aria-pressed="false">2024</button>
              <button type="button" className="aw-chip" data-aw-filter="2023" aria-pressed="false">2023</button>
              <button type="button" className="aw-chip" data-aw-filter="2021" aria-pressed="false">2021</button>
              <button type="button" className="aw-chip" data-aw-filter="2020" aria-pressed="false">2020</button>
              <button type="button" className="aw-chip" data-aw-filter="2018" aria-pressed="false">2018</button>
              <button type="button" className="aw-chip" data-aw-filter="2017" aria-pressed="false">2017</button>
              <button type="button" className="aw-chip" data-aw-filter="2015" aria-pressed="false">2015</button>
              <button type="button" className="aw-chip" data-aw-filter="other" aria-pressed="false">Other</button>
            </div>
            <ul className="aw-grid" data-aw-grid>
              <li className="aw-item" data-year="2025">
                <div className="aw-card"><img src="/assets/awards/award-01.webp" width="500" height="500" alt="Startup Mahakumbh – Winner in Bio &amp; Health Track, 2025" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2025</span><span className="aw-item__name">Startup Mahakumbh – Winner in Bio &amp; Health Track</span></p>
              </li>
              <li className="aw-item" data-year="2025">
                <div className="aw-card"><img src="/assets/awards/award-02.webp" width="500" height="500" alt="BW Businessworld – Most Innovative Product of the Year, 2025" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2025</span><span className="aw-item__name">BW Businessworld – Most Innovative Product of the Year</span></p>
              </li>
              <li className="aw-item" data-year="2024">
                <div className="aw-card"><img src="/assets/awards/award-03.webp" width="500" height="500" alt="APAC Insider Business Awards – Best Medical Device Manufacturing Startup, 2024" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2024</span><span className="aw-item__name">APAC Insider Business Awards – Best Medical Device Manufacturing Startup</span></p>
              </li>
              <li className="aw-item" data-year="2024">
                <div className="aw-card"><img src="/assets/awards/award-04.webp" width="500" height="500" alt="MSME Newgen Icon Award, 2024" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2024</span><span className="aw-item__name">MSME Newgen Icon Award</span></p>
              </li>
              <li className="aw-item" data-year="2023">
                <div className="aw-card"><img src="/assets/awards/award-05.webp" width="500" height="500" alt="nasscom Emerge 50 Awards, 2023" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2023</span><span className="aw-item__name">nasscom Emerge 50 Awards</span></p>
              </li>
              <li className="aw-item" data-year="2023">
                <div className="aw-card"><img src="/assets/awards/award-06.webp" width="500" height="500" alt="National Technology Awards – Winner, 2023" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2023</span><span className="aw-item__name">National Technology Awards – Winner</span></p>
              </li>
              <li className="aw-item" data-year="other">
                <div className="aw-card"><img src="/assets/awards/award-07.webp" width="500" height="500" alt="ISQ Quality for Prosperity – National Winner" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__name">ISQ Quality for Prosperity – National Winner</span></p>
              </li>
              <li className="aw-item" data-year="other">
                <div className="aw-card"><img src="/assets/awards/award-08.webp" width="500" height="500" alt="Quality Innovation Award – International Award" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__name">Quality Innovation Award – International Award</span></p>
              </li>
              <li className="aw-item" data-year="2021">
                <div className="aw-card"><img src="/assets/awards/award-09.webp" width="500" height="500" alt="National Startup Awards – Winner, 2021" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2021</span><span className="aw-item__name">National Startup Awards – Winner</span></p>
              </li>
              <li className="aw-item" data-year="2021">
                <div className="aw-card"><img src="/assets/awards/award-10.webp" width="500" height="500" alt="Anjani Mashelkar Inclusive Innovation Award – Winner, 2021" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2021</span><span className="aw-item__name">Anjani Mashelkar Inclusive Innovation Award – Winner</span></p>
              </li>
              <li className="aw-item" data-year="2021">
                <div className="aw-card"><img src="/assets/awards/award-11.webp" width="500" height="500" alt="Startup India Grand Challenge – Winner, 2021" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2021</span><span className="aw-item__name">Startup India Grand Challenge – Winner</span></p>
              </li>
              <li className="aw-item" data-year="2020">
                <div className="aw-card"><img src="/assets/awards/award-12.webp" width="500" height="500" alt="DST sponsored AISEA – Acceleration, 2020" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2020</span><span className="aw-item__name">DST sponsored AISEA – Acceleration</span></p>
              </li>
              <li className="aw-item" data-year="2020">
                <div className="aw-card"><img src="/assets/awards/award-13.webp" width="500" height="500" alt="Startup India HexGn – Acceleration, 2020" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2020</span><span className="aw-item__name">Startup India HexGn – Acceleration</span></p>
              </li>
              <li className="aw-item" data-year="2020">
                <div className="aw-card"><img src="/assets/awards/award-14.webp" width="500" height="500" alt="WIN Foundation Award Winner – NBEC 2020, 2020" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2020</span><span className="aw-item__name">WIN Foundation Award Winner – NBEC 2020</span></p>
              </li>
              <li className="aw-item" data-year="2018">
                <div className="aw-card"><img src="/assets/awards/award-15.webp" width="500" height="500" alt="Villgro I-Pitch – Health Category Winner, 2018" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2018</span><span className="aw-item__name">Villgro I-Pitch – Health Category Winner</span></p>
              </li>
              <li className="aw-item" data-year="2018">
                <div className="aw-card"><img src="/assets/awards/award-16.webp" width="500" height="500" alt="Design Impact Awards – Semi-Finalist, 2018" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2018</span><span className="aw-item__name">Design Impact Awards – Semi-Finalist</span></p>
              </li>
              <li className="aw-item" data-year="2018">
                <div className="aw-card"><img src="/assets/awards/award-17.webp" width="500" height="500" alt="ASME ISHOW – India Segment Runner Up, 2018" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2018</span><span className="aw-item__name">ASME ISHOW – India Segment Runner Up</span></p>
              </li>
              <li className="aw-item" data-year="2017">
                <div className="aw-card"><img src="/assets/awards/award-18.webp" width="500" height="500" alt="SIGMA Zinnov – Acceleration, 2017" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2017</span><span className="aw-item__name">SIGMA Zinnov – Acceleration</span></p>
              </li>
              <li className="aw-item" data-year="2017">
                <div className="aw-card"><img src="/assets/awards/award-19.webp" width="500" height="500" alt="Elevate 100, Government of Karnataka – Winner, 2017" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2017</span><span className="aw-item__name">Elevate 100, Government of Karnataka – Winner</span></p>
              </li>
              <li className="aw-item" data-year="2015">
                <div className="aw-card"><img src="/assets/awards/award-20.webp" width="500" height="500" alt="BIRAC BIG – Winner, 2015" loading="lazy" decoding="async" /></div>
                <p className="aw-item__cap"><span className="aw-item__year mono">2015</span><span className="aw-item__name">BIRAC BIG – Winner</span></p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
