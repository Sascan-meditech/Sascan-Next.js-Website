import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ApplyModal from "../../components/ApplyModal";
import { DEPARTMENTS, CAREERS_EMAIL } from "../../lib/careers";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Careers | Sascan Meditech",
  description:
    "Careers at Sascan Meditech, Thiruvananthapuram. View current openings and send us your resume.",
};

const EMAIL = CAREERS_EMAIL;
const mailto = (role) => `mailto:${EMAIL}?subject=${encodeURIComponent(`Application – ${role}`)}`;

const Chevron = () => (
  <CaretDown weight="regular" className="pi jo-chev" aria-hidden="true" />
);

export default function CareersPage() {
  return (
    <>
      <Header active="company" />
      <main id="main">
        <section className="jo-hero">
          <div className="container jo-wrap reveal">
            <nav className="jo-crumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">Careers</span>
            </nav>
            <h1 className="jo-title">Work With Us</h1>
            <p className="jo-lead">Join the Sascan team in Thiruvananthapuram and help build medical technology for early detection.</p>
          </div>
        </section>

        <section className="jo-list-section" id="openings">
          <div className="container jo-wrap">
            <div className="jo-list">
              {DEPARTMENTS.map((d, i) => (
                <details key={d.name} className="jo-dept reveal" open={i === 0}>
                  <summary className="jo-dept__head">
                    <h2 className="jo-dept__name">{d.name} <span className="jo-dept__count">({d.roles.length})</span></h2>
                    <Chevron />
                  </summary>

                  <ul className="jo-roles">
                    {d.roles.map((r) => (
                      <li key={r.title} className="jo-role">
                        <details className="jo-role__toggle">
                          <summary className="jo-role__row">
                            <span className="jo-role__title">{r.title}</span>
                            <span className="jo-role__exp">{r.experience}</span>
                            <span className="jo-role__more">View details</span>
                          </summary>
                          <div className="jo-role__body">
                            {r.summary && <p className="jo-role__summary">{r.summary}</p>}
                            {(r.type || r.location || r.salary) && (
                              <ul className="jo-role__meta">
                                {r.type && <li>{r.type}</li>}
                                {r.location && <li>{r.location}</li>}
                                {r.salary && <li>{r.salary}</li>}
                              </ul>
                            )}
                            <dl className="jo-role__facts">
                              <div><dt>Skills</dt><dd>{r.skills.join(", ")}</dd></div>
                              {r.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                              <div><dt>Resume to</dt><dd><a href={mailto(r.title)}>{EMAIL}</a></dd></div>
                            </dl>
                          </div>
                        </details>
                        <a className="jo-role__apply" href={mailto(r.title)} data-apply-dept={d.name} data-apply-role={r.title} aria-label={`Apply now for ${r.title}`}>Apply now</a>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ApplyModal />
      <Footer />
    </>
  );
}
