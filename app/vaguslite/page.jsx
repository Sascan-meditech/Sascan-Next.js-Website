import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Check } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "VagusLite — PBM Vagus Nerve Stimulation | Sascan Meditech",
  description:
    "VagusLite is a photobiomodulation (PBM) based vagus nerve stimulation device for gut health and mood disorders.",
};

export default function VagusLitePage() {
  return (
    <>
      <Header active="products" />
      <div className="page-product">
        <main id="main">
            <section className="sp-hero" id="overview">
              <div className="container">
                <div className="tag-badge reveal"><span>Products / VagusLite</span></div>
                <div className="sp-hero__row reveal">
                  <h1 className="sp-title">VagusLite</h1>
                  <div className="sp-hero__side">
                    <p className="sp-lead">A photobiomodulation (PBM) based vagus nerve stimulation device for gut health and mood disorders.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="device">
              <div className="container sp-device cv-device">
                <div className="reveal">
                  <p className="pb-p">The vagus nerve, the longest cranial nerve in your body, serves as the primary communication highway between your brain and digestive system. This critical component of the parasympathetic nervous system regulates everything from heart rate variability to gut motility, making it essential for overall health and well-being. VagusLite represents a breakthrough in non-invasive vagus nerve stimulation, utilizing advanced photobiomodulation (PBM) technology to support optimal vagal function naturally.</p>
                  <p className="pb-p">VagusLite is an innovative wellness device that harnesses the therapeutic power of near-infrared light therapy to stimulate and support vagus nerve function. Unlike traditional electrical vagus nerve stimulation (VNS) devices that require surgical implantation, VagusLite offers a completely non-invasive alternative using targeted light wavelengths.</p>
                </div>
                <figure className="sp-fig reveal">
                  <div className="sp-fig__img vl-single">
                    <img src="/assets/vaguslite/vaguslite-device.webp?v=2" width="1200" height="1152" alt="VagusLite neck collar device" decoding="async" />
                  </div>
                </figure>
              </div>
            </section>

            <section className="section section--rule vl-sci" id="science">
              <div className="container">
                <div className="vl-hero reveal">
                  <div className="vl-hero__text">
                    <h2 className="sp-h2">Science Behind PBM for Vagus Nerve Health</h2>
                    <p className="pb-p">Photobiomodulation therapy represents a paradigm shift in vagus nerve stimulation, moving beyond electrical activation to cellular-level enhancement. This low-level light therapy approach targets the fundamental biochemical processes within nerve tissue.</p>
                  </div>
                  <figure className="vl-hero__img">
                    <img src="/assets/vaguslite/vagus-nerve-brain.webp" width="1000" height="563" alt="Illustration of the brain and the vagus nerve running down the neck" loading="lazy" decoding="async" />
                  </figure>
                </div>
                <div className="vl-cols">
                  <article className="vl-col reveal">
                    <h3 className="vl-col__title">Key Features of VagusLite Technology</h3>
                    <ul className="vl-items">
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Dual-wavelength system</h4><p className="vl-item__desc">810nm near-infrared LEDs targeting the carotid triangle region</p></div>
                      </li>
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Intranasal photobiomodulation</h4><p className="vl-item__desc">650nm red light therapy for comprehensive neural support</p></div>
                      </li>
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Comfortable neck collar design</h4><p className="vl-item__desc">Ergonomic, wearable form factor for daily use</p></div>
                      </li>
                    </ul>
                  </article>
                  <article className="vl-col reveal">
                    <h3 className="vl-col__title">Mitochondrial Activation and ATP Enhancement</h3>
                    <ul className="vl-items">
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Cytochrome c oxidase stimulation</h4><p className="vl-item__desc">Near-infrared light activates this key mitochondrial enzyme</p></div>
                      </li>
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Increased cellular energy production</h4><p className="vl-item__desc">Enhanced ATP synthesis supports optimal nerve function</p></div>
                      </li>
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Improved mitochondrial biogenesis</h4><p className="vl-item__desc">Light therapy promotes the formation of new cellular powerhouses</p></div>
                      </li>
                    </ul>
                  </article>
                  <article className="vl-col reveal">
                    <h3 className="vl-col__title">Neuroprotective and Anti-Inflammatory Effects</h3>
                    <ul className="vl-items">
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Reduced neuroinflammation</h4><p className="vl-item__desc">PBM modulates inflammatory cytokines affecting vagal function</p></div>
                      </li>
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Enhanced nerve growth factors</h4><p className="vl-item__desc">Stimulation of BDNF and other neurotrophic factor</p></div>
                      </li>
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Oxidative stress reduction</h4><p className="vl-item__desc">Antioxidant pathway activation protects nerve tissue</p></div>
                      </li>
                      <li className="vl-item">
                        <span className="vl-tick"><Check weight="regular" className="pi" aria-hidden="true" /></span>
                        <div><h4 className="vl-item__term">Improved microcirculation</h4><p className="vl-item__desc">Enhanced blood flow supports nerve health and function</p></div>
                      </li>
                    </ul>
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
