import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowsClockwise, Crosshair, ShieldCheck, Target } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Multimodal Imaging Technology | Sascan Meditech",
  description:
    "Sascan multimodal imaging: a clinically validated, point-of-care multispectral cancer screening platform with a patented optical engine and cloud-based machine learning analysis.",
};

export default function MultimodalImagingPage() {
  return (
    <>
      <Header />
      <div className="page-pbmt">
        <main id="main">
            <section className="pb-page" id="overview">
              <div className="container pb-layout">
                <article className="pb-article">
                  <div className="reveal">
                    <div className="tag-badge"><span>Technology / Multimodal Imaging</span></div>
                    <h1 className="pb-title">Multimodal Imaging <span className="accent">Technology</span></h1>
                    <p className="pb-lead">Biochemical, morphological and structural changes occur in squamous epithelial tissues of the oral cavity, cervix and internal body linings, during cancer development.</p>
                    <p className="pb-p">Conventional Oral Examination (COE) using white light is practiced in low-resource settings for screening and early detection of squamous cell carcinoma (SCC) of the oral cavity. Whereas, for cervical cancer screening, Pap smear cytology is the standard practice. Both these techniques do not provide the desirable sensitivity and specificity for screening and early detection of cancer.</p>
                  </div>

                  <div className="reveal" id="technology">
                    <h2 className="pb-h2 pb-h2--one">Clinically Validated, Point-of-Care <span className="accent">Cancer Screening Technology</span></h2>
                    <p className="pb-p">We use a <strong className="term">patented optical engine</strong> for uniform illumination of the tissue, blocking the surface reflections and collimation of diffusely reflected light emanating from the tissue through suitable optical filters. We have built proprietary hardware and software to control sequential triggering of LEDs and synchronous image capture on a Windows environment. The captured images are processed and analyzed with the help of <strong className="term">cloud-based machine learning algorithm</strong> to provide real-time user feedback.</p>
                    <p className="pb-p">The system is designed to deliver consistent, high-quality imaging with minimal operator dependency, ensuring reliable performance across different clinical settings. Its advanced imaging and AI-assisted analysis support clinicians in making faster, more informed decisions while maintaining a seamless and user-friendly workflow.</p>
                  </div>

                  <div className="reveal" id="benefits">
                    <h2 className="pb-h2">Key Clinical <span className="accent">Benefits</span></h2>
                    <ul className="mm-benefits">
                      <li><span className="mm-benefits__icon"><Crosshair weight="light" className="pi ico" aria-hidden="true" /></span><span>Non invasive, point of care solutions</span></li>
                      <li><span className="mm-benefits__icon"><Target weight="light" className="pi ico" aria-hidden="true" /></span><span>Accurately identifies the most malignant site for biopsy</span></li>
                      <li><span className="mm-benefits__icon"><ArrowsClockwise weight="light" className="pi ico" aria-hidden="true" /></span><span>Reduces unnecessary repeat biopsies</span></li>
                      <li><span className="mm-benefits__icon"><ShieldCheck weight="light" className="pi ico" aria-hidden="true" /></span><span>Patented and clinically validated</span></li>
                    </ul>
                  </div>

                  <div className="reveal" id="challenges">
                    <h2 className="pb-h2">Challenges in Current <span className="accent">Oral Cancer Screening Technologies</span></h2>
                    <ul className="mm-list">
                      <li>Existing oral cancer screening devices rely mainly on visual examination of tissue autofluorescence or reflectance under LED illumination.</li>
                      <li>These systems target absorption by biochemical constituents such as collagen, Protoporphyrin IX (PpIX), and NADH in tissue.</li>
                      <li>The diagnostic outcome of current devices is highly subjective and depends heavily on the clinical expertise of the examiner.</li>
                      <li>Clinicians often face difficulty in identifying the most malignant region for biopsy, which can result in underdiagnosis</li>
                      <li>This limitation frequently leads to late-stage detection of oral cancer, reducing treatment effectiveness.</li>
                    </ul>
                  </div>
                </article>

                <aside className="pb-aside" aria-label="Site analysis screen">
                  <figure className="mm-shot reveal">
                    <img src="/assets/multimodal-site-analysis.webp" width="1024" height="613" alt="Sascan site analysis software showing a fluorescence image of the left buccal mucosa with marked regions of interest, an analysis result scale grading each ROI as normal, suspect or critical, and a biopsy recommendation for ROI-3" decoding="async" />
                  </figure>
                </aside>
              </div>
            </section>
          </main>
      </div>
      <Footer />
    </>
  );
}
