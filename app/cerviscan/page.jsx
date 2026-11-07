import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "CerviScan — Cervical Cancer Screening Device | Sascan Meditech",
  description:
    "CerviScan is a hand-held non-invasive device for cervical cancer screening and early detection, capturing fluorescence and diffuse reflectance images in vivo. Currently under clinical validation.",
};

export default function CerviScanPage() {
  return (
    <>
      <Header active="products" />
      <div className="page-product">
        <main id="main">
            <section className="sp-hero" id="overview">
              <div className="container">
                <div className="tag-badge reveal"><span>Products / CerviScan</span></div>
                <div className="sp-hero__row reveal">
                  <h1 className="sp-title">CerviScan</h1>
                  <div className="sp-hero__side">
                    <p className="sp-lead">Cervical cancer ranks as the number one form of cancer in India among women belonging to the socio-economically disadvantaged rural population and is the leading cause of cancer death for women in developing countries.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="section section--rule" id="device">
              <div className="container sp-device cv-device">
                <div className="reveal">
                  <h2 className="sp-h2">Cervical Cancer Screening Device</h2>
                  <p className="pb-p">Cervical cancer ranks as the number one form of cancer in India among women belonging to the socio-economically disadvantaged rural population and is the leading cause of cancer death for women in developing countries. As against the prevailing techniques such as Pap smear and colposcopy (with VIA and VILI), optical technologies can improve the accuracy and speed of cervical cancer screening as these can detect changes in tissue architecture, cell morphology and biochemical composition. Towards this Sascan has developed a hand-held non-invasive device for cervical cancer screening and early detection of cervical cancer by capturing fluorescence and diffuse reflectance images in vivo through an inserted speculum. With the help of proprietary software and multimodal imaging technology the clinician is able to examine the cervix and assess the grade of cervical intraepithelial neoplasia (CIN) with the help of a machine learning (ML) algorithm on illumination with LED light sources centred at the peaks of PpIX and oxy/deoxy-genated haemoglobin (HbO2) absorption.</p>
                  <p className="pb-p">The processed images are analyzed and pseudo colour mapped to locate the most malignant site on the cervix for biopsy and pathological confirmation of the CIN with improved accuracy, thereby minimizing under diagnosis and patient trauma. The DR ratio image will be superimposed on the Hammonds clock diagram to locate the exact site of biopsy thereby avoiding unwanted multiple biopsies and attaining high diagnostic accuracy.</p>
                </div>
                <figure className="sp-fig reveal">
                  <div className="sp-fig__img sp-fade">
                    <img src="/assets/cerviscan/cerviscan-device.webp" width="1200" height="1200" alt="CerviScan imaging device with tablet on a tripod" decoding="async" />{" "}<img src="/assets/cerviscan/cerviscan-setup.webp" width="1200" height="900" alt="CerviScan setup with the tablet showing the patient directory" decoding="async" />
                  </div>
                </figure>
              </div>
            </section>

            <section className="section section--rule sx" id="validation">
              <div className="container">
                <h2 className="sp-h2 sx-title reveal">Currently Under Clinical Validation</h2>
                <ul className="sx-list sx-list--rows reveal">
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>The pilot studies with the first prototype of CerviScan were conducted in 109 patients at the Kasturba Medical College, Manipal. A sensitivity of 100% and specificity of 93% was obtained in discriminating normal from abnormal (precancer and cancer) cervix in the studied population. The study results are published in the Artificial Intelligence in Health journal <a href="https://accscience.com/journal/AIH/2/3/10.36922/aih.8527" target="_blank" rel="noopener">(Phebe et al, 2025).</a></span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>The Phase-1 trial was conducted in 500 women at the SAT Hospital, Govt Medical College, Thiruvananthapuram. A multi-centric trial covering 5 institutions under the Indian Council for Medical Research (ICMR), Govt of India, is initiated as part of the Medtech Mitra scheme, to develop an algorithm and to validate the device.</span></li>
                    <li><span className="sx-check"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.8" /></svg></span><span>After completing the multi-centric trials, and the CDSCO approval, the device will be introduced into the market.</span></li>
                </ul>
              </div>
            </section>
          </main>
      </div>
      <Footer />
    </>
  );
}
