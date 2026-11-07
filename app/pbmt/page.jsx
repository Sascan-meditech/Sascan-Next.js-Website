import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Photobiomodulation Therapy (PBMT) | Sascan Meditech",
  description:
    "Photobiomodulation therapy (PBMT), also known as low-level laser therapy, is a non-invasive healing light therapy using red and near-infrared light to treat pain, reduce inflammation and improve tissue repair.",
};

export default function PbmtPage() {
  return (
    <>
      <Header />
      <div className="page-pbmt">
        <main id="main">
            <section className="pb-page" id="overview">
              <div className="container pb-layout">
                <article className="pb-article">
                  <div className="reveal">
                    <div className="tag-badge"><span>Technology / PBMT</span></div>
                    <h1 className="pb-title">Photobiomodulation Therapy <span className="accent">(PBMT)</span></h1>
                    <p className="pb-lead">Photobiomodulation (PBMT) therapy, also known as low-level laser therapy (LLLT), is a non-invasive healing light therapy that uses <strong className="term">red and near infrared light</strong> to treat pain, reduce inflammation, and improve tissue repair.</p>
                    <p className="pb-p">A lot of biological mechanisms has been proposed that are associated with promoting physiological change through PBMT. Near-infrared light in the <strong className="term">650-1000 nm</strong> wavelength range with a sufficient power density has been largely associated with PBMT. According to the first law of photobiology, for any photochemical reaction to take place within a biological tissue, the absorption bands of the chromophores present within the tissue must be able to absorb photons.</p>
                  </div>

                  <div className="reveal" id="mechanism">
                    <h2 className="pb-h2">Mitochondrial Mechanism of <span className="accent">Photobiomodulation (PBM)</span></h2>
                    <p className="pb-p"><strong className="term">Cytochrome C oxidase (CCO)</strong> is the terminal enzyme (unit IV) in the electron transport chain situated in the outer mitochondrial membrane. During PBM, the mitochondrial chromophore CCO increases ROS generation, which in turn activates the PI3K/Akt pathway, while the effector enzyme, adenylyl cyclase, converts ATP to cyclic AMP (cAMP). cAMP could either activate pKA and RAS which further leads SIRT and ERK signaling to promote cell survival, inhibit inflammatory processes, and apoptosis. In the damaged cells, CCO, the protein that serves the purpose of end-point electron acceptor, becomes inhibited by non- covalent binding of <strong className="term">nitric oxide (NO)</strong>. When damaged cells are irradiated with low level NIR light, the photons in it will be absorbed by CCO leading to an increase in mitochondrial <strong className="term">adenosine tri-phosphate (ATP)</strong> and release the nitric oxide which diffuses into the blood, increasing local blood flow and vasodilation.</p>
                    <p className="pb-p">An increase in mitochondrial membrane potential (MMP), ATP, cyclic adenosine monophosphate (cAMP), and NO is necessary for PBM to exert its effects. This is because CCO is activated in this process thereby catalyzing the reduction of oxygen to water. The activation of specific cellular networks requires NO as a signaling agent. PBM boosts NO production by cleaving metal compounds in cytochrome c and/or increasing cytochrome c levels. It is thought that PBM stimulates mitochondria-mediated cellular processes in damaged or dysfunctional tissue, leading to a broad variety of therapeutic effects.</p>
                    <p className="pb-p">Through continuous exposure of photons for a reasonable amount of time, a brief burst of <strong className="term">reactive oxygen species (ROS)</strong> occurs in the mitochondria and activation of redox-sensitive genes, and related transcription factors including NF-κβ happens. The PBMT stimulates gene expression for cellular proliferation, migration, and the production of anti-inflammatory cytokines and growth factors. The role PBM plays in the mitochondria has brought it to the forefront as a potential therapeutic candidate in the treatment of neurodegenerative diseases, which are currently incurable due to their complex and multifaceted nature. Studies have also demonstrated the <strong className="term">Neuroprotective efficacy</strong> of PBM in several models of neurodegenerative diseases.</p>
                  </div>
                </article>

                <aside className="pb-aside" id="video" aria-label="Images and video">
                  <div className="pb-gallery reveal" data-gallery="" aria-roledescription="carousel" aria-label="PBMT images">
                  <ul className="pb-gallery__stage">
                    <li className="pb-gallery__slide is-active"><img src="/assets/pbmt-cell-mechanism.webp" width="800" height="627" alt="Red and near-infrared light (600–900 nm) passing through tissue and the cell membrane to the mitochondrial respiratory chain, where cytochrome c oxidase produces ROS, NO and ATP" decoding="async" /></li>
                    <li className="pb-gallery__slide" aria-hidden="true"><img loading="lazy" src="/assets/pbmt-signaling-pathway.webp" width="1024" height="574" alt="Photobiomodulation signalling pathway: cytochrome-c-oxidase activation, NO-mediated vasodilation, increased ROS and PI3K/AKT pathway, ATP to cAMP via adenylyl cyclase, RAS/RAF/MAPK/ERK and pKA/SIRT pathways" decoding="async" /></li>
                    <li className="pb-gallery__slide" aria-hidden="true"><img loading="lazy" src="/assets/pbmt-regenerative-effects.webp" width="640" height="405" alt="Regenerative potential of photobiomodulation therapy: angiogenesis, collagen synthesis, cell proliferation and differentiation, mitochondrial ATP production, and modulation of cytokines and growth factors" decoding="async" /></li>
                  </ul>
                  <button type="button" className="pb-gallery__arrow pb-gallery__arrow--prev" data-prev="" aria-label="Previous image"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg></button>{" "}<button type="button" className="pb-gallery__arrow pb-gallery__arrow--next" data-next="" aria-label="Next image"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg></button>
                  </div>
                  <div className="pb-vcard reveal">
                    <p className="pb-vcard__label mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M10 8.5l5 3.5-5 3.5z" /></svg>Watch the full video to know more.</p>
                    <div className="pb-video">
                      <iframe src="https://www.youtube-nocookie.com/embed/0MMewRIP51M?rel=0" title="Photobiomodulation Therapy (PBMT): What is it? How does it work? What can it do for you?" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <p className="pb-vcard__title">Photobiomodulation Therapy (PBMT): What is it? How does it work? What can it do for you?</p>
                  </div>
                </aside>
              </div>
            </section>
          </main>
      </div>
      <Footer />
    </>
  );
}
