import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Careers | Sascan Meditech",
  description:
    "Careers at Sascan Meditech, Thiruvananthapuram. View current openings and send us your resume.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main">
          {/* ============ PAGE HERO ============ */}
          <section className="page-hero">
            <div className="container reveal">
              <nav className="breadcrumb mono" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Careers</span>
              </nav>
              <span className="label mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12h18" /></svg>Careers</span>
              <h1 className="page-hero__title">Work <span className="accent">With Us.</span></h1>
              <p className="lead">Join the Sascan team in Thiruvananthapuram and help build medical technology for early detection.</p>
            </div>
          </section>

          {/* ============ OPENINGS ============ */}
          <section className="section section--rule" id="openings">
            <div className="container">
              <div className="openings__head reveal">
                <h2 className="openings__title">Open Positions</h2>
                <span className="count-pill mono">2 openings</span>{" "}<span className="hiring mono"><span className="live__dot" aria-hidden="true"></span>We're hiring</span>
              </div>

              <div className="roles">
                <article className="role reveal" aria-labelledby="job-swdev">
                  <div className="role__top">
                    <span className="role__tag mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" /></svg>Engineering</span>{" "}<span className="role__type mono">Full-Time</span>
                  </div>
                  <h3 className="role__title" id="job-swdev">Software Developer</h3>
                  <ul className="role__meta">
                    <li><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.5" /></svg>Thiruvananthapuram, Kerala</li>
                    <li><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" /></svg>5+ years</li>
                    <li><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M16 12.5h.01M3 10h18" /></svg>Based on Experience</li>
                  </ul>

                  <div className="role__block">
                    <h4 className="role__label mono">Skills</h4>
                    <ul className="chips"><li>C# WPF .NET</li><li>Android Java</li><li>SQL</li><li>OOP Concepts</li></ul>
                  </div>
                  <dl className="role__facts">
                    <div><dt className="mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></svg>Qualification</dt><dd>Bachelor's or Master's Degree in Computer Science, Software Engineering, or related field</dd></div>
                    <div><dt className="mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V10l6 4V10l6 4V6l6 3v12z" /><path d="M7 17h2M12 17h2M17 17h2" /></svg>Industry</dt><dd>Medical Equipment Manufacturing</dd></div>
                  </dl>
                  <footer className="role__foot">
                    <a href="mailto:office.sascan@gmail.com?subject=Application%20%E2%80%93%20Software%20Developer" className="btn btn--primary btn--hook">Apply now</a>
                    <p className="role__email mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg><span>Resume to <a href="mailto:office.sascan@gmail.com?subject=Application%20%E2%80%93%20Software%20Developer">office.sascan@gmail.com</a></span></p>
                  </footer>
                </article>

                <article className="role reveal" aria-labelledby="job-iddesign">
                  <div className="role__top">
                    <span className="role__tag mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" /><circle cx="11" cy="11" r="2" /></svg>Design</span>{" "}<span className="role__type mono">Internship</span>
                  </div>
                  <h3 className="role__title" id="job-iddesign">Industrial Design Intern</h3>
                  <p className="role__summary">We're looking for a passionate Industrial Design Intern to support our team in designing and prototyping medical devices.</p>

                  <div className="role__block">
                    <h4 className="role__label mono">Skills</h4>
                    <ul className="chips"><li>CAD · Rhino</li><li>CAD · SolidWorks</li><li>Prototyping</li><li>Testing</li></ul>
                  </div>
                  <dl className="role__facts">
                    <div><dt className="mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></svg>Qualification</dt><dd>B.Des, M.Des or PG Diploma in Product/Industrial Design</dd></div>
                    <div><dt className="mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.3-8.7-9C2.2 7.6 4.3 4.5 7.6 4.5c1.9 0 3.4 1 4.4 2.5 1-1.5 2.5-2.5 4.4-2.5 3.3 0 5.4 3.1 4.3 6.5C19 15.7 12 20 12 20z" /></svg>Interest</dt><dd>Healthcare and user-focused design</dd></div>
                  </dl>
                  <footer className="role__foot">
                    <a href="mailto:office.sascan@gmail.com?subject=Application%20%E2%80%93%20Industrial%20Design%20Intern" className="btn btn--primary btn--hook">Apply now</a>
                    <p className="role__email mono"><svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg><span>Resume to <a href="mailto:office.sascan@gmail.com?subject=Application%20%E2%80%93%20Industrial%20Design%20Intern">office.sascan@gmail.com</a></span></p>
                  </footer>
                </article>
              </div>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}
