import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Eye, Globe, Heart, MagnifyingGlass, MapTrifold, Stethoscope, Sun, Target } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "About Us | Sascan Meditech",
  description:
    "Sascan Meditech, founded in 2015 in Thiruvananthapuram, develops affordable biophotonics-based medical devices for early cancer detection and disease management.",
};

export default function AboutPage() {
  return (
    <>
      <Header active="company" />
      <div className="page-about">
        <main id="main">
            <section className="ab-hero" id="about-hero">
              <div className="container reveal">
                <div className="tag-badge"><span>About Sascan</span></div>
                <h1 className="ab-hero__title">Illuminating the path to <span className="accent">a healthier world.</span></h1>
                <p className="ab-hero__text">Revolutionizing cancer screening with biophotonics.</p>
                <dl className="ab-facts">
                  <div><dt className="mono">Founded</dt><dd>2015</dd></div>
                  <div><dt className="mono">Founder</dt><dd>Dr Subhash Narayanan</dd></div>
                  <div><dt className="mono">Based in</dt><dd>Thiruvananthapuram, India</dd></div>
                  <div><dt className="mono">The name</dt><dd>Sāns <span className="accent">+</span> can</dd></div>
                </dl>
              </div>
            </section>

            <section className="section section--rule" id="story">
              <div className="container ab-sec">
                <div className="ab-sec__head reveal">
                  <h2>Revolutionizing Cancer Screening With <span className="accent">Biophotonics</span></h2>
                  <figure className="ab-photo"><img src="/assets/sascan-award.webp" width="1200" height="760" alt="Sascan team receiving an award on stage at a national science and technology event" loading="lazy" decoding="async" /></figure>
                </div>
                <div className="ab-sec__body reveal">
                  <p className="ab-lead">Founded in 2015 by Dr Subhash Narayanan, a laser scientist with a strong interest in the development of Biophotonics products, Sāscan is an emerging healthcare innovation company focused on developing affordable cancer-care solutions using Biophotonics technology.</p>
                  <p>The company was built by a multidisciplinary team of doctors, engineers, and design thinkers dedicated to improving healthcare accessibility, especially for rural communities. The name “Sascan” is inspired by the Hindi word “Sāns” (breath) and “can” from cancer, reflecting the company’s use of oxygenated hemoglobin absorption mapping to identify potentially malignant tissue changes.</p>
                  <p>Sascan’s mission is to create accessible and sustainable healthcare technologies for early cancer detection and treatment. Its flagship product, <strong className="term">OralScan</strong>, is a handheld multimodal imaging device designed for non-invasive, real-time oral cancer screening and biopsy guidance. Powered by advanced multispectral imaging technology and intuitive software, OralScan enables even trained health workers to capture patient data and share reports with clinicians for further evaluation.</p>
                  <p>Driven by the vision of saving lives, Sascan is expanding its innovation pipeline into cervical, colon, and aero-digestive tract cancer management. Upcoming solutions include <strong className="term">CerviScan</strong>, a next-generation alternative to conventional digital colposcopy, along with advanced <strong className="term">photodynamic therapy (PDT)</strong> devices for treating oral lesions and drug-resistant infections such as diabetic foot ulcers.</p>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="vision">
              <div className="container ab-sec">
                <div className="ab-sec__head reveal">
                  <span className="label mono ab-eyebrow">Our purpose</span>
                  <h2>Vision &amp; <span className="accent">Mission</span></h2>
                </div>
                <div className="ab-sec__body reveal">
                  <ul className="ab-vm">
                    <li><p className="ab-vm__label mono"><Eye weight="light" className="pi ico" aria-hidden="true" />Vision</p><p className="ab-vm__text">To illuminate the path to a healthier world by harnessing the power of biophotonics, ensuring that early detection and effective management of life-threatening diseases are accessible to every individual.</p></li>
                    <li><p className="ab-vm__label mono"><Target weight="light" className="pi ico" aria-hidden="true" />Mission</p><p className="ab-vm__text">Focusing on the interaction of light with biological systems, we innovate, manufacture and commercialize cutting edge medical devices for detection of diseases at their inception and precise management, with a dedicated commitment to social impact.</p></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="who-we-are">
              <div className="container ab-sec">
                <div className="ab-sec__head reveal">
                  <span className="label mono ab-eyebrow">Our team</span>
                  <h2>Who <span className="accent">We Are</span></h2>
                </div>
                <div className="ab-sec__body reveal">
                  <p className="ab-lead">We are a pioneering medical technology company dedicated to rewriting the rules of early disease detection.</p>
                  <p>Founded on the principle that light is the essence of life, our team brings together experts in biophotonics, optical imaging, and medical spectroscopy. Operating from our advanced facility in Thiruvananthapuram, India, we bridge the gap between complex optical science and real-world clinical solutions. We are innovators, manufacturers, and changemakers driven by a single, powerful goal: to make cancer screening non-invasive, accessible, and affordable for everyone.</p>
                  <div>
                    <p className="label mono ab-sublabel">Our core focus spans</p>
                    <ul className="ab-list">
                      <li><span>Biophotonic innovations</span><i aria-hidden="true"></i></li>
                      <li><span>Non-invasive early cancer screening devices</span><i aria-hidden="true"></i></li>
                      <li><span>Optical solutions for precise disease management</span><i aria-hidden="true"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="what-we-do">
              <div className="container ab-sec">
                <div className="ab-sec__head reveal">
                  <span className="label mono ab-eyebrow">Our core areas</span>
                  <h2>What <span className="accent">We Do</span></h2>
                </div>
                <div className="ab-sec__body reveal">
                  <p className="ab-lead">We study and harness the precise interaction of light with biological systems to create next-generation healthcare devices.</p>
                  <p>Sascan Meditech handles the entire lifecycle of medtech innovation from proprietary research and product design to indigenous manufacturing and global commercialization. Our core areas include:</p>
                  <div className="ab-acc__list">
                    <details className="ab-acc__item" open>
                      <summary><span className="ab-acc__icon"><Sun weight="light" className="pi ico" aria-hidden="true" /></span><span className="ab-acc__title">Biophotonic Innovation</span><span className="ab-acc__plus" aria-hidden="true"></span></summary>
                      <p>Developing proprietary, light-based diagnostic technologies like multi-spectral and autofluorescence imaging.</p>
                    </details>
                    <details className="ab-acc__item">
                      <summary><span className="ab-acc__icon"><MagnifyingGlass weight="light" className="pi ico" aria-hidden="true" /></span><span className="ab-acc__title">Early Screening</span><span className="ab-acc__plus" aria-hidden="true"></span></summary>
                      <p>Building non-invasive medical devices that empower clinicians to detect oral and cervical cancers at early, treatable stages.</p>
                    </details>
                    <details className="ab-acc__item">
                      <summary><span className="ab-acc__icon"><MapTrifold weight="light" className="pi ico" aria-hidden="true" /></span><span className="ab-acc__title">Disease Management</span><span className="ab-acc__plus" aria-hidden="true"></span></summary>
                      <p>Designing optical solutions that aid in treatment, mapping, and precise management of tissue abnormalities.</p>
                    </details>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="impact">
              <div className="container ab-sec">
                <div className="ab-sec__head reveal">
                  <span className="label mono ab-eyebrow">Three key areas</span>
                  <h2>Our <span className="accent">Impact</span></h2>
                </div>
                <div className="ab-sec__body reveal">
                  <p className="ab-lead">Our technology helps shift healthcare from reactive treatment to proactive early intervention.</p>
                  <p>By replacing invasive, painful, and expensive screening method we create impact across three key areas:</p>
                </div>
                <div className="ab-blok ab-sec__full reveal">
                    <article className="ab-blok__col">
                      <p className="ab-blok__tag mono">Clinical<span aria-hidden="true"></span></p>
                      <span className="ab-blok__icon"><Stethoscope weight="light" className="pi ico" aria-hidden="true" /></span>
                      <h3 className="ab-blok__title">Clinical Impact</h3>
                      <p>We provide healthcare workers and clinicians with accurate, objective, real-time screening tools that reduce diagnostic delays and support earlier detection.</p>
                    </article>
                    <article className="ab-blok__col">
                      <p className="ab-blok__tag mono">Patient<span aria-hidden="true"></span></p>
                      <span className="ab-blok__icon"><Heart weight="light" className="pi ico" aria-hidden="true" /></span>
                      <h3 className="ab-blok__title">Patient Impact</h3>
                      <p>We reduce the need for unnecessary invasive biopsies by offering a painless screening experience that improves patient comfort and compliance.</p>
                    </article>
                    <article className="ab-blok__col">
                      <p className="ab-blok__tag mono">Social &amp; Economic<span aria-hidden="true"></span></p>
                      <span className="ab-blok__icon"><Globe weight="light" className="pi ico" aria-hidden="true" /></span>
                      <h3 className="ab-blok__title">Social &amp; Economic Impact</h3>
                      <p>Through affordable medical devices and digital connectivity, we expand access to advanced cancer screening, bringing quality healthcare to community clinics and underserved populations.</p>
                    </article>
                </div>
              </div>
            </section>

            {/* ============ CERTIFICATIONS ============ */}
            <section className="section section--rule" id="certifications">
              <div className="container ab-sec">
                <div className="ab-sec__head reveal">
                  <span className="label mono ab-eyebrow">Certifications</span>
                  <h2>Regulatory <span className="accent">Compliance</span></h2>
                </div>
                <div className="ab-sec__body reveal">
                  <p className="ab-lead">Committed to global quality standards and regulatory compliance in medical device innovation.</p>
                  <ul className="ab-certlist">
                    <li className="ab-certrow">
                      <span className="ab-certrow__logo"><img src="/assets/bsi-iso.webp" alt="BSI and ISO 13485:2016 medical devices quality management certification" width="600" height="255" loading="lazy" decoding="async" /></span>
                      <div><h3 className="ab-certrow__name">BSI · ISO 13485:2016</h3><p>Medical devices quality management system</p></div>
                      <i aria-hidden="true"></i>
                    </li>
                    <li className="ab-certrow">
                      <span className="ab-certrow__logo"><img src="/assets/cdsco.webp" alt="CDSCO – Central Drugs Standard Control Organisation, Government of India" width="399" height="389" loading="lazy" decoding="async" /></span>
                      <div><h3 className="ab-certrow__name">CDSCO</h3><p>Central Drugs Standard Control Organisation, Ministry of Health, Government of India</p></div>
                      <i aria-hidden="true"></i>
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
