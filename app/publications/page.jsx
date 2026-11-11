import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Publications | Sascan Meditech",
  description: "Peer-reviewed studies of Sascan’s devices, and independent research about them.",
};

const PUBLICATIONS = [
  {
    year: "2026",
    items: [
      {
        title:
          "Conceptualising inclusive in inclusive innovations: evidence from the AI-based MedTech for cancer detection in India",
        authors: "Joshi P, Kale D, Guntupalli AM, Wield D",
        source: "Science and Public Policy 53(1) 131",
        doi: "10.1093/scipol/scaf081",
        badge: "Independent",
        note: "An independent academic case study of OralScan as an inclusive medical innovation.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title:
          "Screening and early detection of cervical intraepithelial neoplasia and cervicitis using a hemoglobin absorption map-derived machine learning algorithm",
        authors: "George P, Upadhya R, Suvarnadas R, Sampthalia N, Narayanan S",
        source: "Artificial Intelligence in Health 2(3) 125–137",
        doi: "10.36922/aih.8527",
        note: "Pilot study.",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        title:
          "Bimodal multispectral imaging system with cloud-based machine learning algorithm for real-time screening and detection of oral potentially malignant lesions and biopsy guidance",
        authors: "Narayanan S, et al.",
        source: "Journal of Biomedical Optics 26(8) 086003",
        doi: "10.1117/1.JBO.26.8.086003",
        note:
          "Multicentre study at six hospitals. Against histopathology, 97.5% sensitivity and 92.5% specificity separating oral potentially malignant lesions from normal mucosa; 82.0% and 96.6% separating all abnormal sites from normal.",
      },
    ],
  },
];

export default function PublicationsPage() {
  return (
    <>
      <Header active="resources" />
      <main id="main">
        <section className="sp-hero" id="overview">
          <div className="container">
            <div className="tag-badge reveal"><span>Resources / Publications</span></div>
            <div className="sp-hero__row reveal">
              <h1 className="sp-title pt-title">Publications</h1>
              <div className="sp-hero__side">
                <p className="sp-lead">Peer-reviewed studies of Sascan’s devices, and independent research about them.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--rule" id="publications">
          <div className="container pubs">
            {PUBLICATIONS.map((group) => (
              <div className="pubs__year reveal" key={group.year}>
                <h2 className="pubs__label mono">{group.year}</h2>
                <ul className="pubs__list">
                  {group.items.map((p) => (
                    <li className="pub" key={p.doi}>
                      <h3 className="pub__title">
                        <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener">{p.title}</a>
                      </h3>
                      <p className="pub__meta">
                        {p.authors} · <em>{p.source}</em> ·{" "}
                        <a className="pub__doi" href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener">doi:{p.doi}</a>
                        {p.badge && <span className="pub__badge mono">{p.badge}</span>}
                      </p>
                      {p.note && <p className="pub__note">{p.note}</p>}
                      <a className="pub__link" href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener">
                        Read the paper
                        <ArrowUpRight weight="regular" className="pi" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
